"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumb = void 0;

var _react = _interopRequireDefault(require("react"));

var S = _interopRequireWildcard(require("./styles"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Breadcrumb = props => {
  var _props$links;

  const linksSize = ((_props$links = props.links) === null || _props$links === void 0 ? void 0 : _props$links.length) - 1;
  return /*#__PURE__*/_react.default.createElement(S.Wrapper, null, props.links && props.links.map((link, index) => index === linksSize ? /*#__PURE__*/_react.default.createElement("span", {
    key: index
  }, " ", link) : /*#__PURE__*/_react.default.createElement("span", {
    key: index
  }, " ", link, " /")));
};

exports.Breadcrumb = Breadcrumb;
Breadcrumb.propTypes = {
  links: _propTypes.default.oneOf(["History", "Create", "Settings"])
};