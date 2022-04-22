import React, { FC, CSSProperties } from 'react';
import classNames from 'classnames';
interface CloseProps {
  className?: string;
  style?: CSSProperties;
  width?: string | number;
  height?: string | number;
}
const ModalClose: FC<CloseProps> = ({
  className,
  style = undefined,
  width = '1em',
  height = '1em',
}) => {
  const prefixCls = 'qiji-oni-img-close';
  const classes = classNames(prefixCls, className);
  return (
    <img
      className={classes}
      style={{ ...style, width, height }}
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAatJREFUaEPtWEtOwzAQnThcA87TTVU2OAK6ZtnDsGQNQjEbqm56HrhGkyCLVDJV3LFnxgQLZ9n5+L1547HrCjL/qszxQyEwt4JFgaIAswKlhZgFZIf/HwWM2S46gCdbMjWoTdMs39nlcxK07e66r/pH+1MN8KD1ah+SP1iBV7P9AIDLMemhBrXWetmGLIL5GLNrOuifAeBi9P281asrLM7aqQRsrAiJCfA2tzyBUeI3p0psEh7wBzWom9AWDVbAovUtSGknqVxRBKRISIGP2gPuhuIA4MRObepoBY5JKEAoMdgkIhOIbacU4MktFNtOqcCLEMCUsPaTQ4o9ft0CslooQIlu9KkdX5ED8JhPjMAZJVyeouDFWmhCiZfvO9mPr6tB3Uvdn5Io4KiQJwHPtMmjhTzg89jE5+b8nx+jIYdUiA92ZfDZWWM0BliMbwwZMgEKIEoMRoZEgAOEEytynZYAIJGDdJBJLiyVK7iFsv9Tf/IuJHYl/rVnlewfttynxWFQm7vcnhaxeTyXPXgTzwUQW7cQwCqU2l4USF1hLH9RAKtQantRIHWFsfxfdKN9QFsChAsAAAAASUVORK5CYII="
    />
  );
};

export default ModalClose;
