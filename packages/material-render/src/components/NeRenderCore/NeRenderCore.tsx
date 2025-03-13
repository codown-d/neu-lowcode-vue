import { computed, defineAsyncComponent, defineComponent, h, ref, watch } from "vue";
import { getComponentByName } from "../../utils";
import { NeMaterialElementProps } from "./types";
import { useForm } from "../../hooks";

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
        console.log(config.events);
        for (const key in config.events) {
          handlers[key] = config.events[key];
        }
      }
      if (config.modelValue) {
        handlers[`update:modelValue`] = (value: any) => emit("update:modelValue", value);
      }
      console.log(handlers);
      return handlers;
    });
    const modelRef = ref(config.defaultValue);
    watch(
      () => config.modelValue,
      (val) => (modelRef.value = val),
    );
    console.log(config.defaultValue)
    if (config.defaultValue) {
      console.log(modelRef,resolvedComponent.value);
    }
    let getComponentProps = () => {};
    // if(){
    //   let {} = useForm()
    // }
    return () =>
      h(
        resolvedComponent.value,
        {
          ...config.props,
          ...eventHandlers.value,
          "v-model": modelRef.value,
          "onUpdate:modelValue": (value: any) => emit("update:modelValue", value),
        },
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
});
