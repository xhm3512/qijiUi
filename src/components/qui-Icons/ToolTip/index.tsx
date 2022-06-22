import React, { FC } from 'react';
import classNames from 'classnames';
import './style/index.less';
import QuiRow from '../../qui-row';
const ToolTip: FC<{ active: boolean }> = ({ active = false }) => {
  const prefixCls = 'qiu-tooltip';
  const classes = classNames({
    [`${prefixCls}-box`]: active,
    [`${prefixCls}-active-box`]: !active,
  });
  return (
    <QuiRow justify="center" align="middle" className={classes}>
      ?
    </QuiRow>
  );
};
export default ToolTip;
