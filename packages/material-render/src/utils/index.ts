import { Component, ref } from "vue";
import { componentMap } from "../constant";
import { localesMap } from "../locale";
import { NeMaterialElementProps } from "../components/NeRenderCore";

export function getComponentByName(componentName: string): Component | null {
  return componentMap[componentName] || null;
}
export function getLocaleByName(componentName: string): Component | null {
  return localesMap[componentName] || null;
}

export const getFormData = (elements: NeMaterialElementProps[]) => {
  const formData = {};
  const result = {};
  const extractFormData = (list, formId) => {
    list.forEach((item) => {
      if (item.type === "form") {
        const formId = item.id;
        result[formId] = {};
      }
      if (item.type === "form-item") {
        const itemName = item.props?.name; 
        formId&&(result[formId][itemName] = ""); 
      }
      item.elements.forEach((ite) => {
        if (ite.elements) {
          extractFormData(ite.elements, item.type === "form" ? item.id : null);
        }
      });
    });
    return result;
  };
  return extractFormData(elements, null);
};
