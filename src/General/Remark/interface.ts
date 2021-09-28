interface PropsRoot {
  text: string,
  spamWords?: {
    'high'?: Array<string>,
    'middle'?: Array<string>,
    'low'?: Array<string>,
    'risk'?: Array<string>,
    'line'?: Array<string>,
  },
  onChange?: Function
}
export type {
  PropsRoot
}
