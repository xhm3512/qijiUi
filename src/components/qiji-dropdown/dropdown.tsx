import RcDropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import React from 'react';
import classNames from 'classnames';
import { cloneElement } from '../_util/reactNode';
// import 'rc-dropdown/assets/index.css';
import { ConfigContext } from '../config-provider/context';
import './style/index.less'
function onSelect({ key }) {
  console.log(`${key} selected`);
}


type Align = {
  points?: [string, string];
  offset?: [number, number];
  targetOffset?: [number, number];
  overflow?: {
    adjustX?: boolean;
    adjustY?: boolean;
  };
  useCssRight?: boolean;
  useCssBottom?: boolean;
  useCssTransform?: boolean;
};
const Placements = [
  'topLeft',
  'topCenter',
  'topRight',
  'bottomLeft',
  'bottomCenter',
  'bottomRight',
  'top',
  'bottom',
] as const;
type Placement = typeof Placements[number];
type OverlayFunc = () => React.ReactElement;
export interface DropdownProps {
  menu?: any;
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  overlay: React.ReactNode | OverlayFunc;
  onVisibleChange?: (visible: boolean) => void;
  visible?: boolean;
  disabled?: boolean;
  destroyPopupOnHide?: boolean;
  align?: Align;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  prefixCls?: string;
  className?: string;
  transitionName?: string;
  placement?: Placement;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
  forceRender?: boolean;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  openClassName?: string;
  dropdownRender?: (originNode: React.ReactNode) => React.ReactNode;
  children?: React.ReactNode;
}


const Dropdown = (props: DropdownProps) => {
  const {
    prefixCls: customizePrefixCls,
    trigger,
    disabled,
    getPopupContainer,
    dropdownRender,
    menu,
    children
  } = props
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  const child = React.Children.only(children) as React.ReactElement<any>;
  const getTransitionName = () => {
    const rootPrefixCls = getPrefixCls();
    const { placement = '', transitionName } = props;
    if (transitionName !== undefined) {
      return transitionName;
    }
    if (placement.includes('top')) {
      return `${rootPrefixCls}-slide-down`;
    }
    return `${rootPrefixCls}-slide-up`;
  };
  const triggerActions = disabled ? [] : trigger;
  let alignPoint;
  if (triggerActions && triggerActions.indexOf('contextMenu') !== -1) {
    alignPoint = true;
  }
  const dropdownTrigger = cloneElement(child, {
    className: classNames(
      `${prefixCls}-trigger`,
      child.props.className,
    ),
    disabled,
  });
  const renderOverlay = () => {
    const { overlay } = props;
    const menuRender = () => {
      return <Menu onSelect={onSelect} className={`${prefixCls}-menu`} >
        {
          menu.map(item => <MenuItem key={item.key} disabled={item.disabled}>{item.label}</MenuItem>)
        }
      </Menu >
    }
    let overlayNode: React.ReactNode;
    if (menu) {
      overlayNode = menuRender();
    } else if (typeof overlay === 'function') {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }
    if (dropdownRender) {
      overlayNode = dropdownRender(overlayNode);
    }
    overlayNode = React.Children.only(
      typeof overlayNode === 'string' ? <span>{overlayNode}</span> : <>{overlayNode}</>,
    );
    return overlayNode as React.ReactElement;
  }
  return <RcDropdown
    alignPoint={alignPoint}
    {...props}
    prefixCls={prefixCls}
    getPopupContainer={getPopupContainer || getContextPopupContainer}
    trigger={triggerActions}
    overlay={renderOverlay}
    animation="slide-up"
    transitionName={getTransitionName()}
  >
    {dropdownTrigger}
  </RcDropdown>
};
export default Dropdown;