---
title: Select 选择器
group:
  title: 数据录入
  order: 3
---

## Select 选择器

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

