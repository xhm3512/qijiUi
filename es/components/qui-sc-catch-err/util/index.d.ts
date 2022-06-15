/// <reference types="react" />
export declare function isComponentClass<T>(Component: React.ComponentClass<T> | React.StatelessComponent<T>): Component is React.ComponentClass<T>;
export declare function isReactMemo(Component: React.MemoExoticComponent<React.ComponentType<any>> | React.FunctionComponent): Component is React.MemoExoticComponent<React.ComponentType<any>>;
declare const _default: {
    isComponentClass: typeof isComponentClass;
};
export default _default;
