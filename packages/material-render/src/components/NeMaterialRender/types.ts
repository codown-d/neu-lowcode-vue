import { NeConfigProviderProps } from "../NeConfigProvider";
import { NeMaterialElementProps } from "../NeRenderCore/types";

export interface NeMaterialRenderProps {
  config: {
    configProvider:NeConfigProviderProps
  }
  events: any
  apis: {},
  elements?: NeMaterialElementProps[]; // 子组件

}
