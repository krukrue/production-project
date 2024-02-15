"use strict";
(self["webpackChunkadvanced_react"] = self["webpackChunkadvanced_react"] || []).push([["src_app_providers_router_ui_app-router_tsx"],{

/***/ "./src/app/providers/router/ui/app-router.tsx":
/*!****************************************************!*\
  !*** ./src/app/providers/router/ui/app-router.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/config */ "./src/shared/config/index.ts");



var AppRouter = function AppRouter() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, {
    children: Object.values(shared_config__WEBPACK_IMPORTED_MODULE_1__.routeConfig).map(function (_a) {
      var element = _a.element,
        path = _a.path;
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: path,
        element: element
      }, path);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRouter);

/***/ }),

/***/ "./src/pages/index.ts":
/*!****************************!*\
  !*** ./src/pages/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutPage: () => (/* binding */ AboutPage),
/* harmony export */   MainPage: () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var AboutPage = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_pages_about-page_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./about-page */ "./src/pages/about-page.tsx"));
});
var MainPage = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_pages_main-page_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./main-page */ "./src/pages/main-page.tsx"));
});

/***/ }),

/***/ "./src/shared/config/index.ts":
/*!************************************!*\
  !*** ./src/shared/config/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routeConfig: () => (/* reexport safe */ _route_config_route_config__WEBPACK_IMPORTED_MODULE_0__.routeConfig)
/* harmony export */ });
/* harmony import */ var _route_config_route_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-config/route-config */ "./src/shared/config/route-config/route-config.tsx");


/***/ }),

/***/ "./src/shared/config/route-config/route-config.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/config/route-config/route-config.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutes: () => (/* binding */ AppRoutes),
/* harmony export */   RouterPath: () => (/* binding */ RouterPath),
/* harmony export */   routeConfig: () => (/* binding */ routeConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pages */ "./src/pages/index.ts");
var _a, _b;


