---
title: Radio 单选框
group:
  title: 数据录入
  order: 3
---

##  Radio 单选框
单选框。

## 何时使用
- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。
### 基本用法:

```tsx
import React from 'react';
import { QuiRadio } from 'qiji';
const {QuiGroup}=QuiRadio;
export default () => {
  const onChange=(e,checked)=>{
  }
  return <QuiRadio 
      checked
      onChange={onChange}
      value='radio' >radio</QuiRadio>

};
```

### 单选组合:

```tsx
import React from 'react';
import { QuiRadio } from 'qiji';
const {QuiGroup}=QuiRadio;
export default () => {
  const onChange=(e,checked)=>{
  }
  return <QuiGroup value='apple' >
       <QuiRadio 
   
      onChange={onChange}
      value='apple' >apple</QuiRadio>
      <QuiRadio 
   
      // disabled
      onChange={onChange}
      value='pear'>pear</QuiRadio>
       <QuiRadio 
   
      disabled
      onChange={onChange}
      value='orange' >orange</QuiRadio>

  </QuiGroup>

};
```

## API
参照：https://www.npmjs.com/package/rc-checkbox