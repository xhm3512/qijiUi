import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import LoadingIcon from './LoadingIcon';
import { tuple } from '../_util/type';
import './style/index.less';
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
type ButtonHTMLType = typeof ButtonHTMLTypes[number];
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  icon?: ReactNode;
  size?: 'large' | 'middle' | 'small';
  loading?: boolean;
  htmlType?: ButtonHTMLType;
  className?: string;
}
const prefixCls = 'qiji-oni-btn';
const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = 'primary',
  disabled,
  icon,
  loading = false,
  size = 'middle',
  htmlType = 'button' as ButtonProps['htmlType'],
  className,
}) => {
  const iconNode =
    icon && !loading ? (
      icon
    ) : (
      <LoadingIcon
        existIcon={!!icon}
        prefixCls={prefixCls}
        loading={!!loading}
      />
    );
  const classes = classNames(
    `${prefixCls} ${prefixCls}-button`,
    `${prefixCls}-${type}`,
    `${prefixCls}-${type}-${size}`,
    className,
  );
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
    >
      {icon && <span className="icon">{iconNode}</span>}
      {children}
    </button>
  );
};

export default Button;
