import { FC, CSSProperties } from 'react';
export interface CloseProps {
    className?: string;
    style?: CSSProperties;
    width?: string | number;
    height?: string | number;
}
declare const ModalClose: FC<CloseProps>;
export default ModalClose;
