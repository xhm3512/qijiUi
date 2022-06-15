import React, { FC, useState, ReactNode } from 'react';
import { Row, Col } from 'antd';
import classNames from 'classnames';
import './style/index.less';
interface PropsState {
  active: boolean;
  onClick?: (type: string) => void;
  wrapClassName?: string;
  children: Array<ReactNode>;
  currentActive?: number;
}
const Foo: FC<PropsState> = ({
  children,
  onClick,
  active = false,
  wrapClassName,
  currentActive = '',
}) => {
  const prefixCls = 'qiji-oni-statistic';
  const [activeIndex, setActiveIndex] = useState(currentActive);
  // item样式
  const classesItem = (index: number) => {
    return classNames(`${prefixCls}-item`, {
      [`${prefixCls}-active`]: index === activeIndex && active,
    });
  };
  // 点击item高亮
  const onHandleClick = (i: number, type) => {
    setActiveIndex(i);
    typeof onClick === 'function' && onClick(type);
  };

  return (
    <Row className={wrapClassName} gutter={[16, 16]}>
      {children?.map((item: any, i) => {
        return (
          <Col key={i}>
            <div
              onClick={() => onHandleClick(i + 1, item.key)}
              className={classesItem(i + 1)}
            >
              {item}
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Foo;
