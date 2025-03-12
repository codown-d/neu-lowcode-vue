// antd-component-types.ts
import type { LayoutProps } from 'ant-design-vue/es/layout';
import type { SpaceProps } from 'ant-design-vue/es/space';
import type { DividerProps } from 'ant-design-vue/es/divider';
// import type { WatermarkProps } from 'ant-design-vue/es/watermark';

import type { MenuProps } from 'ant-design-vue/es/menu';
import type { BreadcrumbProps } from 'ant-design-vue/es/breadcrumb';
import type { DropdownProps } from 'ant-design-vue/es/dropdown';
import type { PaginationProps } from 'ant-design-vue/es/pagination';
import type { PageHeaderProps } from 'ant-design-vue/es/page-header';
import type { StepsProps } from 'ant-design-vue/es/steps';

import type { FormProps } from 'ant-design-vue/es/form';
import type { InputProps } from 'ant-design-vue/es/input';
import type { InputNumberProps } from 'ant-design-vue/es/input-number';
import type { CheckboxProps } from 'ant-design-vue/es/checkbox';
import type { RadioProps } from 'ant-design-vue/es/radio';
import type { SwitchProps } from 'ant-design-vue/es/switch';
import type { SelectProps } from 'ant-design-vue/es/select';
import type { SliderProps } from 'ant-design-vue/es/slider';
import type { CascaderProps } from 'ant-design-vue/es/cascader';
import type { DatePickerProps } from 'ant-design-vue/es/date-picker';
import type { TimePickerProps } from 'ant-design-vue/es/time-picker';
import type { UploadProps } from 'ant-design-vue/es/upload';
import type { ButtonProps } from 'ant-design-vue/es/button';

import type { TableProps } from 'ant-design-vue/es/table';
import type { ListProps } from 'ant-design-vue/es/list';
import type { CardProps } from 'ant-design-vue/es/card';
import type { CarouselProps } from 'ant-design-vue/es/carousel';
import type { CollapseProps } from 'ant-design-vue/es/collapse';
import type { AvatarProps } from 'ant-design-vue/es/avatar';
import type { BadgeProps } from 'ant-design-vue/es/badge';
import type { CommentProps } from 'ant-design-vue/es/comment';
import type { DescriptionsProps } from 'ant-design-vue/es/descriptions';
import type { ImageProps } from 'ant-design-vue/es/image';
import type { StatisticProps } from 'ant-design-vue/es/statistic';
import type { TagProps } from 'ant-design-vue/es/tag';
import type { TooltipProps } from 'ant-design-vue/es/tooltip';
import type { TreeProps } from 'ant-design-vue/es/tree';
import type { TimelineProps } from 'ant-design-vue/es/timeline';

import type { AlertProps } from 'ant-design-vue/es/alert';
// import type { MessageProps } from 'ant-design-vue/es/message';
// import type { NotificationProps } from 'ant-design-vue/es/notification';
import type { ProgressProps } from 'ant-design-vue/es/progress';
import type { PopconfirmProps } from 'ant-design-vue/es/popconfirm';
import type { ModalProps } from 'ant-design-vue/es/modal';
import type { SpinProps } from 'ant-design-vue/es/spin';
import type { ResultProps } from 'ant-design-vue/es/result';
import type { SkeletonProps } from 'ant-design-vue/es/skeleton';

import type { ConfigProviderProps } from 'ant-design-vue/es/config-provider';
import type { AnchorProps } from 'ant-design-vue/es/anchor';
import type { BackTopProps } from 'ant-design-vue/es/back-top';
import { componentMap } from '.';

// 统一导出组件类型
export type {
  // 布局
  LayoutProps,
  SpaceProps,
  DividerProps,
  // WatermarkProps,

  // 导航
  MenuProps,
  BreadcrumbProps,
  DropdownProps,
  PaginationProps,
  PageHeaderProps,
  StepsProps,

  // 表单
  FormProps,
  InputProps,
  InputNumberProps,
  CheckboxProps,
  RadioProps,
  SwitchProps,
  SelectProps,
  SliderProps,
  CascaderProps,
  DatePickerProps,
  TimePickerProps,
  UploadProps,
  ButtonProps,

  // 数据展示
  TableProps,
  ListProps,
  CardProps,
  CarouselProps,
  CollapseProps,
  AvatarProps,
  BadgeProps,
  CommentProps,
  DescriptionsProps,
  ImageProps,
  StatisticProps,
  TagProps,
  TooltipProps,
  TreeProps,
  TimelineProps,

  // 反馈
  AlertProps,
  // MessageProps,
  // NotificationProps,
  ProgressProps,
  PopconfirmProps,
  ModalProps,
  SpinProps,
  ResultProps,
  SkeletonProps,

  // 其他
  ConfigProviderProps,
  AnchorProps,
  BackTopProps,
};
export type ComponentType = keyof typeof componentMap;