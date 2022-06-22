import React, { FC, CSSProperties } from 'react';
import classNames from 'classnames';
import {IconImgProps} from './_utils/interface'
const SearchInput: FC<IconImgProps> = ({
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
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKvSURBVHgB7VddbtpAEP5mnaRV1IccgZ6gcIImF4BYKqQmD4ETlJwAc4JyA+gD0EAlQy6Q5AShJyi9AU9VpeCd7rqC2sbYC23USs0nWYKdGe83s/OzBv53kIlSp+MdPX8h3oH5GEw5ZZULjAlzZp6y5Akxxo5jz7AlUgkMBl4OFnWU2jGMwF343NqGiNgk6I+8Bu2Je/PNNajGlrjvf/QaxhZJi4PRpAmGi98BwXXKpVaW2loEtOdJmzNwxyQvsS9fOpUS6ceCLACyrsQzrBu4JpGIRECfuQ47M45WCirRpE+t6ttiO+1F/dF1Q4CbYVtFek6+LKTlRCQCLIQb31ywPMnaXKNaLra1rrZZ2UO9a8/qpNmtCATeEy7CQu15pWJPYQitK0HRc1elq8sYWQR4D6cx2czE8zh0JFTobsNrB4doZBIgplJUJDMzeBMY/iSyibBeI5MAUT6y/QOMQx8HLTCOLDDnkEUgnHwa5+f2zgQSsj6HLAJ/C78iAP4aFgRzYEf0hl7kOHU/QBYBIvElYkRrVWEOH/nYymdkEZDSvwsLyLJK2BHCEs3IgpTjjbrLH4cHiNa8aiDbTLUlglkSSzp9V0AWAdu25/EGogq42et5eRhiqM5eIOa94K7xLMDCr8d7Oe2LG5NIaM8liZv4LMEDpzY0Wn/RdYOY3yfozqSvuqPEdNkjOqpSnqlkJaG7aPLFRQjUzt6UPsCUgMbgauIqSRN/CGkkEhuRc1ZymegyfBymSLKREt2rT5MLmBLQ0FONF7Kg+sHG8MUR3JoWq1uSEQmja7nuisG4ZnEqCK+Wifaze9JMldnt92+yXa/bK+8HQ6+m/Fu7jCiCdrVqj7cisCsSSahSd8rFk+XfRx1GTsXuxo9DfchEnH70aahJMEs7yA/1qEtqDU/4l/AD5VUjOxk0GY8AAAAASUVORK5CYII="
    />
  );
};

export default SearchInput;
