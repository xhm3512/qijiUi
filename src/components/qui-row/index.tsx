
import React, { FC, ReactNode,CSSProperties } from 'react';

import classNames from "classnames";

import "./style/index.less";

export type AlignType = 'top' | 'middle' | 'bottom';

export type JustifyType = 'start' | 'end' | 'center' | 'space-around' | 'space-between';


interface QuiRowProps {
    align?: AlignType
    // gutter?: number | object | [string]
    justify?: JustifyType
    className?: string
    /** 子节点 */
    children: ReactNode,
    style?:CSSProperties
}

type NativeDivProps = QuiRowProps;

export type PuiBasicRowProps = Partial<NativeDivProps>;

const QuiRow: FC<PuiBasicRowProps> = (props: PuiBasicRowProps) => {

    let {
        children,
        className,
        align,
        // gutter,
        justify,
        ...restProps
    } = props;


    const classes = classNames(
        'pui-row',
        {
            [`pui-row-${align}`]: align,
            [`pui-row-${justify}`]: justify,
            // [`pui-row-${gutter}`]: gutter
        },
        className
    );


    return (
        <div className={classes} {...restProps}>
            {children}
        </div>
    )
}

QuiRow.defaultProps = {
    align: 'top',
    justify: 'start'
}


export default QuiRow;