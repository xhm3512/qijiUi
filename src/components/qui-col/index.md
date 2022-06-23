---
title: Col 珊格
group:
  title: 布局
  order: 7
---

## Col 珊格

Demo:

```tsx
import React from 'react';
import { QuiRow, QuiCol } from 'qiji';
export default () =>{
  return <>
   <QuiRow style={{ background: '#f7f7f7', height: '200px' }} >
            <QuiCol flex={2} style={{ background: '#0092ff', fontSize:'20px', height: '100px', textAlign: 'center' }}>7</QuiCol>
            <QuiCol flex={2} style={{ background: 'rgba(0,146,255,.6)', fontSize: '20px', height: '100px', textAlign: 'center' }}>3</QuiCol>
        </QuiRow>

        <QuiRow style={{ background: '#f7f7f7', height: '200px' }} >
            <QuiCol flex={'2'} style={{ background: '#0092ff', fontSize: '20px', height: '100px', textAlign: 'center' }}>2</QuiCol>
            <QuiCol flex={'3'} style={{ background: 'rgba(0,146,255,.6)', fontSize: '20px', height: '100px', textAlign: 'center' }}>3</QuiCol>
        </QuiRow>

        <QuiRow style={{ background: '#f7f7f7', height: '200px' }} >
            <QuiCol flex={'200px'} style={{ background: '#0092ff', fontSize: '20px', height: '100px', textAlign: 'center' }}>100px</QuiCol>
            <QuiCol flex={'auto'} style={{ background: 'rgba(0,146,255,.6)', fontSize: '20px',  height: '100px', textAlign: 'center' }}>auto</QuiCol>
        </QuiRow>

        <QuiRow style={{ background: '#f7f7f7', height: '200px' }} >
            <QuiCol flex={'1 1 200px'} style={{ background: '#0092ff', fontSize: '20px', height: '100px', textAlign: 'center' }}>1 1 200px</QuiCol>
            <QuiCol flex={'0 1 300px'} style={{ background: 'rgba(0,146,255,.6)', fontSize: '20px',  height: '100px', textAlign: 'center' }}>0 1 300px</QuiCol>
        </QuiRow>

        <QuiRow style={{ background: '#f7f7f7', height: '200px' }} >
            <QuiCol span={2} style={{ background: '#0092ff', height: '100px', fontSize: '20px',  textAlign: 'center' }}>span 2</QuiCol>
            <QuiCol span={2} style={{ background: 'rgba(0,146,255,.6)', fontSize: '20px', height: '100px', textAlign: 'center' }}>span 2</QuiCol>
            <QuiCol span={2} style={{ background: '#0092ff', height: '100px', fontSize: '20px', textAlign: 'center' }}>span 2</QuiCol>
            <QuiCol span={2} style={{ background: 'rgba(0,146,255,.6)', fontSize: '20px', height: '100px', textAlign: 'center' }}>span 2</QuiCol>
            <QuiCol span={2} style={{ background: '#0092ff', height: '100px', fontSize: '20px', textAlign: 'center' }}>span 2</QuiCol>
            <QuiCol span={2} style={{ background: 'rgba(0,146,255,.6)', fontSize: '20px', height: '100px', textAlign: 'center' }}>span 2</QuiCol>
            <QuiCol span={2} style={{ background: '#0092ff', height: '100px', fontSize: '20px', textAlign: 'center' }}>span 2</QuiCol>
            <QuiCol span={2} style={{ background: 'rgba(0,146,255,.6)', fontSize: '20px', height: '100px', textAlign: 'center' }}>span 2</QuiCol>
            <QuiCol span={2} style={{ background: '#0092ff', height: '100px', fontSize: '20px', textAlign: 'center' }}>span 2</QuiCol>
            <QuiCol span={2} style={{ background: 'rgba(0,146,255,.6)', fontSize: '20px', height: '100px', textAlign: 'center' }}>span 2</QuiCol>
            <QuiCol span={2} style={{ background: '#0092ff', height: '100px', fontSize: '20px', textAlign: 'center' }}>span 2</QuiCol>
            <QuiCol span={2} style={{ background: 'rgba(0,146,255,.6)', fontSize: '20px', height: '100px', textAlign: 'center' }}>span 2</QuiCol>
        </QuiRow>

        <QuiRow style={{ background: '#f7f7f7', height: '200px' }} >
            <QuiCol span={12} style={{ background: '#0092ff', height: '100px', fontSize: '20px', textAlign: 'center' }}>span 12</QuiCol>
            <QuiCol span={12} style={{ background: 'rgba(0,146,255,.6)', fontSize: '20px', height: '100px', textAlign: 'center' }}>span 12</QuiCol>
        </QuiRow>

        <QuiRow style={{ background: '#f7f7f7', height: '200px' }} >
            <QuiCol span={6} style={{ background: '#0092ff', height: '100px', fontSize: '20px', textAlign: 'center' }}>span 6</QuiCol>
            <QuiCol span={6} style={{ background: 'rgba(0,146,255,.6)', fontSize: '20px', height: '100px', textAlign: 'center' }}>span 6</QuiCol>
            <QuiCol span={6} style={{ background: '#0092ff', height: '100px', fontSize: '20px', textAlign: 'center' }}>span 6</QuiCol>
            <QuiCol span={6} style={{ background: 'rgba(0,146,255,.6)', fontSize: '20px', height: '100px', textAlign: 'center' }}>span 6</QuiCol>
        </QuiRow>
  </>
}
```

## API

属性说明如下：

| 属性      |                                                                 说明                                                                 |                 类型                  |  默认值  | 版本 |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------: | :------: | ---: |
| span      |       栅格占位格数，为 0 时相当于 display: none    | `number` \| `string` | -  |      |
| flex      |            flex 布局属性    | `number` \| `string` | -  |      |
| style      |                    style   | `CSSProperties` |  -    |


More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