var AppRoutes;
(function (AppRoutes) {
  AppRoutes["MAIN"] = "main";
  AppRoutes["ABOUT"] = "about";
})(AppRoutes || (AppRoutes = {}));
var RouterPath = (_a = {}, _a[AppRoutes.MAIN] = '/', _a[AppRoutes.ABOUT] = '/about', _a);
var routeConfig = (_b = {}, _b[AppRoutes.MAIN] = {
  path: RouterPath.main,
  element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(pages__WEBPACK_IMPORTED_MODULE_1__.MainPage, {})
}, _b[AppRoutes.ABOUT] = {
  path: RouterPath.about,
  element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(pages__WEBPACK_IMPORTED_MODULE_1__.AboutPage, {})
}, _b);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wcm92aWRlcnNfcm91dGVyX3VpX2FwcC1yb3V0ZXJfdHN4LjNkMzdlMDg0YmI4NjVkNzUwYmQ5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDQztBQUNMO0FBQzVDLElBQUlLLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQWU7RUFDeEIsT0FBUUosc0RBQUksQ0FBQ0Msb0RBQU0sRUFBRTtJQUFFSSxRQUFRLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDSixzREFBVyxDQUFDLENBQUNLLEdBQUcsQ0FBQyxVQUFVQyxFQUFFLEVBQUU7TUFDdEUsSUFBSUMsT0FBTyxHQUFHRCxFQUFFLENBQUNDLE9BQU87UUFBRUMsSUFBSSxHQUFHRixFQUFFLENBQUNFLElBQUk7TUFDeEMsT0FBT1gsc0RBQUksQ0FBQ0UsbURBQUssRUFBRTtRQUFFUyxJQUFJLEVBQUVBLElBQUk7UUFBRUQsT0FBTyxFQUFFQTtNQUFRLENBQUMsRUFBRUMsSUFBSSxDQUFDO0lBQzlELENBQUM7RUFBRSxDQUFDLENBQUM7QUFDYixDQUFDO0FBQ0QsaUVBQWVQLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEU7QUFDbkIsSUFBSVMsU0FBUyxHQUFHRCxpREFBVSxDQUFDLFlBQVk7RUFBRSxPQUFPLHVLQUFzQjtBQUFFLENBQUMsQ0FBQztBQUMxRSxJQUFJRyxRQUFRLEdBQUdILGlEQUFVLENBQUMsWUFBWTtFQUFFLE9BQU8sb0tBQXFCO0FBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVGL0UsSUFBSUgsRUFBRSxFQUFFTyxFQUFFO0FBQ3NDO0FBQ0o7QUFDckMsSUFBSUMsU0FBUztBQUNwQixDQUFDLFVBQVVBLFNBQVMsRUFBRTtFQUNsQkEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU07RUFDMUJBLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPO0FBQ2hDLENBQUMsRUFBRUEsU0FBUyxLQUFLQSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFJQyxVQUFVLElBQUlULEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDNUJBLEVBQUUsQ0FBQ1EsU0FBUyxDQUFDRSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQ3hCVixFQUFFLENBQUNRLFNBQVMsQ0FBQ0csS0FBSyxDQUFDLEdBQUcsUUFBUSxFQUM5QlgsRUFBRSxDQUFDO0FBQ0EsSUFBSU4sV0FBVyxJQUFJYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQzdCQSxFQUFFLENBQUNDLFNBQVMsQ0FBQ0UsSUFBSSxDQUFDLEdBQUc7RUFDakJSLElBQUksRUFBRU8sVUFBVSxDQUFDRyxJQUFJO0VBQ3JCWCxPQUFPLEVBQUVWLHNEQUFJLENBQUNlLDJDQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzlCLENBQUMsRUFDREMsRUFBRSxDQUFDQyxTQUFTLENBQUNHLEtBQUssQ0FBQyxHQUFHO0VBQ2xCVCxJQUFJLEVBQUVPLFVBQVUsQ0FBQ0ksS0FBSztFQUN0QlosT0FBTyxFQUFFVixzREFBSSxDQUFDYSw0Q0FBUyxFQUFFLENBQUMsQ0FBQztBQUMvQixDQUFDLEVBQ0RHLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmFuY2VkLXJlYWN0Ly4vc3JjL2FwcC9wcm92aWRlcnMvcm91dGVyL3VpL2FwcC1yb3V0ZXIudHN4Iiwid2VicGFjazovL2FkdmFuY2VkLXJlYWN0Ly4vc3JjL3BhZ2VzL2luZGV4LnRzIiwid2VicGFjazovL2FkdmFuY2VkLXJlYWN0Ly4vc3JjL3NoYXJlZC9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYWR2YW5jZWQtcmVhY3QvLi9zcmMvc2hhcmVkL2NvbmZpZy9yb3V0ZS1jb25maWcvcm91dGUtY29uZmlnLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyB9IGZyb20gXCJzaGFyZWQvY29uZmlnXCI7XG52YXIgQXBwUm91dGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoX2pzeChSb3V0ZXMsIHsgY2hpbGRyZW46IE9iamVjdC52YWx1ZXMocm91dGVDb25maWcpLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX2EuZWxlbWVudCwgcGF0aCA9IF9hLnBhdGg7XG4gICAgICAgICAgICByZXR1cm4gX2pzeChSb3V0ZSwgeyBwYXRoOiBwYXRoLCBlbGVtZW50OiBlbGVtZW50IH0sIHBhdGgpO1xuICAgICAgICB9KSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwUm91dGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHZhciBBYm91dFBhZ2UgPSBSZWFjdC5sYXp5KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGltcG9ydCgnLi9hYm91dC1wYWdlJyk7IH0pO1xuZXhwb3J0IHZhciBNYWluUGFnZSA9IFJlYWN0LmxhenkoZnVuY3Rpb24gKCkgeyByZXR1cm4gaW1wb3J0KCcuL21haW4tcGFnZScpOyB9KTtcbiIsImV4cG9ydCB7IHJvdXRlQ29uZmlnIH0gZnJvbSBcIi4vcm91dGUtY29uZmlnL3JvdXRlLWNvbmZpZ1wiO1xuIiwidmFyIF9hLCBfYjtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBBYm91dFBhZ2UsIE1haW5QYWdlIH0gZnJvbSBcInBhZ2VzXCI7XG5leHBvcnQgdmFyIEFwcFJvdXRlcztcbihmdW5jdGlvbiAoQXBwUm91dGVzKSB7XG4gICAgQXBwUm91dGVzW1wiTUFJTlwiXSA9IFwibWFpblwiO1xuICAgIEFwcFJvdXRlc1tcIkFCT1VUXCJdID0gXCJhYm91dFwiO1xufSkoQXBwUm91dGVzIHx8IChBcHBSb3V0ZXMgPSB7fSkpO1xuZXhwb3J0IHZhciBSb3V0ZXJQYXRoID0gKF9hID0ge30sXG4gICAgX2FbQXBwUm91dGVzLk1BSU5dID0gJy8nLFxuICAgIF9hW0FwcFJvdXRlcy5BQk9VVF0gPSAnL2Fib3V0JyxcbiAgICBfYSk7XG5leHBvcnQgdmFyIHJvdXRlQ29uZmlnID0gKF9iID0ge30sXG4gICAgX2JbQXBwUm91dGVzLk1BSU5dID0ge1xuICAgICAgICBwYXRoOiBSb3V0ZXJQYXRoLm1haW4sXG4gICAgICAgIGVsZW1lbnQ6IF9qc3goTWFpblBhZ2UsIHt9KVxuICAgIH0sXG4gICAgX2JbQXBwUm91dGVzLkFCT1VUXSA9IHtcbiAgICAgICAgcGF0aDogUm91dGVyUGF0aC5hYm91dCxcbiAgICAgICAgZWxlbWVudDogX2pzeChBYm91dFBhZ2UsIHt9KVxuICAgIH0sXG4gICAgX2IpO1xuIl0sIm5hbWVzIjpbImpzeCIsIl9qc3giLCJSb3V0ZXMiLCJSb3V0ZSIsInJvdXRlQ29uZmlnIiwiQXBwUm91dGVyIiwiY2hpbGRyZW4iLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJfYSIsImVsZW1lbnQiLCJwYXRoIiwiUmVhY3QiLCJBYm91dFBhZ2UiLCJsYXp5IiwiTWFpblBhZ2UiLCJfYiIsIkFwcFJvdXRlcyIsIlJvdXRlclBhdGgiLCJNQUlOIiwiQUJPVVQiLCJtYWluIiwiYWJvdXQiXSwic291cmNlUm9vdCI6IiJ9