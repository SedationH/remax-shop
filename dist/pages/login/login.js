require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ "./src/pages/login/login.jsx":
/*!***********************************!*\
  !*** ./src/pages/login/login.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/user */ "./src/utils/user.js");
/* harmony import */ var _global_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global_data */ "./src/global_data.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}






function _Login() {
  var wxLogin = function wxLogin(res) {
    var userInfo = _objectSpread(_objectSpread({}, res.detail.userInfo), {}, {
      avatar: res.detail.userInfo.avatarUrl,
      nickname: res.detail.userInfo.nickName
    });

    delete userInfo.nickName;
    delete userInfo.avatarUrl;
    Object(_utils_user__WEBPACK_IMPORTED_MODULE_3__["checkLogin"])().catch(function () {
      Object(_utils_user__WEBPACK_IMPORTED_MODULE_3__["loginByWexin"])(userInfo).then(function () {
        Object(_global_data__WEBPACK_IMPORTED_MODULE_4__["set"])('hasLogin', true);
        Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateBack"])({
          delta: 1
        });
        console.log('登录成功');
      }).catch(function () {
        Object(_global_data__WEBPACK_IMPORTED_MODULE_4__["set"])('hasLogin', false);
        console.log('登录失败');
      });
    });
  };

  var handleSearch = function handleSearch() {
    console.log('search');
    console.log(Object(_global_data__WEBPACK_IMPORTED_MODULE_4__["get"])('hasLogin'));
    console.log(Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["getStorageSync"])(''));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    "open-type": "getUserInfo",
    onGetUserInfo: wxLogin
  }, "\u5FAE\u4FE1\u767B\u9646"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: handleSearch
  }, "Search"));
}

_Login.displayName = "Page[pages/login/login]";
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_Login, "pages/login/login")));

/***/ }),

/***/ 6:
/*!*****************************************!*\
  !*** multi ./src/pages/login/login.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sedationh/workspace/remax-shop/src/pages/login/login.jsx */"./src/pages/login/login.jsx");


/***/ })

},[[6,"runtime","remax-vendors"]]]);