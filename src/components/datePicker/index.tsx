import React, { FC, useEffect } from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import './style/index.less';
const Foo: FC<any> = props => {
  return (
    <RangePicker
      className="custom-data-picker"
      dropdownClassName="custom-data-picker-pop"
      // placeholder={['开始时间', '结束时间']}
      {...props}
      locale={locale}
      // disabled={true}
    />
  );
};

export default Foo;
