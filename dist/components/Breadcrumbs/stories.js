"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Menu/Breadcrumb",
  component: _index.Breadcrumb,
  argTypes: {
    links: {
      type: "array"
    }
  }
};
exports.default = _default;

const Default = args => /*#__PURE__*/_react.default.createElement(_index.Breadcrumb, args);

exports.Default = Default;
Default.args = {
  links: ['History', 'Create', 'Settings']
};