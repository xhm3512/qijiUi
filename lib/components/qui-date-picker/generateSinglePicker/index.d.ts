import { PickerBaseProps as RCPickerBaseProps, PickerDateProps as RCPickerDateProps, PickerTimeProps as RCPickerTimeProps } from 'rc-picker/lib/Picker';
import { GenerateConfig } from 'rc-picker/lib/generate/index';
type InjectDefaultProps<Props> = Omit<Props, 'locale' | 'generateConfig' | 'hideHeader' | 'components'> & {
    locale?: any;
    size?: any;
    placement?: any;
    bordered?: boolean;
    status?: any;
};
export type PickerBaseProps<DateType> = InjectDefaultProps<RCPickerBaseProps<DateType>>;
export type PickerDateProps<DateType> = InjectDefaultProps<RCPickerDateProps<DateType>>;
export type PickerTimeProps<DateType> = InjectDefaultProps<RCPickerTimeProps<DateType>>;
export type PickerProps<DateType> = PickerBaseProps<DateType> | PickerDateProps<DateType> | PickerTimeProps<DateType>;
declare function generatePicker<DateType>(generateConfig: GenerateConfig<DateType>): any;
export default generatePicker;
