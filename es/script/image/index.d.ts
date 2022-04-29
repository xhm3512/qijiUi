import { ReactChildren } from 'react';
import './style/index.less';
interface ImageProps {
  /** 图片出错时重试次数 */
  errNum?: number;
  /** 图片引用地址 */
  src: string;
  /** 默认兜底图 */
  defaultSrc?: string;
  /** 是否使用懒加载 */
  lazyLoad?: boolean;
  /** 可以覆盖的样式类名 */
  className?: string;
  /** 图片加载失败时是否隐藏 */
  errDisplay?: boolean;
  /** 图片加载失败时回调函数 */
  errorCallback?: () => {};
  /** 子元素 */
  children?: ReactChildren;
  alt?: string;
}
declare const PuiImage: {
  (props: ImageProps): JSX.Element;
  defaultProps: {
    src: string;
    defaultSrc: string;
    lazyLoad: boolean;
    errNum: number;
    errDisplay: boolean;
    errorCallback: () => void;
  };
};
export default PuiImage;
