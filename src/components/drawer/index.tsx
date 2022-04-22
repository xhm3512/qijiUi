import React, { useState, FC } from 'react';
import { Row } from 'antd';
import classNames from 'classnames';
import Ddd from './DD';
import './style/index.less';
interface PropsState {
  maskClosable?: boolean;
}
const Drawer: FC<PropsState> = ({ maskClosable = false }) => {
  const prefixCls = 'qiu-drawer-box';
  const [visible, setVisible] = useState(false); // 弹窗是否可见,默认不可见,点击按钮后弹窗出现
  // 打开
  const onDialogOpen = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    setVisible(true);
  };
  // 关闭
  const onDialogClose = () => {
    setVisible(false);
    document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'auto';
  };

  const classessDialog = classNames(`${prefixCls}-dialog`, {
    [`${prefixCls}-dialog_show`]: visible,
    [`${prefixCls}-hidden`]: !visible,
  });
  const classessMask = classNames(`${prefixCls}-mask`, {
    [`${prefixCls}-mask-show`]: visible,
    [`${prefixCls}-mask-hidden`]: !visible,
  });
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-btn`} onClick={onDialogOpen}>
        点击弹窗从左侧滑出2
      </div>
      <div
        className={classessMask}
        onClick={() => maskClosable && onDialogClose()}
      ></div>
      <div className={classessDialog}>
        <Ddd onDialogClose={onDialogClose} />
        {/* <div className={`${prefixCls}-btn`} onClick={onDialogClose}>点击弹窗向左侧滑入</div> */}
      </div>
    </div>
  );
};

export default Drawer;
