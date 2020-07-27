require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _vant_weapp_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vant/weapp/lib/button */ "./node_modules/@vant/weapp/lib/button/index.js");





var _page = function _page() {
  var handleShopClick = function handleShopClick() {
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
      url: '/pages/shop/shop'
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_vant_weapp_lib_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onclick: handleShopClick
  }, "Go to Shop"));
};

_page.displayName = "Page[pages/index/index]";
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/index/index")));

/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** multi ./src/pages/index/index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sedationh/workspace/remax-shop/src/pages/index/index.jsx */"./src/pages/index/index.jsx");


/***/ })

},[[1,"runtime","remax-vendors"]]]);