import React from 'react';
import classNames from 'classnames';
import './style/index.less';
import { Row } from 'antd';
export default ({ active = false }: { active: boolean }) => {
  console.log(222, active);

  const prefixCls = 'qiu-tooltip';
  const classes = classNames({
    [`${prefixCls}-box`]: active,
    [`${prefixCls}-active-box`]: !active,
  });
  return (
    <Row justify="center" align="middle" className={classes}>
      ?
    </Row>
  );
};
