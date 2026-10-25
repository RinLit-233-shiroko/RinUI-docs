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

export function matchesIconCategory(name: string, categoryValue: string): boolean {
  if (categoryValue === 'all') return true

  const category = iconCategories.find((item) => item.value === categoryValue)
  if (!category) return true

  const baseName = name.replace(/^ic_fluent_/, '').replace(/_(filled|regular)$/, '').replace(/_\d+$/, '')
  return category.keywords.some((keyword) => baseName.includes(keyword))
}
