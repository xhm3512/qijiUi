import * as React from 'react';
import { UploadProps } from './interface';
export type DraggerProps = UploadProps & {
    height?: number;
};
declare const Dragger: React.FC<DraggerProps>;
export default Dragger;
