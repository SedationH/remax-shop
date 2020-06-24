require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/user/user"],{

/***/ "./node_modules/@vant/weapp/lib/cell-group/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@vant/weapp/lib/cell-group/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index'));

/***/ }),

/***/ "./node_modules/@vant/weapp/lib/cell/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@vant/weapp/lib/cell/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index0'));

/***/ }),

/***/ "./node_modules/@vant/weapp/lib/grid-item/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vant/weapp/lib/grid-item/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index2'));

/***/ }),

/***/ "./node_modules/@vant/weapp/lib/grid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@vant/weapp/lib/grid/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('index1'));

/***/ }),

/***/ "./src/assets/images/defaultUserImag.png":
/*!***********************************************!*\
  !*** ./src/assets/images/defaultUserImag.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fc7e8c0d057f1244a0ab6d90025820b4.png");

/***/ }),

/***/ "./src/pages/user/user.css?modules":
/*!*****************************************!*\
  !*** ./src/pages/user/user.css?modules ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"person":"person___3nZtv","personImag":"personImag___374IV","personName":"personName___1cQbL"};

/***/ }),

/***/ "./src/pages/user/user.jsx":
/*!*********************************!*\
  !*** ./src/pages/user/user.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _vant_weapp_lib_cell_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vant/weapp/lib/cell-group */ "./node_modules/@vant/weapp/lib/cell-group/index.js");
/* harmony import */ var _vant_weapp_lib_cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vant/weapp/lib/cell */ "./node_modules/@vant/weapp/lib/cell/index.js");
/* harmony import */ var _vant_weapp_lib_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vant/weapp/lib/grid */ "./node_modules/@vant/weapp/lib/grid/index.js");
/* harmony import */ var _vant_weapp_lib_grid_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vant/weapp/lib/grid-item */ "./node_modules/@vant/weapp/lib/grid-item/index.js");
/* harmony import */ var _assets_images_defaultUserImag_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/images/defaultUserImag.png */ "./src/assets/images/defaultUserImag.png");
/* harmony import */ var _user_css_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.css?modules */ "./src/pages/user/user.css?modules");
/* harmony import */ var _user_css_modules__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_user_css_modules__WEBPACK_IMPORTED_MODULE_8__);










var _page = function _page() {
  var gridInfo = [{
    icon: 'cart-circle-o',
    title: '待支付',
    sortPara: 'pay'
  }, {
    icon: 'gift-o',
    title: '待收货',
    sortPara: 'delivery'
  }, {
    icon: 'smile-comment-o',
    title: '待评价',
    sortPara: 'comment'
  }, {
    icon: 'cash-back-record',
    title: '售后',
    sortPara: 'after'
  }];

  var handleGridItemClick = function handleGridItemClick(sortPara) {
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
      url: "/pages/orderDetails/orderDetails?sort=".concat(sortPara)
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vant_weapp_lib_cell_group__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vant_weapp_lib_cell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    center: true,
    "is-link": true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    slot: "title",
    className: _user_css_modules__WEBPACK_IMPORTED_MODULE_8___default.a.person
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _assets_images_defaultUserImag_png__WEBPACK_IMPORTED_MODULE_7__["default"],
    className: _user_css_modules__WEBPACK_IMPORTED_MODULE_8___default.a.personImag
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _user_css_modules__WEBPACK_IMPORTED_MODULE_8___default.a.personName
  }, "\u8BF7\u767B\u5F55")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vant_weapp_lib_cell_group__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vant_weapp_lib_cell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "\u6211\u7684\u8BA2\u5355",
    icon: "bag-o",
    value: "\u67E5\u770B\u5168\u90E8\u8BA2\u5355",
    "is-link": true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vant_weapp_lib_grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    clickable: true
  }, gridInfo.map(function (grid, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vant_weapp_lib_grid_item__WEBPACK_IMPORTED_MODULE_6__["default"], {
      text: grid.title,
      icon: grid.icon,
      key: index,
      square: true,
      badge: "99+",
      onclick: function onclick() {
        return handleGridItemClick(grid.sortPara);
      },
      __key: index
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vant_weapp_lib_cell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "\u6211\u7684\u5730\u5740\u548C\u7535\u8BDD",
    icon: "description",
    "is-link": true
  })));
};

_page.displayName = "Page[pages/user/user]";
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/user/user")));

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** multi ./src/pages/user/user.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sedationh/test/remax-shop/src/pages/user/user.jsx */"./src/pages/user/user.jsx");


/***/ })

},[[3,"runtime","remax-vendors"]]]);