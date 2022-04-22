import React, { useState, useEffect } from 'react';
// import { Line } from '@ant-design/plots';
import { Line } from '@ant-design/charts';
const Page: React.FC = () => {
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
          item.type = 'dp';
        });
        setData(json.slice(0, 30));
      })
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  console.log(13, data);

  const config = {
    data,
    legend: true,
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
      customContent: (title, data) => {
        return (
          <div>
            <div>跳出率：90%</div>
            <div>内容：90%</div>
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
    // yAxis: {
    //   label: {
    //     formatter: function formatter(v) {
    //       return ''.concat((v / 1000000000).toFixed(1), ' B');
    //     },
    //   },
    // },
  };
  return <Line {...config} />;
};
export default Page;
