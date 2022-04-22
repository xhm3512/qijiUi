import React, { useState, useEffect, FC } from 'react';
// import { Line } from '@ant-design/plots';
import { Line } from '@ant-design/charts';
import './style/index.less';
const QuiLine: FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
    )
      .then(response => response.json())
      .then(json => {
        const temp = json.slice(0, 30);
        console.log(111, temp);

        temp.forEach(item => {
          item.type = '增加数';
        });
        setData(json.slice(0, 30));
      })
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    seriesField: 'type',
    legend: {
      position: 'bottom',
      custom: true,
      items: [
        {
          name: '增加数',
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
            <div className="data-value">{data.type}</div>
          </div>
        );
      },
    },
    yAxis: {
      title: {
        text: ' 增加数',
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
