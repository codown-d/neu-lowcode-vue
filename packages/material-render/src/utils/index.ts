import { Component, ref } from "vue";
import { componentMap } from "../constant";
import { localesMap } from "../locale";
import { NeMaterialElementProps } from "../components/NeRenderCore";

// 封装方法，接受组件名称并返回组件
export function getComponentByName(componentName: string): Component | null {
  return componentMap[componentName] || null;
}
// 封装方法，接受组件名称并返回组件
export function getLocaleByName(componentName: string): Component | null {
  return localesMap[componentName] || null;
}

export const getFormData = (elements: NeMaterialElementProps[]) => {
  console.log(elements);
  const formData = {};
  const result = {};
  const extractFormData = (list, formId) => {
    list.forEach((item) => {
      console.log("Processing item:", item); // 打印每个正在处理的元素
      if (item.type === "form") {
        const formId = item.id;
        result[formId] = {};
      }
      if (item.type === "form-item") {
        const itemName = item.props?.name; // 获取 form-item 的 name
        console.log("form-item name:", formId,itemName); // 打印 form-item 的 name
        formId&&(result[formId][itemName] = ""); // 将值存入对应的 form 中
      }
      item.elements.forEach((ite) => {
        if (ite.elements) {
          extractFormData(ite.elements, item.type === "form" ? item.id : null);
        }
      });
    });
    console.log("Recursive result:", result); // 打印每次递归返回的结果
    return result;
  };
  return extractFormData(elements, null);
};
