import React, { useState, FC } from 'react';
import { Row, Col } from 'antd';
import ImgIcons from '../imgIcons';
import QuiTabs from '../tabs';
import QuiStatistic from '../statistic';
import QuiDatePicker from '../datePicker';
import QuiButton from '../button';
import BrokenLine from '../brokenLine';
const { MoDalClose } = ImgIcons;
import './ddd.less';
export default ({ onDialogClose }: any) => {
  const [active, setActive] = useState(1);
  const onClick = (index: number) => {
    setActive(index);
  };
  const list = [
    {
      title: '曝光量',
      yesterday: '123',
      comparedDay: '2323',
      last30: '2323',
      id: '121',
    },
    {
      title: '播放量',
      yesterday: '123',
      comparedDay: '2323',
      last30: '2323',
      id: '121',
    },
    {
      title: '完播率',
      yesterday: '123',
      comparedDay: '2323',
      last30: '2323',
      id: '121',
    },
  ];
  return (
    <div className="box">
      <Row justify="space-between">
        <Col>
          <span className="breadcrumb-one">专辑数据</span>
          <span className="breadcrumb-two">/&nbsp;声音数据</span>
        </Col>
        <Col>
          <div onClick={onDialogClose}>
            <MoDalClose />
          </div>
        </Col>
      </Row>
      <Row className="album-info-box" justify="end">
        <Col className="album-info">
          <div className="info-main">有声书 165集 ｜ 嫡女娇妃</div>
          <div className="info-else">165集 ｜ 主播：颜值君讲故事</div>
        </Col>
        <Col className="cover">w2</Col>
      </Row>
      {/* 卡片 */}
      <QuiTabs>
        <div title="专辑收听数据分析">
          <QuiStatistic active={true} onClick={onClick} currentActive={active}>
            {list.map((item: any, i: number) => (
              <div
                key={i}
                className={
                  active === i + 1
                    ? 'statistic-item-box-active'
                    : 'statistic-item-box'
                }
              >
                <div className="title">{item.title}</div>
                <Row
                  className="data-info"
                  justify="space-between"
                  align="middle"
                >
                  <Col>昨日</Col>
                  <Col>{item.yesterday}</Col>
                </Row>
                <Row
                  className="data-info"
                  justify="space-between"
                  align="middle"
                >
                  <Col>较前一日</Col>
                  <Col>{item.comparedDay}</Col>
                </Row>
                <Row
                  className="data-info"
                  justify="space-between"
                  align="middle"
                >
                  <Col>近30日</Col>
                  <Col>{item.last30}</Col>
                </Row>
              </div>
            ))}
          </QuiStatistic>
          {/* 可视化数据 */}
          <div className="data-info-box">
            <Row justify="space-between">
              <Col>{list[active - 1].title}</Col>
              <Col>
                <QuiDatePicker
                  bordered={false}
                  // disabled={true}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <QuiButton type="outline" size="small">
                  text
                </QuiButton>
                &nbsp;&nbsp;
                <QuiButton type="secondary" size="small" disabled>
                  text
                </QuiButton>
              </Col>
            </Row>
            <div className="broken-line-box">
              <BrokenLine />
            </div>
          </div>
        </div>
        <div title="声音质量分析">we2311</div>
      </QuiTabs>
    </div>
  );
};
