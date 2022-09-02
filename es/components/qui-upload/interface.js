import { tuple } from '../_util/type'; // import { ProgressProps } from '../progress';

var ProgressTypes = tuple('line', 'circle', 'dashboard');
var ProgressStatuses = tuple('normal', 'exception', 'active', 'success');