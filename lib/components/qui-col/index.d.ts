import { FC, ReactNode, CSSProperties } from 'react';
import "./style/index.less";
interface PuiColProps {
    span?: number | string;
    flex?: string | number;
    className?: string;
    /** 子节点 */
    children?: ReactNode;
    style?: CSSProperties;
}
declare type NativeDivProps = PuiColProps;
export declare type PuiBasicColProps = Partial<NativeDivProps>;
/**
 * 页面中最常用的的按钮元素他是最基础的组件，没有样式，只是生成 span 和 a dom节点
 * ### 引用方法
 *
 * ~~~js
 * import { PuiCol } from '@jdplus/pui'
 * ~~~
 */
export declare const PuiCol: FC<PuiBasicColProps>;
export default PuiCol;
