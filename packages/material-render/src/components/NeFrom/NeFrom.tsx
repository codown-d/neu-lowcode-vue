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
  reactive,
  watchEffect,
} from "vue";
import NeRenderCore, { NeMaterialElementProps } from "../NeRenderCore";
import { Form } from "ant-design-vue";

export default defineComponent({
  name: "NeFrom",
  props: {
    config: {
      type: Object as () => NeMaterialElementProps,
      required: true,
    },
  },
  emits: [],
  setup(props, { emit }) {
    let { config } = props;
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
    const formRef = ref(null);
    console.log(config?.props.model,'config?.props.model')
    const formData = reactive({username:''});
    provide('formInstance', formRef); 
    provide('formData', formData );
    watchEffect(()=>{
      
  console.log("Updated formData:", formData);
    })
    return () =>
      h(
        Form,
        {
          ref: formRef,
          ...config?.props,
          ...eventHandlers.value,
        },
        {
          default: () =>
            config.elements?.map((child, index) =>
              h(NeRenderCore, { key: child.id, config: child }),
            ),
        },
      );
  },
});
