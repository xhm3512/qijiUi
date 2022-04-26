import classNames from 'classnames';
const cardTitle = {
  discovery: {
    title: '曝光量',
    tip:
      '曝光量：单位时间内，专辑从平台个人化分发中获得的曝光次数总和。不包括外部及开放平台光量，不包括喜马拉雅站内固定运营位等渠道或位置的曝光量数据。专辑标题、标签和简介的优化，可提升曝光量。',
  },
  played: {
    title: '播放量',
    tip:
      '播放量：此处统计专辑内声音被播放的次数，同一用户播放多次，算多次；若声音被下架或删除，会减去相应播放；统计播放来源包括：App、Web/H5、开放平台、微信小程序/Podcast等其他来源；注：数据中心播放与专辑条/声音条显示的播放数据有差异（前者每日更新前一日数据，后者为实时数据；前者包含开放平台，后者不包含）',
  },
  finished_ratio: {
    title: '完播率',
    tip: '完播率: 所选时间段内的，本专辑声音的总完播次数/总播放次数*100%。',
  },
};
const btnParams = {
  normal: {
    type: 'secondary',
    size: 'small',
    hover: true,
  },
  active: {
    type: 'outline',
    size: 'small',
  },
};
/**
 * 箭头样式设置
 * @param day 当前渲染数据
 * @returns
 */
