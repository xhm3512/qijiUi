import React, { useState, useEffect, useMemo } from 'react';
import { Row, Col, Spin, Tooltip } from 'antd';
import moment from 'moment';
import QuiStatistic from '../../statistic';
import QuiButton from '../../button';
import BrokenLine from '../../brokenLine';
import { data1, data2, data3, cardTitle, btnParams, currentDay } from './tool';
import Date from './Date';
import Icons from '../../Icons';

const { ArrowCustom, ToolTipCustom } = Icons;
import './index.less';
export default () => {
  const dateFormat = 'YYYY-MM-DD';
  const initStartDate = moment(moment().subtract(30, 'days'), dateFormat);
  const initEndDate = moment(moment().subtract(1, 'days'), dateFormat);
  const [data, setData] = useState<any>([]); //当前显示数据
  const [active, setActive] = useState('discovery'); //当前选择tab
  const [loading, setLoading] = useState(false); //当前选择tab
  const [initDate, setInitDate] = useState([initStartDate, initEndDate]); //日历范围选择初始值
  const [stat, setStat] = useState([]); //卡片数据展示
  const [queryDays, setQueryDays] = useState<7 | 30 | -1>(30); //近30或者7天选择
  const dataCurrent = {
    discovery: data1,
    played: data2,
    finished_ratio: data3,
  };
  // 点击卡片获得数据
  const onClick = (type: string) => {
    setLoading(true);
    setActive(type);
    setTimeout(() => {
      getData(dataCurrent[type]);
      getStatData(dataCurrent[type]);
      setLoading(false);
    }, 500);
  };
  // 获得图表数据
  const getData = res => {
    const { detail } = res?.data;
    detail.forEach(item => {
      item.type = cardTitle[active].title;
    });
    if (detail?.length > 0) setData(detail);
  };
  // 获得卡片数据
  const getStatData = res => {
    const { stat } = res?.data;
    const tempStat = [];
    Object.keys(stat).forEach(type => {
      const item = stat[type];
      tempStat.push({
        ...item,
        type,
        title: cardTitle[type].title,
      });
    });
    setStat(tempStat);
  };
  // 获得数据，初始化渲染
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getData(data1);
      getStatData(data1);
      setLoading(false);
    }, 500);
  }, []);
  // 点击按钮选择查询范围
  const onChangeClick = (day: 30 | 7) => {
    setQueryDays(day);
    const initlatelyDate = moment(moment().subtract(day, 'days'), dateFormat);
    setInitDate([initlatelyDate, initEndDate]);
  };

  const NewBrokenLine = useMemo(
    () => <BrokenLine data={data} type={cardTitle[active].title} />,
    [JSON.stringify(data), active],
  );

  // 修改日期选择范围，重新获得数据
  const onChangeDate = val => {
    console.log(32, val);

    setQueryDays(-1);
  };
  return (
    <div title="专辑收听数据分析">
      <QuiStatistic active={true} onClick={onClick} currentActive={1}>
        {stat.map((item: any, i: number) => (
          <div
            key={item.type}
            className={
              active === item.type
                ? 'statistic-item-box-active'
                : 'statistic-item-box'
            }
          >
            <Tooltip
              className="title"
              title={cardTitle[item.type].tip}
              placement="right"
            >
              <Row justify="center" align="middle">
                {item.title}&nbsp;
                <ToolTipCustom
                  active={`${active === item.type ? true : false}`}
                />
              </Row>
            </Tooltip>
            <Row className="data-info" justify="space-between" align="middle">
              <Col>昨日</Col>
              <Col>
                {item.day_1 != 0 && (
                  <ArrowCustom
                    rotate={190}
                    spin={true}
                    className={currentDay(item.day_1)}
                  />
                )}
                &nbsp;&nbsp;
                {item.day_1}
              </Col>
            </Row>
            <Row className="data-info" justify="space-between" align="middle">
              <Col>较前一日</Col>
              <Col>
                {item.day_2 != 0 && (
                  <ArrowCustom
                    rotate={190}
                    spin={true}
                    className={currentDay(item.day_2)}
                  />
                )}
                &nbsp;&nbsp;
                {item.day_2}
              </Col>
            </Row>
            <Row className="data-info" justify="space-between" align="middle">
              <Col>{item.type === 'discovery' ? '近30日' : '总计'}</Col>
              <Col>
                {item.total != 0 && (
                  <ArrowCustom
                    rotate={190}
                    spin={true}
                    className={currentDay(item.total)}
                  />
                )}
                &nbsp;&nbsp;
                {item.total}
              </Col>
            </Row>
          </div>
        ))}
      </QuiStatistic>
      {/* 可视化数据 */}
      <div className="data-info-box">
        {loading && (
          <Row className="loading" justify="center" align="middle">
            <Spin />
          </Row>
        )}
        <Row justify="space-between">
          <Col>{cardTitle[active].title}</Col>
          <Col>
            <Date
              key={JSON.stringify(initDate)}
              initDate={initDate}
              onChangeDate={onChangeDate}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <QuiButton
              {...btnParams[queryDays === 7 ? 'active' : 'normal']}
              hover={true}
              onClick={() => onChangeClick(7)}
            >
              近7天
            </QuiButton>
            &nbsp;&nbsp;
            <QuiButton
              {...btnParams[queryDays === 30 ? 'active' : 'normal']}
              hover={true}
              onClick={() => onChangeClick(30)}
            >
              近30天
            </QuiButton>
          </Col>
        </Row>
        <div className="broken-line-box">{NewBrokenLine}</div>
      </div>
    </div>
  );
};
