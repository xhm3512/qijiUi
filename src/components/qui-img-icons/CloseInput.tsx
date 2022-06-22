import React, { FC, CSSProperties } from 'react';
import classNames from 'classnames';
import {IconImgProps} from './_utils/interface'
const CloseInput: FC<IconImgProps> = ({
  className,
  style = undefined,
  width = '1em',
  height = '1em',
}) => {
  const prefixCls = 'qiji-oni-img-close';
  const classes = classNames(prefixCls, className);
  return (
    <img
      className={classes}
      style={{ ...style, width, height }}
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN5SURBVHgBzVfdThNBFP5m2iW0iHAjgfBXUEF+hOKFXEgCPoH0TrwhPIG8gfAG8ATgBZJwU3wC4ULiT+RPrAoJ1KDhigQktFXojHMGtrLb3Xb5qfFLCLszp/N9c86Zs3MYPGJiIlpeVIx+7mO9EghzxkJSopzmGMOekDLOgGWRlvO/U5gdGorseVmX5TOYno6GBMOwz8cHTUJvkJNIy9GBgUgcFxFAOw5c488U6TAuASYxlkyIUTePOAqgXcPHX6nHEK4GcaTFQydvcPvAzEw0fMXk0GupNaem1No2WDxQgJ3bkeWJjACKeXEJXyogeUZE6lB0mTmRCQElnBt5bXWV/vP7/cgHsmkM1Wp7F4QCQc2loT1w6votJ+u2ltu42VCnn/f3D/D67SKOj4/hRt7Xcx/BYEC/f9nYxPrGlrOMtGigUGgPSM5H4IKqyorMc1lZKR5033P0BI3RnElOqKtx9QKottB/Ho1Gy1UlG3QzTCaSlncS0d7alGVH5DR3Fru77sWQcT5IeccTKfQjB94trmL/54FljHYW7mjNvIfvtmaR02/WYuuu66rYlxeVoN+vlPQhB46OjrGg4t7b041goNgiQkN9GOpqq7LIF94s4sglV0xwsF7OOTqRB1qEWjCRTFnGSYSdnGzef/iYl/xUe5iSMAQPSCSTjiLs5Cc2SXgDC/HzfOFMEU67++slr+QnecBxTlCBMRyOoWH4UVNdifOC02XCq3HzrUY0NzW4zt9pakRjfS28QuXAHnkg7sWYyqudnEJhD0d7W1OuMmyXEOdCiJV8ZrSgvfgQMcXcKSe6Ols9iWAcy1wyzOUyqqy4oRe0g4jpvOuC8ym74JDg66WlyAkh53nQwGyuPHCK+dJqzFIdt3/sYGklZrGhpOzqaEEupA4xyyORiLrRiuduRoZhZJFvf9/JsiMRa59tnmA57rxcTtKdQB9DlsaYmx3tjAoMxXkttuFIbmJzaxtf1efXTM7l1Zi7gCM5qrnN9xczL8fUy1P8A0iB8SePH518js3BgCFG4PFIXhLxX0nNBYsAygW6MBZYhL6Unu0RLKWYrkg+iAgKI0Kvbe8N/r/GhECGxYboUrV6HJcEJRxdw916RE/NqfTzEdXjDcIjqLClVW3h6nhfuDm146RxQb9kvE+JCSuS+rPtuXr+JplYVnNzVOG8tud/AFlrktaBHHJvAAAAAElFTkSuQmCC"
    />
  );
};

export default CloseInput;
