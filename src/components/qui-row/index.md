---
title: Row  珊格
group:
  title: 布局
  order: 7
---

## Row 珊格

Demo:

```tsx
import React from 'react';
import { QuiRow, QuiCol } from 'qiji';

export default () =>{
  return <>
   <QuiRow align="space-between" justify="center" style={{ background: '#f7f7f7', height: '200px' }} overflow="hidden">
            <div style={{ background: '#f95a58', width: '100px', height: '100px'}}></div>
            <div style={{ background: 'rgba(249, 90, 88, 0.4)', width: '100px', height: '100px'}}></div>
        </QuiRow>

        <QuiRow align="space-around" justify="center" style={{ background: '#f7f7f7', height: '200px',marginTop:'20px' }} >
            <div style={{ background: '#f95a58', width: '100px', height: '100px' }}></div>
            <div style={{ background: 'rgba(249, 90, 88, 0.4)', width: '100px', height: '100px' }}></div>
        </QuiRow>

        <QuiRow align="top" justify="center" style={{ background: '#f7f7f7', height: '200px', marginTop: '20px' }} >
            <div style={{ background: '#f95a58', width: '100px', height: '100px' }}></div>
            <div style={{ background: 'rgba(249, 90, 88, 0.4)', width: '100px', height: '100px' }}></div>
        </QuiRow>


        <QuiRow align="middle" justify="center" style={{ background: '#f7f7f7', height: '200px', marginTop: '20px' }} >
            <div style={{ background: '#f95a58', width: '100px', height: '100px' }}></div>
            <div style={{ background: 'rgba(249, 90, 88, 0.4)', width: '100px', height: '100px' }}></div>
        </QuiRow>


        <QuiRow align="bottom" justify="center" style={{ background: '#f7f7f7', height: '200px', marginTop: '20px' }} >
            <div style={{ background: '#f95a58', width: '100px', height: '100px' }}></div>
            <div style={{ background: 'rgba(249, 90, 88, 0.4)', width: '100px', height: '100px' }}></div>
        </QuiRow>

        <QuiRow align="top" justify="start" style={{ background: '#f7f7f7', height: '200px', marginTop: '20px' }} >
            <div style={{ background: '#f95a58', width: '100px', height: '100px' }}></div>
            <div style={{ background: 'rgba(249, 90, 88, 0.4)', width: '100px', height: '100px' }}></div>
        </QuiRow>

        <QuiRow align="top" justify="end" style={{ background: '#f7f7f7', height: '200px', marginTop: '20px' }} >
            <div style={{ background: '#f95a58', width: '100px', height: '100px' }}></div>
            <div style={{ background: 'rgba(249, 90, 88, 0.4)', width: '100px', height: '100px' }}></div>
        </QuiRow>
 
  </>
};
```
## API

属性说明如下：

| 属性      |                                                                 说明                                                                 |                 类型                  |  默认值  | 版本 |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------: | :------: | ---: |
| align      |    栅格占位格数，为 0 时相当于 display: none              | `top` \| `middle` \|`bottom` \|  |  top    |
| justify    |   flex 布局属性  | `start` \| `end` \|`center` \| `space-around` \| `space-between` \|    |    start  |
| style      |      style                                                       | `CSSProperties` \|   | -  | 


