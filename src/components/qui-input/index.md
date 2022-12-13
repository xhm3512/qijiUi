---
title: Input 输入框
group:
  title: 数据录入
  order: 3
---

# Input 输入框
## 何时使用
- 需要用户输入表单域内容时。

- 提供组合型输入框，带搜索的输入框。
## 代码演示
### Input:

```tsx
import React,{useRef} from 'react';
import { QuiInput } from 'qiji';


const {QuiSearch}=QuiInput
export default () => {
   const inputRef = useRef<InputRef>(null);
   const onFinish=(val)=>{
     console.log(val)
   }
  return  <QuiInput
    ref={inputRef}
    onChange={onFinish}
    // className='tt' 
    allowClear={true}
    // loading={true}
     textErr='有特殊字符'
    //  defaultValue='的方法'
    placeholder='这里是描述'
    //  disabled
    />
};
```
### Search:

```tsx
import React,{useRef} from 'react';
import { QuiInput } from 'qiji';


const {QuiSearch}=QuiInput
export default () => {
   const inputRef = useRef<InputRef>(null);
   const onFinish=(val)=>{
     console.log(val)
   }
  return  <QuiSearch
    ref={inputRef}
    onChange={onFinish}
    className='tt' 
    allowClear={true}
    // loading={true}
    //  textErr='有特殊字符'
    //  defaultValue='的方法'
    placeholder='这里是描述'
    //  disabled
    />
};
```

### Textarea:

```tsx
import React,{useRef} from 'react';
import { QuiInput } from 'qiji';


const {TextArea}=QuiInput
export default () => {
   const onFinish=(val)=>{
     console.log(val)
   }
  return   <div
  style={{
      height:'100px',
      width:'400px'
    }}
  >
  <TextArea
    onChange={onFinish}
    className='tt' 
    maxLength={10}
    allowClear={false}
    // showCount
    //  textErr='有特殊字符'
     defaultValue='的方法'
    placeholder='这里是描述'
     disabled
    />
    </div>
};
```
### Textarea:

```tsx
import React,{useRef} from 'react';
import { QuiInput } from 'qiji';


const {TextArea}=QuiInput
export default () => {
   const onFinish=(e)=>{
     console.log(e.target.value)
   }
   
  return  <div
  style={{
      height:'100px',
      width:'400px'
    }}
  >
  <TextArea
    onChange={onFinish}
    // className='tt' 
    allowClear={true}
    onPressEnter={onFinish}
    // maxLength={10}
    // showCount
    //  textErr='有特殊字符'
    placeholder='这里是描述'
    //  disabled
    />
  </div>
  
};
```

## API
### Input

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 可以点击清除图标删除内容 | boolean \| { clearIcon: ReactNode } | - |  |
| defaultValue | 输入框默认内容 | string | - |  |
| disabled | 是否禁用状态，默认为 false | boolean | false |  |
| id | 输入框的 id | string | - |  |
| maxLength | 最大长度 | number | - |  |
| showCount | 是否展示字数 | boolean \| { formatter: ({ count: number, maxLength?: number }) => ReactNode } | false | 4.18.0 |
| prefix | 带有前缀图标的 input | ReactNode | - |  |
| onChange | 输入框内容变化时的回调 | function(e) | - |  |
| onPressEnter | 按下回车的回调 | function(e) | - |  |

> 如果 `Input` 在 `Form.Item` 内，并且 `Form.Item` 设置了 `id` 和 `options` 属性，则 `value` `defaultValue` 和 `id` 属性会被自动设置。

Input 的其他属性和 React 自带的 [input](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes) 一致。

### Input.TextArea

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 可以点击清除图标删除内容 | boolean | false |  |
| defaultValue | 输入框默认内容 | string | - |  |
| maxLength | 内容最大长度 | number | - | 4.7.0 |
| showCount | 是否展示字数 | boolean \| { formatter: ({ count: number, maxLength?: number }) => string } | false | 4.7.0 (formatter: 4.10.0) |
| value | 输入框内容 | string | - |  |
| onPressEnter | 按下回车的回调 | function(e) | - |  |

`Input.TextArea` 的其他属性和浏览器自带的 [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) 一致。

#### Input.Search

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| enterButton | 是否有确认按钮，可设为按钮文字。该属性会与 `addonAfter` 冲突。 | boolean \| ReactNode | false |
| loading | 搜索 loading | boolean | false |
| onSearch | 点击搜索图标、清除图标，或按下回车键时的回调 | function(value, event) | - |

其余属性和 Input 一致。

| 字段      | 说明                    | 类型             | 只读值 | 版本 |
| --------- | ----------------------- | ---------------- | ------ | ---- |
| className | 计算后的 `svg` 类名     | string           | -      |      |
| style     | 计算后的 `svg` 元素样式 | CSSProperties    | -      |      |
| allowClear     | 输入框默认内容        | boolean \| number | `false`  |      |
| defaultValue     | 可以点击清除图标删除内容        | string |  -  |      |
| textErr     | 异常文案提示        | string |  -  |      |
| onChange     | 输入框内容变化时的回调        | function(e)| -  |      |


