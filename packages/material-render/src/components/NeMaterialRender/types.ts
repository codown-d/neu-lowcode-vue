import { ComponentType } from "../../constant/type";
import { NeConfigProviderProps } from "../NeConfigProvider";

// types.ts: 组件渲染器的类型定义
export interface NeMaterialElementProps {
  id?: string;
  type?: ComponentType;
  component: string; // 组件名称，例如 'a-input', 'a-button'
  props?: Record<string, any>; // 组件的 props
  model?: string; // v-model 绑定的属性
  events?: Record<string, Function>; // 事件，例如 { click: () => alert('clicked') }
  elements?: NeMaterialElementProps[]; // 子组件
  slots?: Record<string, string>; // 具名插槽内容
}
export interface NeMaterialRenderProps {
  config: {
    configProvider:NeConfigProviderProps
  }
  events: any
  apis: {},
  elements?: NeMaterialElementProps[]; // 子组件

}
