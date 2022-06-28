---
title: Radio 单选框
group:
  title: 数据录入
  order: 3
---

##  Radio 单选框

### 基本用法:

```tsx
import React from 'react';
import { QuiRadio } from 'qiji';
const {QuiGroup}=QuiRadio;
export default () => {
  const onChange=(e,checked)=>{
  }
  return <QuiRadio 
      style={{minWidth:80}}
   checked
      onChange={onChange}
      value='1' >1</QuiRadio>

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
  return <QuiGroup value='1' >
       <QuiRadio 
      style={{minWidth:80}}
   
      onChange={onChange}
      value='1' >1</QuiRadio>
      <QuiRadio 
      style={{minWidth:80}}
   
      // disabled
      onChange={onChange}
      value='2' >1</QuiRadio>
       <QuiRadio 
      style={{minWidth:80}}
   
      // disabled
      onChange={onChange}
      value='3' >1</QuiRadio>

  </QuiGroup>

};
```

## API
参照：https://www.npmjs.com/package/rc-checkbox