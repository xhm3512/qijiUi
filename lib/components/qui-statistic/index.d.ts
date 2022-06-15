import { FC, ReactNode } from 'react';
import './style/index.less';
interface PropsState {
    active: boolean;
    onClick?: (type: string) => void;
    wrapClassName?: string;
    children: Array<ReactNode>;
    currentActive?: number;
}
declare const Foo: FC<PropsState>;
export default Foo;
