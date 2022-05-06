import { FC } from 'react';
import 'antd/es/date-picker/style/index.less';
import './style/index.less';
interface PropsState {
  maskClosable?: boolean;
  visible?: boolean;
  onClose?: () => void;
}
declare const Drawer: FC<PropsState>;
export default Drawer;
