import React, { useState } from 'react';
import { Moment } from 'moment';
import QuiDatePicker from '../../datePicker';
interface propsState {
  initDate: Array<Moment>;
  onChangeDate?: (val: Array<Moment>) => {};
}
const App = ({ initDate, onChangeDate }: propsState) => {
  const [dates, setDates] = useState([]);
  const [value, setValue] = useState(initDate);
  const [hackValue, setHackValue] = useState(undefined);
  // 设置选择范围，不超过30天
  const disabledDate = current => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') > 29;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') > 29;
    return tooEarly || tooLate;
  };
  // 打开就不展示已经设置的日期
  const onOpenChange = open => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };
  const onChange = val => {
    setDates(val);
    onChangeDate && onChangeDate(val);
  };

  return (
    <QuiDatePicker
      value={hackValue || value}
      disabledDate={disabledDate}
      onCalendarChange={onChange}
      onChange={val => setValue(val)}
      onOpenChange={onOpenChange}
      bordered={false}
      defaultValue={initDate}
      allowClear={false}
    />
  );
};

export default App;
