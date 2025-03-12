import { defineComponent, h, provide } from 'vue';
import { ConfigProvider } from 'ant-design-vue';
import type { ConfigProviderProps } from 'ant-design-vue/es/config-provider';

export default defineComponent({
  name: 'NeConfigProvider',
  props: {
    config: {
      type: Object as () => Partial<ConfigProviderProps>,
      required: false,
    },
  },
  setup(props, { slots }) {
    provide('ConfigProvider', props.config);

    return () =>
      h(
        ConfigProvider,
        { ...props.config },
        {
          default: () => slots.default?.(),
        }
      );
  },
});