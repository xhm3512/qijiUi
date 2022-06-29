import * as React from 'react';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import type { DialogProps } from 'rc-dialog';
import { getTransitionName } from '../_util/motion';
import './style/index.less'
import { ConfigContext } from '../config-provider/context';
import QuiImgIcons from '../qui-img-icons';
const {MoDalClose } = QuiImgIcons;
export interface ModalProps extends DialogProps {
  onCancel: any,
  centered?:boolean
}
export default (props: ModalProps) => {
  const {
    title,
    prefixCls: customizePrefixCls,
    onClose,
    focusTriggerAfterClose = true,
    onCancel,
    centered=false,
    closeIcon,
    wrapClassName,
    ...elseProps
  } = props;
  const handleCancel = (e: any) => {
    onCancel?.(e);
  };
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('modal', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const closeIconToRender = (
    <span className={`${prefixCls}-close-x`}>
      {closeIcon || <MoDalClose className={`${prefixCls}-close-icon`} />}
    </span>
  );
  const wrapClassNameExtended = classNames(wrapClassName, {
    [`${prefixCls}-centered`]: !!centered,
  });
  return <Dialog
  wrapClassName={wrapClassNameExtended}
    prefixCls={prefixCls}
    focusTriggerAfterClose={focusTriggerAfterClose}
    onClose={handleCancel}
    closeIcon={closeIconToRender}
    transitionName={getTransitionName(rootPrefixCls, 'zoom', props.transitionName)}
    maskTransitionName={getTransitionName(rootPrefixCls, 'fade', props.maskTransitionName)}
   {...elseProps}
  >
  </Dialog>
}
