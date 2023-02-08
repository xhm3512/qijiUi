import React from 'react';
import './style/index.less';
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
declare const Placements: readonly ["topLeft", "topCenter", "topRight", "bottomLeft", "bottomCenter", "bottomRight", "top", "bottom"];
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
declare const Dropdown: (props: DropdownProps) => JSX.Element;
export default Dropdown;
