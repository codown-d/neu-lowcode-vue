import type { NeMaterialRenderProps } from '@neu-lowcode-vue/material-render/dist/types'
import enUS from 'ant-design-vue/es/locale/en_US'
export const pageInfo = {
  id: 100000,
  name: 'CRUD',
  userId: 100000,
  remark: '调用线上接口',
  isPublic: 1,
  projectId: 100000,
  updatedAt: '2025-01-14 17:29:15',
  userName: 'Marsview',
}

export const pageData: NeMaterialRenderProps = {
  config: {
    configProvider: {
      // locale: "locale === 'en' ? enUS : zhCN",
    },
    //页面的组件属性配置
    // events: [],
    // api: {},
  },
  events: [], //当前页面节点实例化生命周期
  apis: {}, //当前页面涉及到后端接口
  elements: [
    {
      id: 'SearchForm_60spo02i5g',
      type: 'layout-content',
      name: '搜索表单',
      props: {
        style: { padding: '0 50px' },
      },
      events: {
        finish: () => console.log('按钮点击'),
      },
      elements: [
        {
          id: 'SearchForm_60spo02i5g',
          type: 'form',
          name: '搜索表单',
          elements: [
            {
              id: 'Input_fb19o54fjh',
              parentId: 'SearchForm_60spo02i5g',
              type: 'form-item',
              name: '文本框',
              // :rules="[{ required: true, message: 'Please input your username!' }]"
              props: {
                label: '123',
                name:'username',
                rules: [{ required: true, message: 'Please input your username!' }],
                style: {  },
              },
              elements: [
                {
                  id: 'Input_fb19o54fjh',
                  parentId: 'SearchForm_60spo02i5g',
                  type: 'input',
                  name: '文本框',
                  modelValue:'username',
                  defaultValue:'123',
                  props:{
                    placeholder:"input placeholder",
                    style: { },
                  },
                  // events:{
                  //   'update:modelValue':(val)=>{console.log(val)}
                  // }
                },
              ],
            },
            {
              id: 'Input_fb19o54fjh',
              parentId: 'SearchForm_60spo02i5g',
              type: 'form-item',
              name: '文本框',
              elements: [
                {
                  id: 'Input_fb19o54fjh',
                  parentId: 'SearchForm_60spo02i5g',
                  type: 'button',
                  name: '文本框',
                  props: {
                    type: 'primary',
                    htmlType: 'submit',
                  },
                  slots: { default: '提交' },
                  events: {
                    onClick: () => console.log('按钮点击'),
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'MarsTable_3gx13gh2ht',
          type: 'table',
          name: '普通表格',
          props: {
            columns: [
              {
                title: 'Name',
                dataIndex: 'name',
                sorter: true,
                width: '20%',
              },
              {
                title: 'Gender',
                dataIndex: 'gender',
                filters: [
                  { text: 'Male', value: 'male' },
                  { text: 'Female', value: 'female' },
                ],
                width: '20%',
              },
              {
                title: 'Email',
                dataIndex: 'email',
              },
            ],
            dataSource: [],
          },
        },
        // {
        //   id: 'Modal_er4mn6jbtk',
        //   type: 'Modal',
        //   name: '弹框',
        //   elements: [
        //     {
        //       id: 'Form_alk8l8x02c',
        //       parentId: 'Modal_er4mn6jbtk',
        //       type: 'Form',
        //       name: 'Form容器',
        //       elements: [
        //         {
        //           id: 'Input_1zt7tznrjf',
        //           parentId: 'Form_alk8l8x02c',
        //           type: 'Input',
        //           name: '文本框',
        //           elements: [],
        //         },
        //         {
        //           id: 'Input_b5n1wg2jvh',
        //           parentId: 'Form_alk8l8x02c',
        //           type: 'Input',
        //           name: '文本框',
        //           elements: [],
        //         },
        //         {
        //           id: 'Input_2a9wt4s7qi',
        //           parentId: 'Form_alk8l8x02c',
        //           type: 'Input',
        //           name: '文本框',
        //           elements: [],
        //         },
        //         {
        //           id: 'TreeSelect_lx8mkqr47t',
        //           parentId: 'Form_alk8l8x02c',
        //           type: 'TreeSelect',
        //           name: '树形选择',
        //           elements: [],
        //         },
        //         {
        //           id: 'Input_b8weoo8y9i',
        //           parentId: 'Form_alk8l8x02c',
        //           type: 'Input',
        //           name: '文本框',
        //           elements: [],
        //         },
        //         {
        //           id: 'Select_fr4urxhlyd',
        //           parentId: 'Form_alk8l8x02c',
        //           type: 'Select',
        //           name: '下拉框',
        //           elements: [],
        //         },
        //         {
        //           id: 'Select_fuacq11d7t',
        //           parentId: 'Form_alk8l8x02c',
        //           type: 'Select',
        //           name: '下拉框',
        //           elements: [],
        //         },
        //         {
        //           id: 'Upload_ci5jxg8dyf',
        //           parentId: 'Form_alk8l8x02c',
        //           type: 'Upload',
        //           name: '上传',
        //           elements: [],
        //         },
        //         {
        //           id: 'Input_12b3q5mdua',
        //           parentId: 'Form_alk8l8x02c',
        //           type: 'Input',
        //           name: '文本框',
        //           elements: [],
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
    },
  ],
}
