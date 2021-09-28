const clearSelection = () => {
  document.getSelection()?.empty();
};
// 获取鼠标在页面的位置
const getMouseLOcal = (_e:any) => {
  const e = _e || window.event;
  return {
    x: e.clientX,
    y: e.clientY
  };
};

/**
 *
 * @param {*} obj  当前操作dom
 * @param {*} attr  当前后去属性
 * @returns
 */
function getStyle(obj:any, attr:any) {
  if (obj.currentStyle) {
    // 兼容IE
    return obj.currentStyle[attr];
  }
  return getComputedStyle(obj, null)[attr];
}

/**
 *  // 过滤数据，活得人审数据
 * @param {*} dom :获取到的所有标签
 * @returns
 */
const filterDomFunc = (dom: any) =>
  [].slice.call(dom).filter((item:any) => {
    const dataCheck = item.getAttribute('data-check');
    const styleBack = item.getAttribute('style');
    const backColor = styleBack && getStyle(item, 'background-color');
    return item.nodeName !== 'P' && dataCheck !== '1' && (backColor || item.nodeName === 'STRIKE');
  });
// 兼容性处理
function selectDetail() {
  if (window.getSelection) {
    // 一般浏览器
    return window.getSelection();
  }
  const _docment:any=document
  if (_docment.selection) {
    // IE浏览器、Opera
    return _docment.selection.createRange();
  }
  return null;
}

/**
 * // 是否包含特殊字符
 * @param {*} i  当前操作的标注类型
 * @param {*} string  当前需要匹配的字符串
 * @returns
 */
const isContainSpecial = (i: string, string: string | RegExp) => {
  const colorAll = {
    high: 'rgb(217, 0, 27)',
    middle: 'rgb(245, 154, 35)',
    low: 'rgb(112, 182, 3)',
    risk: 'rgb(132, 0, 255)'
  };
  const color = colorAll[i];
  const regOne = `<font color="#ffffff" style=""><span style="background-color: ${color};"></span></font>`;
  const regTwo = `<span style="background-color: ${color};"><font color="#ffffff">.*<\\/font></span>`;
  const regThree = `<font color="#ffffff" style="background-color: ${color};"><font</font>|<span</span></font>`;
  const regFour = `<font style="background-color: ${color};" color="#ffffff"><font</font>|<span</span></font>`;
  const regFive = '<p></p>';
  const regSix = '<strike></strike>';
  if (
    regOne.match(string) ||
    regTwo.match(string) ||
    regThree.match(string) ||
    regFour.match(string) ||
    regFive.match(string) ||
    regSix.match(string)
  ) {
    return false;
  }
  return true;
};

/**
 * 替换选择的文本，不支持textarea和input
 * @param {string} text
 */
function boldSelection(text: string) {
  // @ts-ignore
  if (document.selection) {
    // 老IE
    // @ts-ignore
    const selecterIe = document.selection.createRange();
    selecterIe.select();
    selecterIe.pasteHTML(text); // 替换为HTML元素，替换完会失去选取，如果选择的是textarea里的内容这里会报错
  } else {
    // 非老IE
    let selecter;
    if (window.getSelection()) {
      selecter = window.getSelection();
    } else {
      selecter = document.getSelection();
    }
    selecter = document.getSelection();
    const rang =selecter &&  selecter.getRangeAt(0);
    // 先删除再插入达到替换的效果，
    if (!rang) return;
    rang.deleteContents(); // 删除选中内容
    rang.insertNode(document.createRange().createContextualFragment(text)); // 在选中内容的起始位置插入一个节点
    // rang.insertNode(text); // 在选中内容的起始位置插入一个节点
    // chrome中的bug，如果选中的是textarea中的内容，就会在textarea前面插入节点
  }
}
export {
  clearSelection,
  getMouseLOcal,
  filterDomFunc,
  getStyle,
  selectDetail,
  isContainSpecial,
  boldSelection
};
