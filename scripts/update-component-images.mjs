import fs from 'node:fs'
import path from 'node:path'

const docsRoot = path.resolve('docs')
const examplesRoot = path.join(docsRoot, 'public/assets/images/examples')
const componentNames = fs
  .readdirSync(examplesRoot)
  .filter((name) => name.endsWith('-light.png'))
  .map((name) => name.replace(/-light\.png$/, ''))
  .sort()

const locales = [
  {
    root: docsRoot,
    alt: (name) => `${name} examples in light and dark themes`,
    skipNestedLocales: true
  },
  {
    root: path.join(docsRoot, 'zh'),
    alt: (name) => `${name} 组件示例（亮色与暗色）`
  },
  {
    root: path.join(docsRoot, 'ja'),
    alt: (name) => `${name} コンポーネントのライト／ダーク例`
  }
]

function walk(directory, files = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      walk(filename, files)
    } else if (entry.name.endsWith('.md')) {
      files.push(filename)
    }
  }
  return files
}

function findDocument(locale, name, files) {
  return files.find((filename) => {
    if (path.basename(filename) !== `${name}.md`) return false
    if (locale.skipNestedLocales) {
      const relative = path.relative(locale.root, filename)
      return !relative.startsWith(`zh${path.sep}`) && !relative.startsWith(`ja${path.sep}`)
    }
    return true
  })
}

function cleanOldScreenshots(source) {
  let result = source

  result = result.replace(
    /<div\s+align=["']center["']>\s*(?:<img\b[^>]*>\s*)+<\/div>\s*/gi,
    ''
  )
  result = result.replace(/^\s*<img\b[^>]*>\s*(?:<!--.*?-->)?\s*$/gim, '')
  result = result.replace(/^\s*!\[[^\]]*\]\(\/assets\/images\/[^)]*\)\s*$/gim, '')
  result = result.replace(/\n{3,}/g, '\n\n')
  return result
}

function imageBlock(name, alt) {
  return `<VPImage
  :image="{
    light: '/assets/images/examples/${name}-light.png',
    dark: '/assets/images/examples/${name}-dark.png',
    alt: '${alt}'
  }"
  width="1000"
/>`
}

function insertImage(source, name, alt) {
  const block = imageBlock(name, alt)
  let result = source.replace(
    new RegExp(
      `<VPImage\\s+:image="\\{\\s*light: '/assets/images/examples/${name}-light\\.png',\\s*dark: '/assets/images/examples/${name}-dark\\.png',\\s*alt: '[^']*'\\s*\\}"\\s+width="1000"\\s*/>\\s*`,
      'g'
    ),
    ''
  )

  const firstSection = result.search(/^##\s/m)
  if (firstSection === -1) {
    return `${result.trimEnd()}\n\n${block}\n`
  }

  const before = result.slice(0, firstSection).trimEnd()
  const after = result.slice(firstSection).trimStart()
  return `${before}\n\n${block}\n\n${after}`
}

let updated = 0
let missing = []

for (const locale of locales) {
  const files = walk(locale.root)
  for (const name of componentNames) {
    const filename = findDocument(locale, name, files)
    if (!filename) {
      missing.push(path.relative(locale.root, path.join(locale.root, name)))
      continue
    }

    const source = fs.readFileSync(filename, 'utf8').replace(/\r\n/g, '\n')
    const cleaned = cleanOldScreenshots(source)
    const result = insertImage(cleaned, name, locale.alt(name))
    fs.writeFileSync(filename, result)
    updated++
  }
}

console.log(`Updated ${updated} component documents.`)
if (missing.length) {
  console.log(`Missing ${missing.length} documents:`)
  for (const filename of missing) console.log(`- ${filename}`)
}
