import * as React from 'react';
import { createContext } from 'react';
import RcUpload, { UploadProps as RcUploadProps } from 'rc-upload';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import Dragger from './Dragger';
import { file2Obj, getFileItem, removeFileItem, updateFileList } from './utils';
type DD = RcUploadProps & { defaultFileList: any, fileList: any, onRemove: any }
type UploadFile = any;
type RcFile = any;
export const UploadListContent = createContext<any>([])
const InternalUpload: React.ForwardRefRenderFunction<unknown, DD> = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    defaultFileList,
    fileList,
    className,
    children,
    onDrop,
    type,
    onRemove,
    onChange,
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('upload', customizePrefixCls);

  const [mergedFileList, setMergedFileList] = useMergedState(defaultFileList || [], {
    value: fileList,
    postState: list => list ?? [],
  });


  const onBatchStart: RcUploadProps['onBatchStart'] = batchFileInfoList => {
    const filteredFileInfoList = batchFileInfoList.filter(info => !(info.file as any));

    // Nothing to do since no file need upload
    if (!filteredFileInfoList.length) {
      return;
    }

    const objectFileList = filteredFileInfoList.map(info => file2Obj(info.file as RcFile));

    // Concat new files with prev files
    let newFileList = [...mergedFileList];

    objectFileList.forEach(fileObj => {
      // Replace file if exist
      newFileList = updateFileList(fileObj, newFileList);
    });

    objectFileList.forEach((fileObj, index) => {
      // Repeat trigger `onChange` event for compatible
      let triggerFileObj: UploadFile = fileObj;

      if (!filteredFileInfoList[index].parsedFile) {
        // `beforeUpload` return false
        const { originFileObj } = fileObj;
        let clone;

        try {
          clone = new File([originFileObj], originFileObj.name, {
            type: originFileObj.type,
          }) as any as UploadFile;
        } catch (e) {
          clone = new Blob([originFileObj], {
            type: originFileObj.type,
          }) as any as UploadFile;
          clone.name = originFileObj.name;
          clone.lastModifiedDate = new Date();
          clone.lastModified = new Date().getTime();
        }

        clone.uid = fileObj.uid;
        triggerFileObj = clone;
      } else {
        // Inject `uploading` status
        fileObj.status = 'uploading';
      }

      onInternalChange(triggerFileObj, newFileList);
    });
  }
  const onSuccess = (response: any, file: RcFile, xhr: any) => {
    console.log('onSuccess', file);

    try {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
    } catch (e) {
      /* do nothing */
    }

    // removed
    // if (!getFileItem(file, mergedFileList)) { //TODO:
    //   return;
    // }

    const targetItem = file2Obj(file);
    targetItem.status = 'done';
    targetItem.percent = 100;
    targetItem.response = response;
    targetItem.xhr = xhr;

    const nextFileList = updateFileList(targetItem, mergedFileList);

    onInternalChange(targetItem, nextFileList);
  };
  const onProgress = (e: { percent: number }, file: RcFile) => {
    // removed
    if (!getFileItem(file, mergedFileList)) { //TODO:
      return;
    }

    const targetItem = file2Obj(file);
    targetItem.status = 'uploading';
    targetItem.percent = e.percent;

    const nextFileList = updateFileList(targetItem, mergedFileList);

    onInternalChange(targetItem, nextFileList, e);
  };

  const onError = (error: Error, response: any, file: RcFile) => {
    console.log(33, error);

    // removed
    // if (!getFileItem(file, mergedFileList)) { //TODO:
    //   return;
    // }

    const targetItem = file2Obj(file);
    targetItem.error = error;
    targetItem.response = response;
    targetItem.status = 'error';

    const nextFileList = updateFileList(targetItem, mergedFileList);

    onInternalChange(targetItem, nextFileList);
  };
  const handleRemove = (file: UploadFile) => {
    let currentFile: UploadFile;
    Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(ret => {
      // Prevent removing file
      if (ret === false) {
        return;
      }

      const removedFileList = removeFileItem(file, mergedFileList);

      if (removedFileList) {
        currentFile = { ...file, status: 'removed' };
        mergedFileList?.forEach(item => {
          const matchKey = currentFile.uid !== undefined ? 'uid' : 'name';
          if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
            item.status = 'removed';
          }
        });
        upload.current?.abort(currentFile);

        onInternalChange(currentFile, removedFileList);
      }
    });
  };
  const onInternalChange = (
    file: any,
    changedFileList: any,
    event?: { percent: number },
  ) => {
    let cloneList = [...changedFileList];

    setMergedFileList(cloneList);

    const changeInfo: any = {
      file: file as any,
      fileList: cloneList,
    };

    if (event) {
      changeInfo.event = event;
    }
    onChange?.(changeInfo);
  }
  const rcUploadProps = {
    ...(props as RcUploadProps),
    onProgress,
    onBatchStart,
    prefixCls,
    onChange,
    onError,
    onSuccess,
  };
  const upload = React.useRef<any>();
  const onFileDrop = (e) => {
    if (e.type === 'drop') {
      onDrop?.(e);
    }
  }
  let HHH:any = ''
  
console.log(3456,HHH);

  if (type === 'drag') {
    return (
      <span className={className}>
        <div
          onDrop={onFileDrop}
          onDragOver={onFileDrop}
          onDragLeave={onFileDrop}
        >
          <UploadListContent.Provider value={{ list: mergedFileList, handleRemove }}>
            <RcUpload {...rcUploadProps} ref={upload} >
              {children}
            </RcUpload>
          </UploadListContent.Provider>
        </div>
      </span>
    );
  }

  return (
    <span className={className}>
      <UploadListContent.Provider value={{ list: mergedFileList, handleRemove }}>
        <RcUpload {...rcUploadProps} ref={upload} >
          {children}
        </RcUpload>
      </UploadListContent.Provider>
    </span>
  );
}

const ForwardUpload = React.forwardRef<unknown, RcUploadProps>(InternalUpload) as <T>(
  props: any & React.RefAttributes<any>,
) => React.ReactElement;

type InternalUploadType = typeof ForwardUpload;

interface UploadInterface extends InternalUploadType {
  defaultProps?: Partial<RcUploadProps>;
  displayName?: string;
  Dragger: typeof Dragger;
  LIST_IGNORE: string;
  UploadList: any
}

const Upload = ForwardUpload as UploadInterface;

Upload.Dragger = Dragger;

// Upload.LIST_IGNORE = LIST_IGNORE;

Upload.displayName = 'Upload';

Upload.defaultProps = {
  // type: 'select' as UploadType,
  multiple: false,
  action: '',
  data: {},
  accept: '',
  // listType: 'text' as UploadListType, // or picture
  className: '',
  disabled: false,
};

export default Upload;