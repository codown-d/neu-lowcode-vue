import {
  ComponentInternalInstance,
  getCurrentInstance,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
import { NeMaterialRenderProps } from "../components/NeMaterialRender";
import { getFormData } from "../utils";
import { NeMaterialElementProps } from "../components/NeRenderCore";

export const useForm = (elements:NeMaterialElementProps[]) => {
  let  model = ref(getFormData(elements))
  console.log(123,model)
  return {
    modelForm:model,
  };
};

export const useEvents = (config) => {
  const instance = getCurrentInstance() as ComponentInternalInstance ;
  onBeforeMount(() => {
    config.events?.onBeforeMount?.(instance);
  });
  onMounted(() => {
    config.events?.onMounted?.(instance);
  });
  onBeforeUpdate(() => {
    config.events?.onBeforeUpdate?.(instance);
  });
  onUpdated(() => {
    config.events?.onUpdated?.(instance);
  });
  onBeforeUnmount(() => {
    config.events?.onBeforeUnmount?.(instance);
  });
  onUnmounted(() => {
    config.events?.onUnmounted?.(instance);
  });
  return {instance};
};
