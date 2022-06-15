import { FC } from 'react';
import './style/index.less';
interface PropsState {
    maskClosable?: boolean;
    visible?: boolean;
    onClose?: () => void;
    className?: string;
}
declare const Drawer: FC<PropsState>;
export default Drawer;
