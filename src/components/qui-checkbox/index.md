---
title: Checkbox 多选框
group:
  title: 数据录入
  order: 3
---

#  Checkbox 多选框
## 何时使用
- 在一组可选项中进行多项选择时；

- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。
## 代码演示

### 基本用法:

```tsx
import React from 'react';
import { QuiCheckbox } from 'qiji';
const {QuiGroup}=QuiCheckbox;
export default () => {
  const onChange=(e)=>{
 console.log(`checked = ${e.target.checked}`);
  }
  return <QuiCheckbox 
      onChange={onChange}
      // defaultChecked
       />

};
```

### 不可用:

```tsx
import React from 'react';
import { QuiCheckbox } from 'qiji';
const {QuiGroup}=QuiCheckbox;
export default () => {
  const onChange=(e)=>{
 console.log(`checked = ${e.target.checked}`);
  }
  return <div>
      <QuiCheckbox 
      onChange={onChange}
      disabled
      value='1'/>
      <br/>
      <QuiCheckbox 
      onChange={onChange}
      disabled
      defaultChecked
      value='1' />
  </div>

};
```
### 受控组件:

```tsx
import React,{useState} from 'react';
import { QuiCheckbox } from 'qiji';
import {Button} from 'antd';
const {QuiGroup}=QuiCheckbox;
export default () => {
   const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false)
    const toggleChecked = () => {
    setChecked(!checked);
  };

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };

  const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;

  return <div>
       <QuiCheckbox checked={checked} disabled={disabled} onChange={onChange}>
          {label}
        </QuiCheckbox>
        <br/>
      <Button type="primary" size="small" onClick={toggleChecked}>
          {!checked ? 'Check' : 'Uncheck'}
        </Button>
        <Button style={{ margin: '0 10px' }} type="primary" size="small" onClick={toggleDisable}>
          {!disabled ? 'Disable' : 'Enable'}
        </Button>
  </div>

};
```
### checkBox组:

```tsx
import React,{useState} from 'react';
import { QuiCheckbox } from 'qiji';
const {QuiGroup}=QuiCheckbox;
import { Checkbox, Divider } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
export default () => {
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    console.log('log2',list)
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
console.log(222,checkedList)
  return (
    <>
      <QuiCheckbox indeterminate={indeterminate}
       onChange={onCheckAllChange}
        checked={checkAll}>
        Check all
      </QuiCheckbox>
      <Divider />
      <QuiGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </>
  );

};
```
### 布局:
Checkbox.Group 内嵌 Checkbox，可以实现灵活的布局
```tsx
import React from 'react';
import { QuiCheckbox } from 'qiji';
const {QuiGroup}=QuiCheckbox;
export default () => {
  const onChange=(checkedValues)=>{
    console.log('log',checkedValues)
  }
  return <QuiGroup 
  onChange={onChange}>
       <QuiCheckbox 
   
      onChange={onChange}
      value='1' >1</QuiCheckbox>
      <QuiCheckbox 
   
      // disabled
      onChange={onChange}
      value='2' >1</QuiCheckbox>
       <QuiCheckbox 
   
      // disabled
      onChange={onChange}
      value='3' >1</QuiCheckbox>

  </QuiGroup>

};
```

## API

### 属性

#### Checkbox

| 参数           | 说明                                    | 类型              | 默认值 | 版本 |
| -------------- | --------------------------------------- | ----------------- | ------ | ---- |
| autoFocus      | 自动获取焦点                            | boolean           | false  |      |
| checked        | 指定当前是否选中                        | boolean           | false  |      |
| defaultChecked | 初始是否选中                            | boolean           | false  |      |
| disabled       | 失效状态                                | boolean           | false  |      |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制 | boolean           | false  |      |
| onChange       | 变化时回调函数                          | function(e:Event) | -      |      |

#### Checkbox Group

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | string\[] | \[] |  |
| disabled | 整组失效 | boolean | false |  |
| name | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string | - |  |
| options | 指定可选项 | string\[] \| number\[] \| Option\[] | \[] |  |
| value | 指定选中的选项 | string\[] | \[] |  |
| onChange | 变化时回调函数 | function(checkedValue) | - |  |

##### Option

```typescript
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
```

### 方法
#### Checkbox

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |


API参照：https://www.npmjs.com/package/rc-checkbox