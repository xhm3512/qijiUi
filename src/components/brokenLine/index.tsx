import React, { useState, useEffect, FC } from 'react';
// import { Line } from '@ant-design/plots';
import { Line } from '@ant-design/charts';
import './style/index.less';
interface PropsState {
  data: Array<{ Date: string; scales: string }>;
  type?: string;
}
const QuiLine: FC<PropsState> = ({ data, type = '' }) => {
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
            symbol: 'square',
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
      customContent: (title, item) => {
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
  return <Line {...config} />;
};
export default QuiLine;
