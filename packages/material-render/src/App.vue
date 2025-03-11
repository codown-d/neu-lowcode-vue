<script setup lang="ts">
import { ref } from 'vue'
import ComponentRenderer from './components/ComponentRenderer.vue'

const inputValue = ref('')

const config = ref({
  component: 'a-form',
  props: { layout: 'vertical' },
  children: [
    {
      component: 'a-form-item',
      props: { label: '用户名' },
      children: [
        {
          component: 'a-input',
          props: { placeholder: '请输入用户名' },
          model: 'inputValue'
        }
      ]
    },
    {
      component: 'a-button',
      props: { type: 'primary' },
      events: {
        click: () => {
          console.log(`提交的值：${inputValue.value}`)
        }
      },
      slots: { default: '提交' }
    }
  ]
})
</script>

<template>
  <ComponentRenderer :config="config" v-model="inputValue" />
</template>
