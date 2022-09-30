import Upload from './Upload';
import Dragger from './Dragger';
import UploadList from './UploadList';
import ListItem from './UploadList/ListItem';
import ListItemDelete from './UploadList/ListItemDelete';

export { UploadProps} from './interface';
export { DraggerProps } from './Dragger';

Upload.Dragger = Dragger;
Upload.UploadList = UploadList;
Upload.ListItem = ListItem;
Upload.ListItemDelete = ListItemDelete;

export default Upload;
