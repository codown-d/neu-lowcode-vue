import { Component } from "vue";
import { componentMap } from "../constant";

// 封装方法，接受组件名称并返回组件
export function getComponentByName(componentName: string): Component | null {
    return componentMap[componentName] || null;
  }