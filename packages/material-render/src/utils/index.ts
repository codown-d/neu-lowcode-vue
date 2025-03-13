import { Component } from "vue";
import { componentMap } from "../constant";
import { localesMap } from "../locale";

// 封装方法，接受组件名称并返回组件
export function getComponentByName(componentName: string): Component | null {
  return componentMap[componentName] || null;
}
// 封装方法，接受组件名称并返回组件
export function getLocaleByName(componentName: string): Component | null {
  return localesMap[componentName] || null;
}