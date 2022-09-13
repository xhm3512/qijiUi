import React, { ComponentType, SVGProps } from 'react';
import Icon from '@ant-design/icons';
import HomeSvg from './HomeSvg';
import WorksManagerSvg from './WorksManagerSvg';
import DataSvg from './DataSvg';
import SalarySvg from './SalarySvg';
import UserSvg from './UserSvg';
import NewsSvg from './NewsSvg';
import ToolTipCustom from './ToolTip';
import SwitchSvg from './Switch';
import ArrowSvg from './Arrow';
import EditorSvg from './Editor2';
import PreviewSvg from './Preview';
import PreviewHiddenSvg from './PreviewHidden';
import DeleteSvg from './Delete';
import SoundSvg from './Sound';
import BottomSvg from './Bottom';
import './style/index.less'
export interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
  className?: string;
  style?: React.CSSProperties;
}
const CustomIcon = (
  Component: ComponentType<CustomIconComponentProps | SVGProps<SVGSVGElement>>,
) => (props: any) => {
  return <Icon component={Component} {...props}></Icon>;
};

const HomeCustom = CustomIcon(HomeSvg);
const WorksManagerCustom = CustomIcon(WorksManagerSvg);
const DataCustom = CustomIcon(DataSvg);
const SalaryCustom = CustomIcon(SalarySvg);
const UserCustom = CustomIcon(UserSvg);
const NewsCustom = CustomIcon(NewsSvg);
const ArrowCustom = CustomIcon(ArrowSvg);
const SwitchCustom = CustomIcon(SwitchSvg);
const EditorCustom = CustomIcon(EditorSvg);
const PreviewCustom = CustomIcon(PreviewSvg);
const PreviewHiddenCustom = CustomIcon(PreviewHiddenSvg);
const DeleteCustom = CustomIcon(DeleteSvg);
const SoundCustom = CustomIcon(SoundSvg);
const BottomCustom = CustomIcon(BottomSvg);

// const ToolTipCustom = CustomIcon(ToolTipDiv);

export default {
  HomeCustom,
  WorksManagerCustom,
  DataCustom,
  SalaryCustom,
  UserCustom,
  NewsCustom,
  ArrowCustom,
  ToolTipCustom,
  SwitchCustom,
  EditorCustom,
  PreviewCustom,
  PreviewHiddenCustom,
  DeleteCustom,
  SoundCustom,
  BottomCustom,
};
