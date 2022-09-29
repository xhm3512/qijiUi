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

#### 点击上传
用户点击按钮弹出文件选择框。
```tsx
import React, { useState } from 'react';
import { QuiUpload, QuiButton } from 'qiji';
const { UploadList } = QuiUpload;
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

#### 自定义上传列表展示
用户点击按钮弹出文件选择框。
```tsx
import React, { useState } from 'react';
import { QuiUpload, QuiButton } from 'qiji';
const { UploadList } = QuiUpload;
const { Dragger } = QuiUpload;

export default () => {
    const [list, setList] = useState([])
    const props: UploadProps = {
        multiple: true,
        onChange(file) {
            setList(file.fileList)
        },
        fileList: list,
        onRemove() {
          
        },
        onSuccess(info, file, list) {
            console.log('onSuccess', list)
        },
    };
    return <>
        <QuiUpload {...props}>
            <QuiButton>Click to Upload</QuiButton>
            <UploadList>
                {
                    list.map(item => {
                        return <div key={item.uid} itemfile={item} className='item-box'>333</div>
                    })
                }
            </UploadList>
        </QuiUpload>

    </>
};
```

属性说明如下：

| 属性      |                                                                 说明                                                                 |                 类型                  |  默认值  | 版本 |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------: | :------: | ---: |
| multiple      |       是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件   | `boolean` \| | -  |    false  |

其他api参考：https://ant.design/components/upload-cn/#components-upload-demo-directory