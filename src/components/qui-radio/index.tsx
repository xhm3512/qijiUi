import React from 'react';
import InternalRadio, { RadioProps } from './Radio';
import Group from './Group'
interface CompoundedComponent
  extends React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLElement>> {
  QuiGroup: typeof Group;
  // Button: typeof Button;
}
const Radio = InternalRadio as CompoundedComponent;
Radio.QuiGroup = Group;
export {Group}
export default Radio;
