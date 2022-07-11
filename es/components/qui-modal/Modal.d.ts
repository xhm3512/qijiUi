import type { DialogProps } from 'rc-dialog';
import './style/index.less';
export interface ModalProps extends DialogProps {
    onCancel: any;
    centered?: boolean;
}
declare const _default: (props: ModalProps) => JSX.Element;
export default _default;
