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

### Radio/Radio.Button

| 参数           | 说明                              | 类型    | 默认值 |
| -------------- | --------------------------------- | ------- | ------ |
| autoFocus      | 自动获取焦点                      | boolean | false  |
| checked        | 指定当前是否选中                  | boolean | false  |
| defaultChecked | 初始是否选中                      | boolean | false  |
| disabled       | 禁用 Radio                        | boolean | false  |
| value          | 根据 value 进行比较，判断是否选中 | any     | -      |

### RadioGroup

单选框组合，用于包裹一组 `Radio`。

| 参数 | 说明 | 类型 | 默认值 | 版本 |  |
| --- | --- | --- | --- | --- | --- |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格 | `outline` \| `solid` | `outline` |  |  |
| defaultValue | 默认选中的值 | any | - |  |  |
| disabled | 禁选所有子单选器 | boolean | false |  |  |
| name | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性 | string | - |  |  |
| options | 以配置形式设置子元素 | string\[] \| number\[] \| Array&lt;{ label: string value: string disabled?: boolean }> | - |  |  |
| optionType | 用于设置 Radio `options` 类型 | `default` \| `button` | `default` | 4.4.0 |  |
| size | 大小，只对按钮样式生效 | `large` \| `middle` \| `small` | - |  |  |
| value | 用于设置当前选中的值 | any | - |  |  |
| onChange | 选项变化时的回调函数 | function(e:Event) | - |  |  |

## 方法

### Radio

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

参照：https://www.npmjs.com/package/rc-checkbox