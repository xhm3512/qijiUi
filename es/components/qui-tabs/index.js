import "antd/es/tabs/style";
import _Tabs from "antd/es/tabs";
import React from 'react';
var TabPane = _Tabs.TabPane;
import "./style/index.css";

var tabs = function tabs(_ref) {
  var children = _ref.children;

  var callback = function callback() {};

  return /*#__PURE__*/React.createElement(_Tabs, {
    defaultActiveKey: "0",
    onChange: callback,
    tabBarGutter: 42,
    tabBarStyle: {// color:'red'
    }
  }, children.map(function (item, i) {
    return /*#__PURE__*/React.createElement(TabPane, {
      tab: item.props.title,
      key: i
    }, item);
  }));
};

export default tabs;