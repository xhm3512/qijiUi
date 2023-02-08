import { tuple } from './type';
const InputStatuses = tuple('warning', 'error', '');
export type InputStatus = typeof InputStatuses[number];