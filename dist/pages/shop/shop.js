require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/shop/shop"],{

/***/ "./node_modules/@vant/weapp/lib/sidebar-item/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@vant/weapp/lib/sidebar-item/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index5'));

/***/ }),

/***/ "./node_modules/@vant/weapp/lib/sidebar/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@vant/weapp/lib/sidebar/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index4'));

/***/ }),

/***/ "./node_modules/@vant/weapp/lib/tab/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@vant/weapp/lib/tab/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index7'));

/***/ }),

/***/ "./node_modules/@vant/weapp/lib/tabs/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@vant/weapp/lib/tabs/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index6'));

/***/ }),

/***/ "./src/pages/shop/shop.css?modules":
/*!*****************************************!*\
  !*** ./src/pages/shop/shop.css?modules ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"shop":"shop___3VjjP","left":"left___1baQp","right":"right___eFD94"};

/***/ }),

/***/ "./src/pages/shop/shop.jsx":
/*!*********************************!*\
  !*** ./src/pages/shop/shop.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _vant_weapp_lib_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vant/weapp/lib/sidebar */ "./node_modules/@vant/weapp/lib/sidebar/index.js");
/* harmony import */ var _vant_weapp_lib_sidebar_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vant/weapp/lib/sidebar-item */ "./node_modules/@vant/weapp/lib/sidebar-item/index.js");
/* harmony import */ var _vant_weapp_lib_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vant/weapp/lib/tab */ "./node_modules/@vant/weapp/lib/tab/index.js");
/* harmony import */ var _vant_weapp_lib_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vant/weapp/lib/tabs */ "./node_modules/@vant/weapp/lib/tabs/index.js");
/* harmony import */ var _shop_css_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop.css?modules */ "./src/pages/shop/shop.css?modules");
/* harmony import */ var _shop_css_modules__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shop_css_modules__WEBPACK_IMPORTED_MODULE_7__);









