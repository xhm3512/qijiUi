import React, { useState, useRef, useEffect, ReactChildren } from 'react';
import classNames from 'classnames';
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

const PuiImage = (props: ImageProps) => {
  const {
    className,
    errNum,
    lazyLoad,
    defaultSrc,
    src,
    errDisplay,
    errorCallback,
    children,
    alt,
    ...restProps
  } = props;

  const [imgSrc, setImgSrc] = useState<string>(defaultSrc || '');

  // const [errorStateShow, setErrorStateShow] = useState<boolean>(true);

  const imgRef = useRef<HTMLImageElement>(null);

  // 判断元素是否在可视区
  const isInViewPort = () => {
    const viewPortHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    return (
      (imgRef.current as HTMLImageElement)?.getBoundingClientRect()?.top <=
      viewPortHeight + 100
    );
  };

  const newImg = () => {
    let Img: HTMLImageElement | null = new Image();
    let errCount = 1;
    Img.src = src;

    Img.onload = () => {
      setImgSrc(src);
      Img = null;
    };

    Img.onerror = e => {
      if (typeof errorCallback == 'function') {
        errorCallback();
      } else {
        console.error('props errorCallback is not a function!!!');
      }

      // 等于失败次数，加载defaultSrc
      if (errCount >= (errNum as number)) {
        if (errDisplay) {
          // setErrorStateShow(false);
          return;
        }

        setImgSrc(defaultSrc || '');
        Img = null;
      } else {
        Img && (Img.src = src);
      }

      errCount++;
    };
  };

  // 滑动事件回调函数
  const handleScroll = () => {
    if (isInViewPort()) {
      newImg();
      window.removeEventListener('scroll', handleScroll, true);
    } else {
      (imgRef.current as HTMLImageElement).src = defaultSrc || '';
    }
  };

  useEffect(() => {
    if (lazyLoad) {
      // 如果使用了懒加载，初始在可视区，直接加载图片
      if (isInViewPort()) {
        newImg();
      } else {
        // 如果使用了懒加载，初始不在可视区，监听滑动事件
        window.addEventListener('scroll', handleScroll, true);
        return () => {
          window.removeEventListener('scroll', handleScroll, true);
        };
      }
    } else {
      newImg();
    }
  }, []);

  const classes = classNames('pui-image', className);

  return (
    <>
      <img ref={imgRef} className={classes} {...restProps} src={imgSrc} />
      {children}
    </>
  );
};

PuiImage.defaultProps = {
  src: '', // image图片，默认为空
  defaultSrc: '',
  lazyLoad: true, // 是否使用懒加载，默认使用
  errNum: 1, //默认失败次数为1
  errDisplay: false,
  errorCallback: () => {},
};

export default PuiImage;
