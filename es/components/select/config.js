export var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};
var SelectPlacements = tuple('bottomLeft', 'bottomRight', 'topLeft', 'topRight');
var InputStatuses = tuple('warning', 'error', '');
export var SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';