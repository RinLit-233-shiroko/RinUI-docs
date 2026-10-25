export interface IconCategory {
  value: string
  label: string
  keywords: string[]
}

export const iconCategories: IconCategory[] = [
  { value: 'all', label: '全部类型', keywords: [] },
  { value: 'action', label: '操作与编辑', keywords: ['add', 'delete', 'dismiss', 'edit', 'save', 'copy', 'cut', 'clipboard', 'send', 'share', 'download', 'upload', 'refresh', 'sync', 'undo', 'redo', 'filter', 'sort'] },
  { value: 'navigation', label: '导航与方向', keywords: ['arrow', 'chevron', 'direction', 'home', 'location', 'map', 'compass', 'navigation', 'pin', 'back', 'forward'] },
  { value: 'communication', label: '沟通与邮件', keywords: ['chat', 'mail', 'call', 'comment', 'contact', 'megaphone', 'feed', 'inbox', 'message'] },
  { value: 'people', label: '人物与组织', keywords: ['person', 'people', 'group', 'team', 'guest', 'organization', 'briefcase', 'id'] },
  { value: 'files', label: '文件与文件夹', keywords: ['document', 'folder', 'page', 'note', 'book', 'notebook', 'library', 'archive', 'attach', 'file', 'clipboard'] },
  { value: 'media', label: '图片与音视频', keywords: ['image', 'video', 'music', 'audio', 'speaker', 'mic', 'camera', 'photo', 'film', 'record', 'play', 'pause', 'stop', 'subtitles'] },
  { value: 'layout', label: '布局与排版', keywords: ['layout', 'column', 'row', 'grid', 'panel', 'split', 'align', 'indent', 'border', 'resize', 'position', 'space'] },
  { value: 'text', label: '文本与字体', keywords: ['text', 'font', 'letter', 'number', 'textbox', 'typography', 'character', 'spellcheck'] },
  { value: 'data', label: '数据与图表', keywords: ['data', 'database', 'table', 'chart', 'graph', 'pulse', 'server', 'storage', 'analytics', 'code', 'formula'] },
  { value: 'devices', label: '设备与屏幕', keywords: ['desktop', 'phone', 'tablet', 'screen', 'window', 'keyboard', 'mouse', 'laptop', 'monitor', 'controller', 'device'] },
  { value: 'system', label: '系统与设置', keywords: ['settings', 'battery', 'wifi', 'bluetooth', 'power', 'plug', 'developer', 'options', 'task', 'toolbox', 'apps'] },
  { value: 'security', label: '安全与隐私', keywords: ['lock', 'key', 'shield', 'password', 'fingerprint', 'privacy', 'scan', 'eye', 'incognito'] },
  { value: 'status', label: '状态与提示', keywords: ['checkmark', 'error', 'warning', 'info', 'question', 'alert', 'prohibited', 'hint', 'success', 'important'] },
  { value: 'weather', label: '天气与自然', keywords: ['weather', 'sun', 'moon', 'cloud', 'rain', 'snow', 'wind', 'temperature', 'thermometer', 'umbrella', 'leaf', 'tree', 'plant', 'flower'] },
  { value: 'shapes', label: '形状与符号', keywords: ['shape', 'square', 'circle', 'rectangle', 'triangle', 'hexagon', 'diamond', 'star', 'heart', 'symbol'] },
  { value: 'transport', label: '交通与出行', keywords: ['vehicle', 'car', 'bus', 'train', 'airplane', 'boat', 'bicycle', 'taxi', 'walk'] },
  { value: 'finance', label: '金融与支付', keywords: ['money', 'wallet', 'payment', 'card', 'receipt', 'currency', 'coin', 'bank', 'cash'] },
  { value: 'commerce', label: '购物与商品', keywords: ['cart', 'bag', 'shop', 'store', 'sale', 'tag', 'gift', 'barcode', 'box'] },
  { value: 'food', label: '食物与饮品', keywords: ['food', 'drink', 'coffee', 'cake', 'pizza', 'fruit', 'restaurant', 'cup'] },
  { value: 'health', label: '健康与医疗', keywords: ['health', 'medical', 'stethoscope', 'pill', 'first_aid', 'heart_pulse', 'hospital'] },
  { value: 'education', label: '教育与学习', keywords: ['graduation', 'learning', 'school', 'book', 'notebook', 'education', 'student'] },
  { value: 'games', label: '游戏与娱乐', keywords: ['game', 'controller', 'dice', 'puzzle', 'trophy', 'sport', 'ball'] },
  { value: 'accessibility', label: '无障碍', keywords: ['accessibility', 'braille', 'sign_language', 'hearing', 'wheelchair'] },
  { value: 'emoji', label: '表情与贴纸', keywords: ['emoji', 'sticker', 'reaction', 'smile'] },
  { value: 'buildings', label: '建筑与地点', keywords: ['building', 'house', 'home', 'factory', 'bank', 'hospital', 'school'] }
]

