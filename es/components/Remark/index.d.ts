import './style/index.less';
interface PropsRoot {
  text: string;
  manSpamWords?: {
    high?: Array<string>;
    middle?: Array<string>;
    low?: Array<string>;
    risk?: Array<string>;
    line?: Array<string>;
  };
  machineWords?: {
    high?: Array<string>;
    middle?: Array<string>;
    low?: Array<string>;
    risk?: Array<string>;
    line?: Array<string>;
  };
  onSubmitHtml?: Function;
  manSpamHtml?: string;
}
declare const RemarkText: (props: PropsRoot) => JSX.Element;
export default RemarkText;