var _page = function _page() {
  var sideBarList = ['标签1', '标签2', '标签2', '标签3', '标签4', '标签5', '标签6', '标签7', '标签8', '标签9', '标签10', '标签2aaaaaaaaaaa', '❤️', '标签2', '标签2'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _shop_css_modules__WEBPACK_IMPORTED_MODULE_7___default.a.shop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _shop_css_modules__WEBPACK_IMPORTED_MODULE_7___default.a.left
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_vant_weapp_lib_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], null, sideBarList.map(function (e) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_vant_weapp_lib_sidebar_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: e
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _shop_css_modules__WEBPACK_IMPORTED_MODULE_7___default.a.right,
    swipeable: true,
    ellipsis: false,
    sticky: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_vant_weapp_lib_tabs__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_vant_weapp_lib_tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "tab1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _shop_css_modules__WEBPACK_IMPORTED_MODULE_7___default.a.content
  }, "\u7F8E\u56FD\u653F\u5E9C26\u65E5\u5BA3\u5E03\uFF0C\u5C06\u5BF9\u53C2\u4E0E\u524A\u5F31\u9999\u6E2F\u81EA\u6CBB\u7684\u73B0\u4EFB\u53CA\u524D\u4EFB\u4E2D\u5171\u5B98\u5458\u5B9E\u65BD\u7B7E\u8BC1\u9650\u5236\uFF0C\u4F46\u58F0\u660E\u672A\u63D0\u53CA\u5177\u4F53\u4EBA\u540D\u3002\u4E2D\u56FD\u9A7B\u7F8E\u5927\u4F7F\u9986\u53D1\u8A00\u4EBA\u8B66\u544A\uFF0C\u4E2D\u65B9\u5C06\u5BF9\u7F8E\u56FD\u91C7\u53D6\u5FC5\u8981\u7684\u53CD\u5236\u63AA\u65BD\u3002 \u8BE5\u5236\u88C1\u58F0\u660E\u5BA3\u5E03\u540E\u4E24\u5929\u4E2D\u56FD\u5168\u56FD\u4EBA\u5927\u5E38\u59D4\u4F1A\u5C06\u518D\u6B21\u5F00\u4F1A\u5BA1\u8BAE\u5907\u53D7\u4E89\u8BAE\u7684\u9999\u6E2F\u300A\u56FD\u5B89\u6CD5\u300B\u3002\u4E3A\u671F\u4E09\u5929\u7684\u4F1A\u8BAE\u662F\u4E24\u5468\u5185\u4EBA\u5927\u5E38\u59D4\u7684\u7B2C\u4E8C\u6B21\u4F1A\u8BAE\uFF0C\u636E\u591A\u65B9\u9884\u6D4B\uFF0C\u4F1A\u8BAE\u671F\u95F4\u5C06\u5F88\u6709\u53EF\u80FD\u901A\u8FC7\u8FD9\u90E8\u6CD5\u5F8B\u5E76\u51B3\u5B9A\u5176\u7ACB\u523B\u751F\u6548\u3002 \u6839\u636E\u76EE\u524D\u5B98\u65B9\u516C\u5E03\u6CD5\u5F8B\u8349\u6848\u7684\u4E3B\u8981\u5185\u5BB9\uFF0C\u5317\u4EAC\u5C06\u5728\u9999\u6E2F\u8BBE\u7ACB\u7EF4\u62A4\u56FD\u5BB6\u5B89\u5168\u516C\u7F72\uFF0C\u7279\u522B\u884C\u653F\u533A\u653F\u5E9C\u9700\u8981\u8BBE\u7ACB\u7EF4\u62A4\u56FD\u5BB6\u5B89\u5168\u59D4\u5458\u4F1A\u3002 \u8FD9\u4E9B\u4E3E\u63AA\u5F15\u8D77\u5E7F\u6CDB\u62C5\u5FE7\uFF0C\u6709\u8BC4\u8BBA\u8BA4\u4E3A\u4E00\u65E6\u6E2F\u533A\u300A\u56FD\u5B89\u6CD5\u300B\u5B9E\u65BD\uFF0C\u9999\u6E2F\u7684\u201C\u4E00\u56FD\u4E24\u5236\u201D\u5C06\u4E0D\u590D\u5B58\u5728\uFF0C\u9999\u6E2F\u4F1A\u548C\u4E2D\u56FD\u4EFB\u4F55\u4E00\u4E2A\u57CE\u5E02\u65E0\u5F02\u3002 \u7279\u6717\u666E\uFF1A\u53D6\u6D88\u9999\u6E2F\u7279\u6B8A\u8D38\u6613\u5730\u4F4D\u3001\u5236\u88C1\u4E2D\u6E2F\u5B98\u5458\u3001\u9000\u51FA\u4E16\u536B\u7EC4\u7EC7 \u6E2F\u7248\u300A\u56FD\u5B89\u6CD5\u300B\u8349\u6848\uFF1A\u5317\u4EAC\u5C06\u8BBE\u9A7B\u6E2F\u56FD\u5B89\u516C\u7F72\uFF0C\u5BF9\u201C\u6781\u5C11\u6570\u201D\u6848\u4EF6\u884C\u4F7F\u7BA1\u8F96\u6743 \u9999\u6E2F\u300A\u56FD\u5B89\u6CD5\u300B\u8349\u6848\u7EC6\u8282\u5F15\u53D1\u7684\u4E94\u5927\u4E89\u8BAE \u4E3A\u4EC0\u4E48\u5236\u88C1 \u7F8E\u56FD\u56FD\u52A1\u537F\u84EC\u4F69\u5965\u5468\u4E94\uFF0826\u65E5\uFF09\u53D1\u8868\u58F0\u660E\u6307\uFF0C\u9488\u5BF9\u88AB\u8BA4\u4E3A\u635F\u5BB3\u9999\u6E2F\u9AD8\u5EA6\u81EA\u6CBB\u53CA\u9999\u6E2F\u4EBA\u6743\u3001\u57FA\u672C\u81EA\u7531\u7684\u73B0\u4EFB\u53CA\u524D\u4EFB\u4E2D\u56FD\u5171\u4EA7\u515A\u5B98\u5458\uFF0C\u7F8E\u56FD\u5C06\u5BF9\u4ED6\u4EEC\u53CA\u5176\u5BB6\u4EBA\u5B9E\u65BD\u7B7E\u8BC1\u9650\u5236\u3002 \u201C\u7279\u6717\u666E\u603B\u7EDF\u66FE\u627F\u8BFA\u60E9\u7F5A\u8981\u5BF9\u635F\u5BB3\u9999\u6E2F\u81EA\u7531\u8D1F\u8D23\u7684\u4E2D\u56FD\u5171\u4EA7\u515A\u5B98\u5458\u3002\u4ECA\u5929\uFF0C\u6211\u4EEC\u5BF9\u6B64\u4F5C\u51FA\u884C\u52A8\uFF0C\u201D\u84EC\u4F69\u5965\u5728\u58F0\u660E\u4E2D\u79F0\u3002 \u7136\u800C\uFF0C\u58F0\u660E\u672A\u63D0\u53CA\u4EFB\u4F55\u5177\u4F53\u4EBA\u540D\uFF0C\u4EE5\u53CA\u4ED6\u4EEC\u5C06\u9762\u4E34\u4F55\u79CD\u7F8E\u56FD\u7B7E\u8BC1\u9650\u5236\u3002 \u4E0A\u6708\uFF0C\u7F8E\u56FD\u8BA4\u5B9A\u9999\u6E2F\u4E0D\u518D\u4EAB\u6709\u8DB3\u591F\u81EA\u6CBB\uFF0C\u603B\u7EDF\u7279\u6717\u666E\u5BA3\u5E03\u9010\u6E10\u53D6\u6D88\u7F8E\u56FD\u7ED9\u4E88\u9999\u6E2F\u7684\u7279\u6B8A\u5F85\u9047\uFF0C\u6216\u5C06\u7EC8\u6B62\u9999\u6E2F\u8D38\u6613\u5173\u7A0E\u4F18\u60E0\u3001\u79D1\u6280\u51C6\u5165\u3001\u9999\u6E2F\u62A4\u7167\u6301\u6709\u8005\u8D74\u7F8E\u65C5\u884C\u514D\u7B7E\u8BC1\u7B49\u5F85\u9047\u3002 \u4F46\u7F8E\u65B9\u76EE\u524D\u4ECD\u672A\u5BA3\u5E03\u79FB\u9664\u9999\u6E2F\u7279\u6B8A\u5F85\u9047\u7684\u5177\u4F53\u4E3E\u63AA\u548C\u6D41\u7A0B\u3002 \u56FE\u7247\u7248\u6743AFP \u53EF\u80FD\u7684\u5236\u88C1\u6E05\u5355 \u7F8E\u56FD\u5F6D\u535A\u793E\u5F15\u8FF0\u7F8E\u56FD\u56FD\u52A1\u9662\u5B98\u5458\u79F0\uFF0C\u8FD9\u662F\u7F8E\u56FD\u5236\u88C1\u63AA\u65BD\u7684\u7B2C\u4E00\u6B65\uFF0C\u5982\u679C\u4E2D\u56FD\u7EE7\u7EED\u635F\u5BB3\u9999\u6E2F\uFF0C\u66F4\u591A\u5236\u88C1\u63AA\u65BD\u5C06\u9646\u7EED\u5230\u6765\u3002\u8BE5\u6D88\u606F\u51FA\u81EA\u5F6D\u535A\u793E\u7684\u8BC4\u8BBA\u4E13\u680F\uFF0C\u4F5C\u8005\u5F15\u8FF0\u4E00\u4F4D\u4E0D\u5177\u540D\u7684\u56FD\u52A1\u9662\u5B98\u5458\u79F0\uFF0C\u76EE\u524D\u53D7\u5F71\u54CD\u7684\u4E2D\u5171\u5B98\u5458\u662F\u4E2A\u4F4D\u6570\uFF0C\u5373\u4E0D\u591A\u4E8E10\u4EBA\u3002 \u7F8E\u56FD\u5171\u548C\u515A\u56FD\u4F1A\u8BAE\u5458\u66FE\u5728\u672C\u6708\u521D\u63D0\u51FA\u8FC7\u53EF\u80FD\u5236\u88C1\u7684\u4E2D\u5171\u5B98\u5458\u6E05\u5355\u3002\u6839\u636E\u7F8E\u56FD\u5171\u548C\u515A\u7814\u7A76\u59D4\u5458\u4F1A6\u670810\u65E5\u53D1\u8868\u7684\u56FD\u5BB6\u5B89\u5168\u6218\u7565\u62A5\u544A\uFF0C\u5EFA\u8BAE\u4F9D\u636E\u300A\u5168\u7403\u9A6C\u683C\u5C3C\u8328\u57FA\u4EBA\u6743\u6CD5\u6848\u300B\u91C7\u7528\u201C\u53F2\u4E0A\u6700\u4E25\u5389\u7684\u5236\u88C1\u63AA\u65BD\u201D\uFF0C\u5236\u88C1\u4FB5\u72AF\u9999\u6E2F\u3001\u65B0\u7586\u3001\u897F\u85CF\u4EBA\u6743\u7684\u4E2D\u5171\u9AD8\u5C42\u5B98\u5458\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_vant_weapp_lib_tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "tab2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _shop_css_modules__WEBPACK_IMPORTED_MODULE_7___default.a.content
  }, "2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_vant_weapp_lib_tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "tab3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _shop_css_modules__WEBPACK_IMPORTED_MODULE_7___default.a.content
  }, "3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_vant_weapp_lib_tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "tab3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _shop_css_modules__WEBPACK_IMPORTED_MODULE_7___default.a.content
  }, "3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_vant_weapp_lib_tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "tab3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _shop_css_modules__WEBPACK_IMPORTED_MODULE_7___default.a.content
  }, "3")))));
};

_page.displayName = "Page[pages/shop/shop]";
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/shop/shop")));

/***/ })

},[["./src/pages/shop/shop.jsx","runtime","remax-vendors"]]]);