const categoryLabels: Record<string, Record<string, string>> = {
  all: { en: 'All categories', ja: 'すべてのカテゴリ', zh: '全部类型' },
  action: { en: 'Actions and editing', ja: '操作・編集', zh: '操作与编辑' },
  navigation: { en: 'Navigation and direction', ja: 'ナビゲーション・方向', zh: '导航与方向' },
  communication: { en: 'Communication and mail', ja: 'コミュニケーション・メール', zh: '沟通与邮件' },
  people: { en: 'People and organization', ja: '人物・組織', zh: '人物与组织' },
  files: { en: 'Files and folders', ja: 'ファイル・フォルダー', zh: '文件与文件夹' },
  media: { en: 'Images, audio, and video', ja: '画像・音声・動画', zh: '图片与音视频' },
  layout: { en: 'Layout and typography', ja: 'レイアウト・文字組み', zh: '布局与排版' },
  text: { en: 'Text and fonts', ja: 'テキスト・フォント', zh: '文本与字体' },
  data: { en: 'Data and charts', ja: 'データ・チャート', zh: '数据与图表' },
  devices: { en: 'Devices and screens', ja: 'デバイス・画面', zh: '设备与屏幕' },
  system: { en: 'System and settings', ja: 'システム・設定', zh: '系统与设置' },
  security: { en: 'Security and privacy', ja: 'セキュリティ・プライバシー', zh: '安全与隐私' },
  status: { en: 'Status and alerts', ja: '状態・通知', zh: '状态与提示' },
  weather: { en: 'Weather and nature', ja: '天気・自然', zh: '天气与自然' },
  shapes: { en: 'Shapes and symbols', ja: '図形・記号', zh: '形状与符号' },
  transport: { en: 'Transport and travel', ja: '交通・移動', zh: '交通与出行' },
  finance: { en: 'Finance and payments', ja: '金融・決済', zh: '金融与支付' },
  commerce: { en: 'Shopping and products', ja: 'ショッピング・商品', zh: '购物与商品' },
  food: { en: 'Food and drink', ja: '食べ物・飲み物', zh: '食物与饮品' },
  health: { en: 'Health and medical', ja: '健康・医療', zh: '健康与医疗' },
  education: { en: 'Education and learning', ja: '教育・学習', zh: '教育与学习' },
  games: { en: 'Games and entertainment', ja: 'ゲーム・エンターテインメント', zh: '游戏与娱乐' },
  accessibility: { en: 'Accessibility', ja: 'アクセシビリティ', zh: '无障碍' },
  emoji: { en: 'Emoji and stickers', ja: '絵文字・ステッカー', zh: '表情与贴纸' },
  buildings: { en: 'Buildings and places', ja: '建物・場所', zh: '建筑与地点' }
}

export function getIconCategoryLabel(value: string, locale: string): string {
  return categoryLabels[value]?.[locale] ?? categoryLabels[value]?.en ?? value
}

export function matchesIconCategory(name: string, categoryValue: string): boolean {
  if (categoryValue === 'all') return true

  const category = iconCategories.find((item) => item.value === categoryValue)
  if (!category) return true

  const baseName = name.replace(/^ic_fluent_/, '').replace(/_(filled|regular)$/, '').replace(/_\d+$/, '')
  return category.keywords.some((keyword) => baseName.includes(keyword))
}
