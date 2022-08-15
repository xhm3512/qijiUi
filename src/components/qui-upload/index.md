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
import React from 'react';
import { QuiUpload ,QuiButton} from 'qiji';

export default () => {
  const props: any = {
  name: 'file',
  action: '//authorapi.qijizuopin.com/upload/uploadimg',
  headers: {
    authorization: 'authorization-text',
  },
  }
return <QuiUpload  {...props}>
<QuiButton >Click to Upload</QuiButton>
</QuiUpload>
};
```

属性说明如下：

| 属性      |                                                                 说明                                                                 |                 类型                  |  默认值  | 版本 |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------: | :------: | ---: |
| span      |       栅格占位格数，为 0 时相当于 display: none    | `number` \| `string` | -  |      |
