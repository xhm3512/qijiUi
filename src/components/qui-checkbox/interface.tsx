export type CheckboxValueType = string | number | boolean;
export interface CheckboxOptionType {
  label: React.ReactNode;
  value: CheckboxValueType;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: any) => void;
}
export interface CheckedGroupProps   {
  defaultValue?: any;
  value?: any;
  onChange?: (e: any) => void;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  name?: string;
  children?: React.ReactNode;
  id?: string;
  prefixCls?: string;
  className?: string;
  options?: Array<CheckboxOptionType | string | number>;
  disabled?: boolean;
  style?: React.CSSProperties;
}