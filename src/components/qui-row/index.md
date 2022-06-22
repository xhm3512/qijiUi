---
title: Row  珊格
group:
  title: 布局
  order: 7
---

## Grid 珊格

Demo:

```tsx
import React from 'react';
import { QuiRow, QuiCol } from 'qiji';

export default () =>{
  return <>
   <QuiRow align="space-between" justify="center" style={{ background: '#f7f7f7', height: '200px' }} overflow="hidden">
            <div style={{ background: '#0092ff', width: '100px', height: '100px'}}></div>
            <div style={{ background: 'rgba(0,146,255,.6)', width: '100px', height: '100px'}}></div>
        </QuiRow>

        <QuiRow align="space-around" justify="center" style={{ background: '#f7f7f7', height: '200px',marginTop:'20px' }} >
            <div style={{ background: '#0092ff', width: '100px', height: '100px' }}></div>
            <div style={{ background: 'rgba(0,146,255,.6)', width: '100px', height: '100px' }}></div>
        </QuiRow>

        <QuiRow align="top" justify="center" style={{ background: '#f7f7f7', height: '200px', marginTop: '20px' }} >
            <div style={{ background: '#0092ff', width: '100px', height: '100px' }}></div>
            <div style={{ background: 'rgba(0,146,255,.6)', width: '100px', height: '100px' }}></div>
        </QuiRow>


        <QuiRow align="middle" justify="center" style={{ background: '#f7f7f7', height: '200px', marginTop: '20px' }} >
            <div style={{ background: '#0092ff', width: '100px', height: '100px' }}></div>
            <div style={{ background: 'rgba(0,146,255,.6)', width: '100px', height: '100px' }}></div>
        </QuiRow>


        <QuiRow align="bottom" justify="center" style={{ background: '#f7f7f7', height: '200px', marginTop: '20px' }} >
            <div style={{ background: '#0092ff', width: '100px', height: '100px' }}></div>
            <div style={{ background: 'rgba(0,146,255,.6)', width: '100px', height: '100px' }}></div>
        </QuiRow>

        <QuiRow align="top" justify="start" style={{ background: '#f7f7f7', height: '200px', marginTop: '20px' }} >
            <div style={{ background: '#0092ff', width: '100px', height: '100px' }}></div>
            <div style={{ background: 'rgba(0,146,255,.6)', width: '100px', height: '100px' }}></div>
        </QuiRow>

        <QuiRow align="top" justify="end" style={{ background: '#f7f7f7', height: '200px', marginTop: '20px' }} >
            <div style={{ background: '#0092ff', width: '100px', height: '100px' }}></div>
            <div style={{ background: 'rgba(0,146,255,.6)', width: '100px', height: '100px' }}></div>
        </QuiRow>
 
  </>
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
