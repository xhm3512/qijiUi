import { TooltipProps } from 'antd/es/tooltip';
import './style/index.less';
export declare type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';
declare const QuiTooltip: {
  ({
    children,
    title,
    placement,
    trigger,
    ...elseParams
  }: TooltipProps): JSX.Element;
  defaultProps: {
    placement: TooltipPlacement;
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    arrowPointAtCenter: boolean;
    autoAdjustOverflow: boolean;
  };
};
export default QuiTooltip;