const currentDay = day => {
  const isDayUp = day > 0;
  return classNames('arrow-icon', {
    'arrow-icon-rotate': !isDayUp,
    'arrow-icon-red': isDayUp,
    'arrow-icon-green': !isDayUp,
  });
};
const data1 = {
  code: 200,
  data: {
    albumInfo: {
      albumid: '1278134',
      played: 0,
      subscribed: 0,
      anchorName: '听友790585',
      coverPath:
        'http://192.168.60.48:8080/storages/7fa4-audiotest/8A/5D/CKwaPRoF8j47AFAAAAAAYbsD.jpg',
      albumName: '隔山打虎-修改',
      type: 19,
      qrCode: 'iting://open?msg_type=13&album_id=1278134',
      iting: 'iting://open?msg_type=13&album_id=1278134',
      totalTrackCount: 3,
    },
    stat: {
      discovery: {
        day_1: -10,
        day_2: 30,
        total: 60,
        day_1_ratio: 0,
        day_1_ratio_desc: '0.0%',
      },
      played: {
        day_1: 30,
        day_2: 110,
        total: 0,
        day_1_ratio: 0,
        day_1_ratio_desc: '0.0%',
        finished: 0,
      },
      finished_ratio: {
        day_1: '0%',
        day_1_value: 0,
        day_2: '0%',
        day_2_value: 0,
        total: '0.0%',
        total_value: 0,
        day_1_ratio: 0,
        day_1_ratio_desc: '0.0%',
      },
    },
    detail: [
      {
        Date: '2022-03-21',
        scales: 10,
      },
      {
        Date: '2022-03-22',
        scales: 0,
      },
      {
        Date: '2022-03-23',
        scales: 20,
      },
      {
        Date: '2022-03-24',
        scales: 0,
      },
      {
        Date: '2022-03-25',
        scales: 50,
      },
      {
        Date: '2022-03-26',
        scales: 2,
      },
      {
        Date: '2022-03-27',
        scales: 0,
      },
      {
        Date: '2022-03-28',
        scales: 0,
      },
      {
        Date: '2022-03-29',
        scales: 0,
      },
      {
        Date: '2022-03-30',
        scales: 0,
      },
      {
        Date: '2022-03-31',
        scales: 0,
      },
      {
        Date: '2022-04-01',
        scales: 0,
      },
      {
        Date: '2022-04-02',
        scales: 0,
      },
      {
        Date: '2022-04-03',
        scales: 0,
      },
      {
        Date: '2022-04-04',
        scales: 0,
      },
      {
        Date: '2022-04-05',
        scales: 0,
      },
      {
        Date: '2022-04-06',
        scales: 0,
      },
      {
        Date: '2022-04-07',
        scales: 0,
      },
      {
        Date: '2022-04-08',
        scales: 0,
      },
      {
        Date: '2022-04-09',
        scales: 0,
      },
      {
        Date: '2022-04-10',
        scales: 0,
      },
      {
        Date: '2022-04-11',
        scales: 0,
      },
      {
        Date: '2022-04-12',
        scales: 0,
      },
      {
        Date: '2022-04-13',
        scales: 0,
      },
      {
        Date: '2022-04-14',
        scales: 110,
      },
      {
        Date: '2022-04-15',
        scales: 0,
      },
      {
        Date: '2022-04-16',
        scales: 0,
      },
      {
        Date: '2022-04-17',
        scales: 0,
      },
      {
        Date: '2022-04-18',
        scales: 0,
      },
      {
        Date: '2022-04-19',
        scales: 0,
      },
    ],
    params: {
      album_id: '1278134',
      book_id: '2000231',
      start_date: '2022-03-21',
      end_date: '2022-04-19',
      stat_type: 'finished_ratio',
      day_type: 30,
    },
  },
  msg: '',
  timestampName: 1650457135,
};
const data2 = {
  code: 200,
  data: {
    albumInfo: {
      albumid: '1278134',
      played: 0,
      subscribed: 0,
      anchorName: '听友790585',
      coverPath:
        'http://192.168.60.48:8080/storages/7fa4-audiotest/8A/5D/CKwaPRoF8j47AFAAAAAAYbsD.jpg',
      albumName: '隔山打虎-修改',
      type: 19,
      qrCode: 'iting://open?msg_type=13&album_id=1278134',
      iting: 'iting://open?msg_type=13&album_id=1278134',
      totalTrackCount: 3,
    },
    stat: {
      discovery: {
        day_1: 0,
        day_2: 0,
        total: 0,
        day_1_ratio: 0,
        day_1_ratio_desc: '0.0%',
      },
      played: {
        day_1: 0,
        day_2: 0,
        total: 0,
        day_1_ratio: 0,
        day_1_ratio_desc: '0.0%',
        finished: 0,
      },
      finished_ratio: {
        day_1: '0%',
        day_1_value: 0,
        day_2: '0%',
        day_2_value: 0,
        total: '0.0%',
        total_value: 0,
        day_1_ratio: 0,
        day_1_ratio_desc: '0.0%',
      },
    },
    detail: [
      {
        Date: '2022-03-21',
        scales: 110,
      },
      {
        Date: '2022-03-22',
        scales: 0,
      },
      {
        Date: '2022-03-23',
        scales: 20,
      },
      {
        Date: '2022-03-24',
        scales: 0,
      },
      {
        Date: '2022-03-25',
        scales: 50,
      },
      {
        Date: '2022-03-26',
        scales: 2,
      },
      {
        Date: '2022-03-27',
        scales: 0,
      },
      {
        Date: '2022-03-28',
        scales: 0,
      },
      {
        Date: '2022-03-29',
        scales: 0,
      },
      {
        Date: '2022-03-30',
        scales: 0,
      },
      {
        Date: '2022-03-31',
        scales: 0,
      },
      {
        Date: '2022-04-01',
        scales: 0,
      },
      {
        Date: '2022-04-02',
        scales: 0,
      },
      {
        Date: '2022-04-03',
        scales: 0,
      },
      {
        Date: '2022-04-04',
        scales: 0,
      },
      {
        Date: '2022-04-05',
        scales: 0,
      },
      {
        Date: '2022-04-06',
        scales: 0,
      },
      {
        Date: '2022-04-07',
        scales: 0,
      },
      {
        Date: '2022-04-08',
        scales: 0,
      },
      {
        Date: '2022-04-09',
        scales: 0,
      },
      {
        Date: '2022-04-10',
        scales: 0,
      },
      {
        Date: '2022-04-11',
        scales: 0,
      },
      {
        Date: '2022-04-12',
        scales: 0,
      },
      {
        Date: '2022-04-13',
        scales: 0,
      },
      {
        Date: '2022-04-14',
        scales: 110,
      },
      {
        Date: '2022-04-15',
        scales: 0,
      },
      {
        Date: '2022-04-16',
        scales: 0,
      },
      {
        Date: '2022-04-17',
        scales: 0,
      },
      {
        Date: '2022-04-18',
        scales: 0,
      },
      {
        Date: '2022-04-19',
        scales: 0,
      },
    ],
    params: {
      album_id: '1278134',
      book_id: '2000231',
      start_date: '2022-03-21',
      end_date: '2022-04-19',
      stat_type: 'finished_ratio',
      day_type: 30,
    },
  },
  msg: '',
  timestampName: 1650457135,
};
const data3 = {
  code: 200,
  data: {
    albumInfo: {
      albumid: '1278134',
      played: 0,
      subscribed: 0,
      anchorName: '听友790585',
      coverPath:
        'http://192.168.60.48:8080/storages/7fa4-audiotest/8A/5D/CKwaPRoF8j47AFAAAAAAYbsD.jpg',
      albumName: '隔山打虎-修改',
      type: 19,
      qrCode: 'iting://open?msg_type=13&album_id=1278134',
      iting: 'iting://open?msg_type=13&album_id=1278134',
      totalTrackCount: 3,
    },
    stat: {
      discovery: {
        day_1: 0,
        day_2: 0,
        total: 0,
        day_1_ratio: 0,
        day_1_ratio_desc: '0.0%',
      },
      played: {
        day_1: 0,
        day_2: 0,
        total: 0,
        day_1_ratio: 0,
        day_1_ratio_desc: '0.0%',
        finished: 0,
      },
      finished_ratio: {
        day_1: '0%',
        day_1_value: 0,
        day_2: '0%',
        day_2_value: 0,
        total: '0.0%',
        total_value: 0,
        day_1_ratio: 0,
        day_1_ratio_desc: '0.0%',
      },
    },
    detail: [
      {
        Date: '2022-03-21',
        scales: 220,
      },
      {
        Date: '2022-03-22',
        scales: 330,
      },
      {
        Date: '2022-03-23',
        scales: 20,
      },
      {
        Date: '2022-03-24',
        scales: 0,
      },
      {
        Date: '2022-03-25',
        scales: 50,
      },
      {
        Date: '2022-03-26',
        scales: 2,
      },
      {
        Date: '2022-03-27',
        scales: 0,
      },
      {
        Date: '2022-03-28',
        scales: 0,
      },
      {
        Date: '2022-03-29',
        scales: 0,
      },
      {
        Date: '2022-03-30',
        scales: 0,
      },
      {
        Date: '2022-03-31',
        scales: 0,
      },
      {
        Date: '2022-04-01',
        scales: 0,
      },
      {
        Date: '2022-04-02',
        scales: 0,
      },
      {
        Date: '2022-04-03',
        scales: 0,
      },
      {
        Date: '2022-04-04',
        scales: 0,
      },
      {
        Date: '2022-04-05',
        scales: 0,
      },
      {
        Date: '2022-04-06',
        scales: 0,
      },
      {
        Date: '2022-04-07',
        scales: 0,
      },
      {
        Date: '2022-04-08',
        scales: 0,
      },
      {
        Date: '2022-04-09',
        scales: 0,
      },
      {
        Date: '2022-04-10',
        scales: 0,
      },
      {
        Date: '2022-04-11',
        scales: 0,
      },
      {
        Date: '2022-04-12',
        scales: 0,
      },
      {
        Date: '2022-04-13',
        scales: 0,
      },
      {
        Date: '2022-04-14',
        scales: 110,
      },
      {
        Date: '2022-04-15',
        scales: 0,
      },
      {
        Date: '2022-04-16',
        scales: 0,
      },
      {
        Date: '2022-04-17',
        scales: 0,
      },
      {
        Date: '2022-04-18',
        scales: 0,
      },
      {
        Date: '2022-04-19',
        scales: 0,
      },
    ],
    params: {
      album_id: '1278134',
      book_id: '2000231',
      start_date: '2022-03-21',
      end_date: '2022-04-19',
      stat_type: 'finished_ratio',
      day_type: 30,
    },
  },
  msg: '',
  timestampName: 1650457135,
};

export { data1, data2, data3, cardTitle, btnParams, currentDay };
