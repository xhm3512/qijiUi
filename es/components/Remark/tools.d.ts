declare const clearSelection: () => void;
declare const getMouseLOcal: (
  _e: any,
) => {
  x: any;
  y: any;
};
/**
 *
 * @param {*} obj  当前操作dom
 * @param {*} attr  当前后去属性
 * @returns
 */
declare function getStyle(obj: any, attr: any): any;
/**
 *  // 过滤数据，活得人审数据
 * @param {*} dom :获取到的所有标签
 * @returns
 */
declare const filterDomFunc: (dom: any) => never[];
declare function selectDetail(): any;
/**
 * // 是否包含特殊字符,有特殊字符的敏感词就不会展示高亮
 * @param {*} i  当前操作的标注类型
 * @param {*} string  当前需要匹配的字符串
 * @returns
 */
declare const isContainSpecial: (i: string, string: string | RegExp) => boolean;
export {
  clearSelection,
  getMouseLOcal,
  filterDomFunc,
  getStyle,
  selectDetail,
  isContainSpecial,
};
