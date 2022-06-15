import React, { FC } from 'react';
import { Modal, Row, Col } from 'antd';
import { ModalProps } from 'antd/es/modal/Modal';
import classNames from 'classnames';
import QuiButton from '../qui-button';
import './style/index.less';
interface PropsState extends ModalProps {
  loading?: boolean;
  isCancelBtn?: boolean;
  isOklBtn?: boolean;
}
const CloseInt = () => {
  return (
    <img
      className="close-img"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAatJREFUaEPtWEtOwzAQnThcA87TTVU2OAK6ZtnDsGQNQjEbqm56HrhGkyCLVDJV3LFnxgQLZ9n5+L1547HrCjL/qszxQyEwt4JFgaIAswKlhZgFZIf/HwWM2S46gCdbMjWoTdMs39nlcxK07e66r/pH+1MN8KD1ah+SP1iBV7P9AIDLMemhBrXWetmGLIL5GLNrOuifAeBi9P281asrLM7aqQRsrAiJCfA2tzyBUeI3p0psEh7wBzWom9AWDVbAovUtSGknqVxRBKRISIGP2gPuhuIA4MRObepoBY5JKEAoMdgkIhOIbacU4MktFNtOqcCLEMCUsPaTQ4o9ft0CslooQIlu9KkdX5ED8JhPjMAZJVyeouDFWmhCiZfvO9mPr6tB3Uvdn5Io4KiQJwHPtMmjhTzg89jE5+b8nx+jIYdUiA92ZfDZWWM0BliMbwwZMgEKIEoMRoZEgAOEEytynZYAIJGDdJBJLiyVK7iFsv9Tf/IuJHYl/rVnlewfttynxWFQm7vcnhaxeTyXPXgTzwUQW7cQwCqU2l4USF1hLH9RAKtQantRIHWFsfxfdKN9QFsChAsAAAAASUVORK5CYII="
    />
  );
};
const QuiModal: FC<PropsState> = ({
  children,
  footer = null,
  okText = '确认',
  wrapClassName,
  cancelText = '取消',
  visible,
  onOk,
  onCancel,
  closeIcon = <CloseInt />,
  loading = false,
  isCancelBtn = true,
  isOklBtn = true,
  ...elseProps
}) => {
  const prefixCls = 'qiji-modal-box';
  return (
    <Modal
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      wrapClassName={classNames(prefixCls, wrapClassName)}
      footer={footer}
      closeIcon={closeIcon}
      {...elseProps}
    >
      {children}

      <Row align="middle" justify="end">
        {isCancelBtn && (
          <QuiButton type="secondary" onClick={onCancel} className="button">
            取消
          </QuiButton>
        )}
        {isOklBtn && (
          <QuiButton
            type="primary"
            onClick={onOk}
            loading={loading}
            className="button"
          >
            确认
          </QuiButton>
        )}
      </Row>
    </Modal>
  );
};

export default QuiModal;
