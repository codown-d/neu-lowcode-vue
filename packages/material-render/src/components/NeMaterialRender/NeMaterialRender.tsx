import {
  defineComponent,
  resolveComponent,
  h,
  computed,
  ref,
  watch,
  defineAsyncComponent,
  inject,
  provide,
} from "vue";
import type { NeMaterialRenderProps } from "./types";
import NeConfigProvider, { NeConfigProviderProps } from "../NeConfigProvider";
import { getComponentByName } from "../../utils";

const AsyncNeMaterialRender = defineAsyncComponent(() => import("./NeMaterialRender")); // ✅ 延迟解析

export default defineComponent({
  name: "NeMaterialRender",
  props: {
    configProvider: {
      type: Object as () => NeConfigProviderProps,
      required: false,
    },
    config: {
      type: Object as () => NeMaterialRenderProps,
      required: true,
    },
    modelValue: [String, Number, Boolean, Object, Array],
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    let { config, modelValue, configProvider } = props;

    // const resolvedComponent = computed(() => resolveComponent(props.config.component));
    // 根据 componentName 调用封装的方法获取组件
    const resolvedComponent = computed(() => getComponentByName(config.component));

    // 处理 v-model 绑定
    const modelRef = ref(modelValue);
    watch(
      () => modelValue,
      (val) => (modelRef.value = val),
    );

    // 处理事件
    const eventHandlers = computed(() => {
      const handlers: Record<string, Function> = {};
      if (config.events) {
        for (const key in config.events) {
          handlers[key] = config.events[key];
        }
      }
      if (config.model) {
        handlers[`update:modelValue`] = (value: any) => emit("update:modelValue", value);
      }
      return handlers;
    });
    const isRootRender = !inject("hasConfigProvider", false);
    if (isRootRender) {
      provide("hasConfigProvider", true);
    }
    const renderContent = () =>
      h(
        resolvedComponent.value,
        {
          ...config.props,
          ...eventHandlers.value,
          modelValue: modelRef.value,
          "onUpdate:modelValue": (value: any) => emit("update:modelValue", value),
        },
        {
          ...(config.slots &&
            Object.fromEntries(
              Object.entries(config.slots).map(([slotName, content]) => [slotName, () => content]),
            )),
          default: () =>
            config.elements?.map((child, index) =>
              h(AsyncNeMaterialRender, { key: index, config: child }),
            ),
        },
      );
    return () =>
      isRootRender
        ? h(NeConfigProvider, { config: configProvider }, { default: renderContent })
        : renderContent();
  },
});
