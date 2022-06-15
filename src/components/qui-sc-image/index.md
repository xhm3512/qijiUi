---
title: Image 图片懒加载
group:
  title: 其他
  order: 19
---

## Image 图片懒加载

Demo:

```tsx
import React from 'react';
import { QuiScImage } from 'qiji';
const url =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
const url2 =
  'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp';
const style = {
  width: '50%',
  height: '50%',
};
export default () => {
  return (
    <div>
      {[
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        2021,
        22,
        23,
        24,
        25,
        26,
      ].map(item => (
        <div key={item} style={style}>
          <QuiScImage
            style={style}
            src={item >= 26 ? url2 : url}
            errNum={2}
            errDisplay={true}
            defaultSrc={url}
            lazyLoad={true}
          />
        </div>
      ))}
    </div>
  );
};
```

| 参数          | 说明                   | 类型       | 默认值 | 版本 |
| ------------- | ---------------------- | ---------- | ------ | ---- |
| alt           | 图像描述               | string     | -      |      |
| src           | 图片地址               | string     | -      |      |
| lazyLoad      | 是否懒加载             | boolean    | true   |      |
| errNum        | 图片出错时重试次数     | string     | 1      |      |
| defaultSrc    | 默认兜底图             | string     | -      |      |
| errDisplay    | 图片加载失败时是否隐藏 | boolean    | -      |      |
| errorCallback | 图片加载失败时回调函数 | () => void | -      |      |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
