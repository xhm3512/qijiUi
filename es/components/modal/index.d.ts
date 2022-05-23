import { FC } from 'react';
import { ModalProps } from 'antd/es/modal/Modal';
import './style/index.less';
interface PropsState extends ModalProps {
  loading?: boolean;
  isCancelBtn?: boolean;
  isOklBtn?: boolean;
}
declare const QuiModal: FC<PropsState>;
export default QuiModal;
