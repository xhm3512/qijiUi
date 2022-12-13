import * as React from 'react';
import Dragger from './Dragger';
import { UploadProps } from './interface';
export { UploadProps };
interface IsUploadContext {
    handleRemove?: Function;
    onPreview?: Function;
}
export declare const UploadContext: React.Context<IsUploadContext>;
declare const ForwardUpload: <T>(props: UploadProps<T> & {
    children?: React.ReactNode;
} & React.RefAttributes<any>) => React.ReactElement;
type InternalUploadType = typeof ForwardUpload;
interface UploadInterface extends InternalUploadType {
    defaultProps?: Partial<UploadProps>;
    displayName?: string;
    Dragger: typeof Dragger;
    UploadList: any;
    ListItem: any;
    ListItemDelete: any;
    LIST_IGNORE: string;
}
declare const Upload: UploadInterface;
export default Upload;
