---
title: BrokenLine折线图
group:
  title: 数据展示
  order: 8
---

Demo:

```tsx
import React from 'react';
import { BrokenLine } from 'qiji';
const getConfig = ({ data, type }: any) => {
  const config = {
    data,
    seriesField: 'type',
    legend: {
      position: 'bottom',
      custom: true,
      items: [
        {
          name: type,
          marker: {
            // 是否为方块
            symbol: 'circle',
            style: {
              // 填充颜色，注意要与线条颜色对应。
              fill: 'rgba(255, 72, 70, 1)',
            },
          },
        },
      ],
    },
    // padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    color: 'rgba(255, 72, 70, .6)',
    smooth: true,
    point: {
      size: 4,
      shape: 'custom-point',
      style: {
        fill: 'rgba(255, 72, 70, 1)',
        background: 'rgba(255, 72, 70, 1)',
        // lineWidth: 2,
      },
    },
    tooltip: {
      customContent: (title: string, item: any) => {
        const data = item?.[0]?.data || {};
        return (
          <div className="tooltip-box" key={title}>
            <div className="data-item-title">{data.Date}</div>
            <div className="data-value">
              {type}：{data.scales}
            </div>
          </div>
        );
      },
    },
    yAxis: {
      title: {
        text: type,
      },
    },
    xAxis: {
      label: {
        autoRotate: true,
        autoHide: false,
        autoEllipsis: false,
      },
      tickCount: data.length,
      legend: true,
      tickLine: null,
    },
    shape: 'circle',
    state: {
      shape: 'circle',
      // 设置 active 激活状态的样式
      // active: {
      //   shape:'circle',
      //   animate: { duration: 100, easing: 'easeLinear' },
      //   style: {
      //     lineWidth: 2,
      //     stroke: '#000',
      //   },
      // },
    },
  };
  return config;
};
const data = [
  {
    Date: '04-13',
    scales: 94,
  },
  {
    Date: '04-14',
    scales: 82,
  },
  {
    Date: '04-15',
    scales: 146,
  },
  {
    Date: '04-16',
    scales: 255,
  },
  {
    Date: '04-17',
    scales: 430,
  },
  {
    Date: '04-18',
    scales: 558,
  },
  {
    Date: '04-19',
    scales: 1047,
  },
  {
    Date: '04-20',
    scales: 945,
  },
  {
    Date: '04-21',
    scales: 1157,
  },
  {
    Date: '04-22',
    scales: 1397,
  },
  {
    Date: '04-23',
    scales: 1338,
  },
  {
    Date: '04-24',
    scales: 882,
  },
  {
    Date: '04-25',
    scales: 681,
  },
  {
    Date: '04-26',
    scales: 660,
  },
  {
    Date: '04-27',
    scales: 593,
  },
  {
    Date: '04-28',
    scales: 1380,
  },
  {
    Date: '04-29',
    scales: 771,
  },
  {
    Date: '04-30',
    scales: 2344,
  },
  {
    Date: '05-01',
    scales: 1196,
  },
  {
    Date: '05-02',
    scales: 196,
  },
  {
    Date: '05-03',
    scales: 119,
  },
  {
    Date: '05-04',
    scales: 23,
  },
  {
    Date: '05-05',
    scales: 25,
  },
  {
    Date: '05-06',
    scales: 32,
  },
  {
    Date: '05-07',
    scales: 42,
  },
  {
    Date: '05-08',
    scales: 86,
  },
  {
    Date: '05-09',
    scales: 51,
  },
  {
    Date: '05-10',
    scales: 78,
  },
  {
    Date: '05-11',
    scales: 31,
  },
  {
    Date: '05-12',
    scales: 52,
  },
];
export default () => (
  <BrokenLine
    config={getConfig({
      data,
      type: '支持率',
    })}
  />
);
```

基于 antdV 组件二次开发

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
