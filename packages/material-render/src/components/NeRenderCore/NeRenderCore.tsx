import {
  computed,
  defineAsyncComponent,
  defineComponent,
  h,
  onBeforeMount,
  onMounted,
  ref,
  watch,
  defineExpose,
  inject,
  watchEffect,
  reactive,
} from "vue";
import { getComponentByName } from "../../utils";
import { NeMaterialElementProps } from "./types";
import { useEvents, useForm } from "../../hooks";

const AsyncNeMaterialRender = defineAsyncComponent(() => import("./NeRenderCore")); // ✅ 延迟解析

export default defineComponent({
  name: "NeRenderCore",
  props: {
    config: {
      type: Object as () => NeMaterialElementProps,
      required: false,
    },
  },
  setup(props, { emit, slots }) {
    let { config } = props;
    // const resolvedComponent = computed(() => resolveComponent(props.config.component));
    const resolvedComponent = computed(() => getComponentByName(config.type));

    // 处理事件
    const eventHandlers = computed(() => {
      const handlers: Record<string, Function> = {};
      if (config.events) {
        for (const key in config.events) {
          let isLifeCycle = [
            "onMounted",
            "onBeforeMount",
            "onBeforeUpdate",
            "onUpdated",
            "onBeforeUnmount",
            "onUnmounted",
            "mounted",
            "beforeMount",
            "beforeUpdate",
            "updated",
            "beforeUnmount",
            "unmounted",
          ].includes(key);
          !isLifeCycle && (handlers[key] = config.events[key]);
        }
      }
      return handlers;
    });
    let { instance } = useEvents(config);
    if (instance) {
      instance.proxy["customMethod"] = () => {};
    }
    const formInstance = inject("formInstance", null);
    const formData = inject("formData",null);
    console.log(formData)
    debugger

    let getProps = () => {
      if (config.type === "input") {
        console.log("formData", config, formData);
      }
      return config.type === "form"
        ? { config }
        : config.type === "button"
          ? {
              ...config.props,
              ...eventHandlers.value,
              onClick: () => {
                config.events?.["onClick"]?.(formInstance);
              },
            }
          : config.type === "input"
            ? {
                ...config.props,
                ...eventHandlers.value,
                // modelValue: formData.username,
                onChange(event) {
                  let {value}= event.target
                    formData.username = value; // 更新 formData
                    console.log(formData,value)
                    // console.log(`Updated formData:`, value);
                },
              }
            : {
                ...config.props,
                ...eventHandlers.value,
              };
    };
    return () =>
      h(
        resolvedComponent.value,
        { ...getProps() },
        {
          default: () =>
            config.elements?.map((child, index) =>
              h(AsyncNeMaterialRender, { key: index, config: child }),
            ),
          ...(config.slots &&
            Object.fromEntries(
              Object.entries(config.slots).map(([slotName, content]) => [
                slotName,
                () => h("span", content),
              ]),
            )),
        },
      );
  },
  methods: {},
  mounted() {},
});
