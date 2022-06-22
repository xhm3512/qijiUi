import React, { FC, RefAttributes, ForwardRefExoticComponent } from 'react';
import InternalInput, { InputRef, PropsState } from './Input';
import QuiSearch, { PropsSearchState } from './Search';
// export type  CompoundedComponent =FC<PropsState> &  {
//   // Group: typeof Group;
//   QuiSearch: FC<PropsSearchState>;
//   // TextArea: typeof TextArea;
//   // Password: typeof Password;
// }


export interface CompoundedComponent
  extends ForwardRefExoticComponent<PropsState & RefAttributes<InputRef>> {
  // Group: typeof Group;
  QuiSearch: FC<PropsSearchState>;
  // TextArea: typeof TextArea;
  // Password: typeof Password;
}
const Input = InternalInput as CompoundedComponent;
Input.QuiSearch = QuiSearch;
export default Input;