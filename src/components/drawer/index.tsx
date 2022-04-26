import React, { useState, FC, useEffect } from 'react';
import classNames from 'classnames';
import './style/index.less';
interface PropsState {
  maskClosable?: boolean;
  visible?: boolean;
  onClose?: () => {};
}
const Drawer: FC<PropsState> = ({
  maskClosable = false,
  children,
  visible = false,
  onClose,
}) => {
  const prefixCls = 'qiu-drawer-box';
  // 打开
  const onDialogOpen = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  };
  // 关闭
  const onDialogClose = () => {
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
  useEffect(() => {
    if (visible) {
      onDialogOpen();
    } else {
      onDialogClose();
    }
  }, [visible]);
  return (
    <div className={prefixCls}>
      <div
        className={classessMask}
        onClick={() => maskClosable && onClose && onClose()}
      ></div>
      <div className={classessDialog}>{children}</div>
    </div>
  );
};

export default Drawer;
