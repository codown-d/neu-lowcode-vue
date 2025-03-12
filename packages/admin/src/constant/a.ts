export const configData = {
  config: { configProvider: {} },
  events: {},
  apis: {},
  elements: [
    {
      id: 'a-form-item1',
      component: 'a-form-item',
      props: { label: '用户名', name: 'username' },
      elements: [
        {
          id: 'input1',
          component: 'input',
          model: 'username',
          props: { placeholder: '请输入用户名' },
        },
      ],
    },
    {
      component: 'a-form-item',
      props: { label: '年龄', name: 'age' },
      elements: [
        {
          component: 'a-input-number',
          model: 'age',
          props: { min: 0, max: 100 },
        },
      ],
    },
    {
      component: 'a-button',
      props: { type: 'primary' },
      slots: { default: '提交' },
      events: {
        //   click: () => console.log('提交', formData.value),
      },
    },
  ],
}
