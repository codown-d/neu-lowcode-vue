import { ComponentType } from "../../constant/type";

export interface NeMaterialElementProps {
    id: string;
    name: string; // 组件名称，
    type: ComponentType;
    props?: Record<string, any>; // 组件的 props
    modelValue?: string; // v-model 绑定的属性
    defaultValue?:String | Number | Boolean | Object | Array<any>;
    events?: Record<string, Function>; // 事件，例如 { click: () => alert('clicked') }
    slots?: Record<string, string>; // 具名插槽内容
    parentId?:string
    elements?: NeMaterialElementProps[]; // 子组件
  }