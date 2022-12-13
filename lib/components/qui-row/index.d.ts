import { FC, ReactNode, CSSProperties } from 'react';
import "./style/index.less";
export type AlignType = 'top' | 'middle' | 'bottom';
export type JustifyType = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
interface QuiRowProps {
    align?: AlignType;
    justify?: JustifyType;
    className?: string;
    /** 子节点 */
    children: ReactNode;
    style?: CSSProperties;
}
type NativeDivProps = QuiRowProps;
export type PuiBasicRowProps = Partial<NativeDivProps>;
declare const QuiRow: FC<PuiBasicRowProps>;
export default QuiRow;
