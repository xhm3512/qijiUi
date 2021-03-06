import React, { FC, useEffect } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
// import 'antd/es/date-picker/style/index.less';
import './style/index.less';
interface PropsState {
  maskClosable?: boolean;
  visible?: boolean;
  onClose?: () => void;
  className?: string;
}
const Drawer: FC<PropsState> = ({
  maskClosable = false,
  children,
  visible = false,
  onClose,
  className,
}) => {
  const prefixCls = 'qiu-drawer-box';
  // 打开
  const onDialogOpen = () => {
    // document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  };
  // 关闭
  const onDialogClose = () => {
    // document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'auto';
  };

  const classessDialog = classNames(`${prefixCls}-dialog`, {
    [`${prefixCls}-dialog_show`]: visible,
    [`${prefixCls}-dialog_hidden`]: !visible,
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
    <>
      {ReactDOM.createPortal(
        <div className={classNames(prefixCls, className)}>
          <div
            className={classessMask}
            onClick={() => maskClosable && onClose && onClose()}
          ></div>
          <div className={classessDialog}>{visible && children}</div>
        </div>,
        document.body,
      )}
    </>
  );
};

export default Drawer;
