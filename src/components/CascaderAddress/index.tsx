import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Cascader, version } from 'antd';
import 'antd/dist/antd.css';
// import "antd/es/cascader/style/index.css"

import provinces from 'china-division/dist/provinces.json';
import cities from 'china-division/dist/cities.json';
import areas from 'china-division/dist/areas.json';
// import {  cities, areas } from 'china-division'
console.log(provinces, cities, areas);
const Foo: FC<any> = () => {
  areas.forEach(area => {
    const matchCity = cities.filter(city => city.code === area.cityCode)[0];
    if (matchCity) {
      matchCity.children = matchCity.children || [];
      matchCity.children.push({
        label: area.name,
        value: area.code,
      });
    }
  });

  cities.forEach(city => {
    const matchProvince = provinces.filter(
      province => province.code === city.provinceCode,
    )[0];
    if (matchProvince) {
      matchProvince.children = matchProvince.children || [];
      matchProvince.children.push({
        label: city.name,
        value: city.code,
        children: city.children,
      });
    }
  });

  const options = provinces.map(province => ({
    label: province.name,
    value: province.code,
    children: province.children,
  }));
  return (
    <div style={{ margin: 24 }}>
      <p style={{ marginBottom: 24 }}>
        Current antd version: {version} <br />
        You can change antd version on the left panel (Dependencies section).
      </p>
      <Cascader
        options={options}
        showSearch
        placeholder="请选择地址"
        style={{ width: 400 }}
      />
    </div>
  );
};
export default Foo;