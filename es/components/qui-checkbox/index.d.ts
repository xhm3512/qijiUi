import React from 'react';
import { CheckboxProps } from './CheckedBox';
import Group from './Group';
interface CompoundedComponent extends React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLElement>> {
    QuiGroup: typeof Group;
}
declare const CheckedBox: CompoundedComponent;
export { Group };
export default CheckedBox;
