---
title: Upload上传
group:
  title: 数据录入
  order: 4
---

# Upload上传
文件选择上传和拖拽上传控件。

## 何时使用
- 上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

  - 当需要上传一个或一些文件时。

  - 当需要展现上传的进度时。

当需要使用拖拽交互时。

## 代码演示

### 点击上传

用户点击按钮弹出文件选择框。
```tsx
import React, { useState } from 'react';
import { QuiUpload, QuiButton } from 'qiji';
const { Dragger } = QuiUpload;

export default () => {
    const [list, setList] = useState([])
    const props: UploadProps = {
        multiple: true,
        beforeUpload(file){
          // 上传前格式校验
          return file.type === 'image/png'
        },
        onChange(file) {
                 console.log(99,file)
            setList(file.fileList)
        },
        onSuccess(info, file, list) {
            console.log('onSuccess', list)
        },
    };
    return <>
        <QuiUpload {...props} multiple={false} accept='.png,.jpg'>
            <QuiButton>Click to Upload</QuiButton>
           
        </QuiUpload>

    </>
};
```

### 拖拽上传
用户点击按钮弹出文件选择框。
```tsx
import React, { useState } from 'react';
import { QuiUpload, QuiButton } from 'qiji';
const { Dragger } = QuiUpload;

export default () => {
    const [list, setList] = useState([])
    const props: UploadProps = {
        multiple: true,
        beforeUpload(file){
          // 上传前格式校验
          return file.type === 'image/png'
        },
        onChange(file) {
                 console.log(99,file)
            setList(file.fileList)
        },
        onSuccess(info, file, list) {
            console.log('onSuccess', list)
        },
    };
    return <>
        <Dragger {...props} multiple={false} accept='.png,.jpg'>
            <QuiButton>Click or drag file to this area to upload</QuiButton>
           
        </Dragger>

    </>
};
```

### 自定义上传列表展示
用户点击按钮弹出文件选择框。
```tsx
import React, { useState } from 'react';
import { QuiUpload, QuiButton, QuiRow } from 'qiji';
const { UploadList, ListItem, ListItemDelete } =QuiUpload;

export default () => {
  const [list, setList] = useState([])
  const props: UploadProps = {
    multiple: true,
    onChange(file) {
      setList(file.fileList)
    },
    fileList: list,
    onRemove(file) {
      console.log('remove',file)
    },
    onSuccess(info, file, list) {
      console.log('onSuccess', list)
    },
  };
  return <>
    <QuiUpload {...props}>
      <QuiButton>Click to Upload</QuiButton>
        {list.map(item => <QuiRow key={item.uid}>
          <div>{item.uid}</div>
          <ListItemDelete file={item}>
            <QuiButton type='outline'>删除</QuiButton>
          </ListItemDelete>
        </QuiRow>)}
    </QuiUpload>

  </>
};
```


```
用户点击按钮弹出文件选择框。
## API
属性说明如下：
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| accept | 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | - |  |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 `File` 或 `Blob` 对象则上传 resolve 传入对象）；也可以返回 `Upload.LIST_IGNORE`，此时列表中将不展示此文件。 **注意：IE9 不支持该方法** | (file, fileList) => boolean \| Promise&lt;File> \| `Upload.LIST_IGNORE` | - |  |
| defaultFileList | 默认已经上传的文件列表 | object\[] | - |  |
| directory | 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)） | boolean | false |  |
| disabled | 是否禁用 | boolean | false |  |
| fileList | 已经上传的文件列表（受控），使用此参数时，如果遇到 `onChange` 只调用一次的问题，请参考 [#2423](https://github.com/ant-design/ant-design/issues/2423) | [UploadFile](#UploadFile)\[] | - |  |
| maxCount | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件 | number | - | 4.10.0 |
| multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件 | boolean | false |  |
| openFileDialogOnClick | 点击打开文件对话框 | boolean | true |  |
| onChange | 上传文件改变时的状态，详见 [onChange](#onChange) | function | - |  |
| onDrop | 当文件被拖入上传区域时执行的回调功能 | (event: React.DragEvent) => void | - | 4.16.0 |
| onDownload | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页 | function(file): void | (跳转新标签页) |  |
| onPreview | 点击文件链接或预览图标时的回调 | function(file) | - |  |
| onRemove   | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除               | function(file): boolean \| Promise | -   |  |

### ListItemDelete

继承自 File，附带额外属性用于渲染。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| file | 当前删除文件 | File | - |
