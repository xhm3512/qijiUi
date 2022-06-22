import React from 'react';
import { RadioProps } from './Radio';
import Group from './Group';
interface CompoundedComponent extends React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLElement>> {
    QuiGroup: typeof Group;
}
declare const Radio: CompoundedComponent;
export { Group };
export default Radio;
