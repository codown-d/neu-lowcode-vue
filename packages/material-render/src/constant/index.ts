import { Button, Form, Input, InputNumber, Layout, Table } from "./antd-components";
import { Component } from "vue";

const  FormItem  = Form.Item;
const { Header, Content, Footer } = Layout;
export const componentMap: Record<string, Component> = {
  layout: Layout,
  "layout-content": Content,
  "layout-header": Header,
  "layout-footer": Footer,
  form: Form,
  "form-item": FormItem,
  input: Input,
  "input-number": InputNumber,
  "button": Button,

  "table": Table,
};
