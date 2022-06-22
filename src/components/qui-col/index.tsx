

import React, { FC, ReactNode, CSSProperties } from 'react';

import classNames from "classnames";

import "./style/index.less";



interface PuiColProps {

    span?:number|string

    flex?: string | number

    className?: string

    /** 子节点 */
    children?: ReactNode

    style?: CSSProperties
}

type NativeDivProps = PuiColProps;

export type PuiBasicColProps = Partial<NativeDivProps>;

/**
 * 页面中最常用的的按钮元素他是最基础的组件，没有样式，只是生成 span 和 a dom节点
 * ### 引用方法
 *
 * ~~~js
 * import { PuiCol } from '@jdplus/pui'
 * ~~~
 */

export const PuiCol: FC<PuiBasicColProps> = (props: PuiBasicColProps) => {

    let {
        children,
        className,
        style,
        flex,
        span,
        ...restProps
    } = props;

    

    const classes = classNames('pui-col',{
        [`pui-col-${span}`]:span
    }, className);


      // 判断  flex 是否是数字  判断flex是否是字符串  判断flex是否是 复合类型 1 1 200px
    if (typeof flex == 'string' && flex.trim().split(/\s+/).length == 1){
       
        flex = flex.trim().toLocaleLowerCase();
        if (flex.indexOf('px')>-1){
            flex = `0 0 ${flex}`
        } 
    }

    if (typeof flex == 'number'){
        flex = `${flex} ${flex} auto`;
    }

    style={
        flex: flex,
        ...style
    }

    // console.log(style)
    
    return (
        <div style={style} className={classes} {...restProps}>
            {children}
        </div>
    )
}

PuiCol.defaultProps = {

}


export default PuiCol;