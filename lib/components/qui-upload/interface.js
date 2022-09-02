"use strict";

var _type = require("../_util/type");

// import { ProgressProps } from '../progress';
var ProgressTypes = (0, _type.tuple)('line', 'circle', 'dashboard');
var ProgressStatuses = (0, _type.tuple)('normal', 'exception', 'active', 'success');