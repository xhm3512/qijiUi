---
title: Select 选择器
group:
  title: 数据录入
  order: 3
---

## Select 选择器
## 何时使用
- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 代码演示
### 基本使用:

```tsx
import React from 'react';
import { QuiSelect } from 'qiji';
const { Option }=QuiSelect;

export default () => {
  const onChange=(value)=>{
  }
  const onBlur=()=>{
  }
  return <QuiSelect 
virtual={false}
defaultValue='jack'
className='box'
dropdownClassName='dropdown-wrap'
style={ {width: 300 }}
optionLabelProp="label"
onChange={onChange}
onBlur={onBlur}
>
<Option label="分卷：jack" value='jack'>jack</Option>
<Option label="分卷：jlucy" value='lucy'>lucy</Option>
<Option label="分卷：jyiminghe" value='yiminghe'>yiminghe</Option>
</QuiSelect>
};
```

### 搜索框:

```tsx
import React from 'react';
import { QuiSelect } from 'qiji';
const { Option }=QuiSelect;

export default () => {
  const onChange=(value)=>{
  }
  const onBlur=()=>{
  }
  return <QuiSelect 
virtual={false}
defaultValue='jack'
className='box'
dropdownClassName='dropdown-wrap'
showSearch={true}
   style={ {width: 300 }}
// labelInValue
// allowClear={true}
// defaultOpen={true}
optionLabelProp="label"
onChange={onChange}
onBlur={onBlur}
>
<Option label="分卷：jack" value='jack'>jack</Option>
<Option label="分卷：jlucy" value='lucy'>lucy</Option>
<Option label="分卷：jyiminghe" value='yiminghe'>yiminghe</Option>
</QuiSelect>
};
```
## API
参照：https://www.npmjs.com/package/rc-select

