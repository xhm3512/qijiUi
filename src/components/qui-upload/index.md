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
#### 经典款式
用户点击按钮弹出文件选择框。
```tsx
import React,{useState} from 'react';
import { QuiUpload ,QuiButton} from 'qiji';

const {Dragger}=QuiUpload;

export default () => {

const props: UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  multiple:true,
  onChange(info) {
    console.log(info)
    // if (info.file.status !== 'uploading') {
    //   console.log(info.file, info.fileList);
    // }
    // if (info.file.status === 'done') {
    //   message.success(`${info.file.name} file uploaded successfully`);
    // } else if (info.file.status === 'error') {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
  },
};
return <QuiUpload {...props}>
    <QuiButton>Click to Upload</QuiButton>
  </QuiUpload>
};
```

属性说明如下：

| 属性      |                                                                 说明                                                                 |                 类型                  |  默认值  | 版本 |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------: | :------: | ---: |
| multiple      |       是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件   | `boolean` \| | -  |    false  |

其他api参考：https://ant.design/components/upload-cn/#components-upload-demo-directory