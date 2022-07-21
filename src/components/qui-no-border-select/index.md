---
title: Select选择器-无边框无背景
group:
  title: 数据录入
  order: 3
---

#  Select选择器-无边框无背景
下拉选择器。
## 何时使用
- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 代码演示
### 基本使用
```tsx
import React from 'react';
import { QuiNoBorderSelect } from 'qiji';
const { Option }=QuiNoBorderSelect;

export default () => {
  const onChange=(value)=>{
  }
  const onBlur=()=>{
  }
  return <QuiNoBorderSelect 
virtual={false}
defaultValue='jack'
className='box'
dropdownClassName='dropdown-wrap'
// labelInValue
// allowClear={true}
// defaultOpen={true}
// optionLabelProp="label"
onChange={onChange}
onBlur={onBlur}
>
<Option label="jack" value='jack'>本周</Option>
<Option label="jlucy" value='lucy'>本月</Option>
<Option label="jlucy1" value='lucy1'>近30日近30日近30日近30日</Option>
</QuiNoBorderSelect>
};
```
## API
参照：https://www.npmjs.com/package/rc-select

