// types.ts: 组件渲染器的类型定义
export interface ComponentConfig {
  component: string // 组件名称，例如 'a-input', 'a-button'
  props?: Record<string, any> // 组件的 props
  events?: Record<string, Function> // 事件，例如 { click: () => alert('clicked') }
  children?: ComponentConfig[] // 子组件
  slots?: Record<string, string> // 具名插槽内容
  model?: string // v-model 绑定的属性
}
