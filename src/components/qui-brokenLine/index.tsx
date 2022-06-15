import React, { useState, useEffect, FC } from 'react';
// import { Line } from '@ant-design/plots';
import { Line } from '@ant-design/charts';
import './style/index.less';
interface PropsState {
  config: any;
}
const QuiLine: FC<PropsState> = ({ config }) => {
  return <Line {...config} />;
};
export default QuiLine;
