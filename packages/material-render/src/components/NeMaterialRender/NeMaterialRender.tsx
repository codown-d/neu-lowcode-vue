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
import NeConfigProvider from "../NeConfigProvider";
import NeRenderCore from "../NeRenderCore";
import { useForm } from "../../hooks";

export default defineComponent({
  name: "NeMaterialRender",
  props: {
    config: {
      type: Object as () => NeMaterialRenderProps,
      required: true,
    },
  },
  emits: [],
  setup(props, { emit }) {
    let { config, events, apis, elements } = props.config;
    let {modelForm} = useForm(elements)
    console.log(55555,modelForm)
    return () =>
      h(
        NeConfigProvider,
        { config: config.configProvider },
        {
          default: () =>
            elements?.map((child, index) =>
              h(NeRenderCore, { key: child.id, config: child }),
            ),
        },
      );
  },
});
