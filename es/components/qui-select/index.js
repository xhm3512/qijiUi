import { Option, OptGroup } from 'rc-select';
import InternalSelect from './InternalSelect';
import { SECRET_COMBOBOX_MODE_DO_NOT_USE } from './config';
var QuiSelect = InternalSelect;
QuiSelect.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
QuiSelect.Option = Option;
QuiSelect.OptGroup = OptGroup;
export default QuiSelect;