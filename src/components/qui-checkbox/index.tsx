import React from 'react';
import InternalRadio, { CheckboxProps } from './CheckedBox';
import Group from './Group'
interface CompoundedComponent
  extends React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLElement>> {
  QuiGroup: typeof Group;
  // Button: typeof Button;
}
const CheckedBox = InternalRadio as CompoundedComponent;
CheckedBox.QuiGroup = Group;
export {Group}
export default CheckedBox;
