import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import ImgIcons from '../imgIcons';
import QuiTabs from '../tabs';
import { data1 } from './ListeningData/tool';
const { MoDalClose } = ImgIcons;
import ListeningData from './ListeningData';
import './ddd.less';
export default ({ onDialogClose, onCloseClick }: any) => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    const currenTInfo = data1?.data?.albumInfo;
    if (currenTInfo) setInfo(currenTInfo);
  }, []);
  return (
    <div className="box">
      <Row justify="space-between">
        <Col>
          <span className="breadcrumb-one">专辑数据</span>
          <span className="breadcrumb-two">/&nbsp;声音数据</span>
        </Col>
        <Col>
          <div onClick={onCloseClick}>
            <MoDalClose />
          </div>
        </Col>
      </Row>
      <Row className="album-info-box" justify="end">
        <Col className="album-info">
          <div className="info-main"> {info?.albumName}</div>
          <div className="info-else">
            {info?.totalTrackCount || 0} 集｜ 主播：{info?.anchorName}
          </div>
        </Col>
        <Col className="cover">
          <img className="cover-img" src={info?.coverPath} />
        </Col>
      </Row>
      {/* 卡片 */}
      <QuiTabs>
        <ListeningData />
        <div title="声音质量分析">we2311</div>
      </QuiTabs>
    </div>
  );
};
