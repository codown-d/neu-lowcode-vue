import {
  computed,
  defineAsyncComponent,
  defineComponent,
  h,
  onBeforeMount,
  onMounted,
  ref,
  watch,
  defineExpose
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
        console.log(resolvedComponent.value)
      instance.proxy['customMethod'] = () => {
        console.log(config.name)
      };
    }
    return () =>
      h(
        resolvedComponent.value,
        {
          ...config.props,
          ...eventHandlers.value,
          // "onUpdate:modelValue": (value: any) => emit("update:modelValue", value),
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
  methods:{
    findFirstFormParent() {
      let currentNode = this;
      
      // 递归查找父组件，直到找到第一个 AForm 父节点
      while (currentNode) {
        if (currentNode.$options.name === 'AForm') {
          return currentNode;
        }
        currentNode = currentNode.$parent; // 获取父组件
      }
      return null; // 如果没有找到返回 null
    }
  },
  mounted(){
    console.log(1235)
  }
});
