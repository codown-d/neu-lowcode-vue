import { defineComponent, resolveComponent, h, computed, ref, watch } from 'vue'
import type { ComponentConfig } from './types'

export default defineComponent({
  name: 'ComponentRenderer',
  props: {
    config: {
      type: Object as () => ComponentConfig,
      required: true,
    },
    modelValue: [String, Number, Boolean, Object, Array],
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const resolvedComponent = computed(() => resolveComponent(props.config.component))

    // 处理 v-model 绑定
    const modelRef = ref(props.modelValue)
    watch(
      () => props.modelValue,
      (val) => (modelRef.value = val),
    )

    // 处理事件
    const eventHandlers = computed(() => {
      const handlers: Record<string, Function> = {}
      if (props.config.events) {
        for (const key in props.config.events) {
          handlers[key] = props.config.events[key]
        }
      }
      if (props.config.model) {
        handlers[`update:modelValue`] = (value: any) => emit('update:modelValue', value)
      }
      return handlers
    })

    return () =>
      h(
        resolvedComponent.value,
        {
          ...props.config.props,
          ...eventHandlers.value,
          modelValue: modelRef.value,
          'onUpdate:modelValue': (value: any) => emit('update:modelValue', value),
        },
        {
          ...(props.config.slots &&
            Object.fromEntries(
              Object.entries(props.config.slots).map(([slotName, content]) => [
                slotName,
                () => content,
              ]),
            )),
          default: () =>
            props.config.children?.map((child, index) =>
              h(ComponentRenderer, { key: index, config: child }),
            ),
        },
      )
  },
})
