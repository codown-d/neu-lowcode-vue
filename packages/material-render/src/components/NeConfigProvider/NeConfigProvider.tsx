import { computed, defineComponent, h, provide } from 'vue';
import { ConfigProvider } from 'ant-design-vue';
import { useI18n } from 'vue-i18n';
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
    // const { locale } = useI18n();
    // const locale = computed(() => {
    //   return locale.value === 'zh' ? zhCN : enUS;
    // });
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