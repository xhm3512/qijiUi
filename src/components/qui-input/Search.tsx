import React from 'react';
import classNames from 'classnames';
import { InputProps as RcInputProps } from 'rc-input';
import { composeRef } from 'rc-util/lib/ref';
import QuiImgIcons from '@/components/qui-img-icons'
import Input, { InputRef } from './Input';
const { CloseInput, SearchInput } = QuiImgIcons;
import './style/index.less'
export interface PropsSearchState extends RcInputProps {
  loading?: boolean;
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => void;
}
const Search = React.forwardRef<InputRef, PropsSearchState>((props, ref) => {
  const {
    prefixCls = 'qui-input',
    disabled,
    allowClear,
    loading,
    onSearch: customOnSearch,
    onChange: customOnChange,
    ...elseProps
  } = props;
  const onSearch = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => {
    if (customOnSearch) {
      customOnSearch(inputRef.current?.input?.value!, e);
    }
  };
  const CloseInputWrap = () => {
    return <div className={`${prefixCls}-search-close-icon`}>
      <CloseInput />
    </div >
  }
  const inputRef = React.useRef<InputRef>(null);
  const SearchInputWrap = () => {
    const loadingClass = classNames(`${prefixCls}-search-icon`, {
      [`${prefixCls}-search-loading-icon`]: loading
    })
    return <div className={loadingClass} onClick={onSearch}>
      <SearchInput />
    </div >
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target && e.type === 'click' && customOnSearch) {
      customOnSearch((e as React.ChangeEvent<HTMLInputElement>).target.value, e);
    }
    if (customOnChange) {
      customOnChange(e);
    }
  };
  return <Input
    ref={composeRef<InputRef>(inputRef, ref)}
    allowClear={allowClear ? (disabled ? false : { clearIcon: <CloseInputWrap /> }) : allowClear}
    onPressEnter={onSearch}
    onChange={onChange}
    prefixCls={prefixCls}
    disabled={disabled}
    addonAfter={<SearchInputWrap />}
    affixWrapperClassName={`${prefixCls}-wrapper`}
    {...elseProps}
  />;
})


export default Search