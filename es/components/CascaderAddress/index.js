import React from 'react';
import { Cascader, version } from 'antd';
import 'antd/dist/antd.css'; // import "antd/es/cascader/style/index.css"

var provinces = require('china-division/dist/provinces.json');

var cities = require('china-division/dist/cities.json');

var areas = require('china-division/dist/areas.json'); // import {  cities, areas } from 'china-division'

var Foo = function Foo() {
  areas.forEach(function(area) {
    var matchCity = cities.filter(function(city) {
      return city.code === area.cityCode;
    })[0];

    if (matchCity) {
      matchCity.children = matchCity.children || [];
      matchCity.children.push({
        label: area.name,
        value: area.code,
      });
    }
  });
  cities.forEach(function(city) {
    var matchProvince = provinces.filter(function(province) {
      return province.code === city.provinceCode;
    })[0];

    if (matchProvince) {
      matchProvince.children = matchProvince.children || [];
      matchProvince.children.push({
        label: city.name,
        value: city.code,
        children: city.children,
      });
    }
  });
  var options = provinces.map(function(province) {
    return {
      label: province.name,
      value: province.code,
      children: province.children,
    };
  });
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        margin: 24,
      },
    },
    /*#__PURE__*/ React.createElement(
      'p',
      {
        style: {
          marginBottom: 24,
        },
      },
      'Current antd version: ',
      version,
      ' ',
      /*#__PURE__*/ React.createElement('br', null),
      'You can change antd version on the left panel (Dependencies section).',
    ),
    /*#__PURE__*/ React.createElement(Cascader, {
      options: options,
      showSearch: true,
      placeholder: '\u8BF7\u9009\u62E9\u5730\u5740',
      style: {
        width: 400,
      },
    }),
  );
};

export default Foo;
