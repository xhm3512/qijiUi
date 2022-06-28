import React, { useState } from "react";
import { parseISO } from 'date-fns';
import { PickerMode } from 'rc-picker/lib/interface';
// import * from 'date-fns';
import Picker from "rc-picker";

import dateFnsGenerateConfig from "rc-picker/lib/generate/dateFns";
import enUS from "rc-picker/lib/locale/zh_CN";
import "rc-picker/assets/index.css";
function getPicker(
  picker?: PickerMode,
  displayName?: string,
) {
  const defaultValue = parseISO('2021-08-30');

  const [value, setValue] = React.useState<Date | null>(defaultValue);
  const weekRef = React.useRef<Picker<Date>>(null);

  const onSelect = (newValue: Date) => {
    console.log("Select:", newValue);
  };

  const onChange = (newValue: Date | null, formatString?: string) => {
    console.log("Change:", newValue, formatString);
    setValue(newValue);
  };
  const sharedProps = {
    generateConfig: dateFnsGenerateConfig,
    value,
    onSelect,
    onChange
  };


  return (<Picker
    {...sharedProps}
    locale={enUS}
    defaultValue={defaultValue}
    value={defaultValue}
  />
  );
}

export default getPicker