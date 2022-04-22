import React, { ComponentType, SVGProps } from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import HomeSvg from './HomeSvg';
import WorksManagerSvg from './WorksManagerSvg';
import DataSvg from './DataSvg';
import SalarySvg from './SalarySvg';
import UserSvg from './UserSvg';
import NewsSvg from './NewsSvg';

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

export default {
  HomeCustom,
  WorksManagerCustom,
  DataCustom,
  SalaryCustom,
  UserCustom,
  NewsCustom,
};
