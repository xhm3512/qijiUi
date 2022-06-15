import React, { FC } from 'react';
import { DatePicker } from 'antd';
import classNames from 'classnames';
const { RangePicker } = DatePicker;
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import './style/index.less';
const Foo: FC<any> = ({ className, dropdownClassName, ...elseProps }) => {
  return (
    <RangePicker
      className={classNames('custom-data-picker', className)}
      dropdownClassName={classNames(
        'custom-data-picker-pop',
        dropdownClassName,
      )}
      // placeholder={['开始时间', '结束时间']}
      {...elseProps}
      locale={locale}
      // disabled={true}
    />
  );
};

export default Foo;
