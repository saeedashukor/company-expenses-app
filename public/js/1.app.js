(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/client/components/User/DefaultLayout.tsx":
/*!******************************************************!*\
  !*** ./src/client/components/User/DefaultLayout.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





// sidebar nav config
var DefaultLayout = /** @class */ (function (_super) {
    __extends(DefaultLayout, _super);
    function DefaultLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultLayout.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "app" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppHeader"], { fixed: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: this.loading() },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultHeader, { onLogout: function (e) { return _this.signOut(e); } }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "app-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebar"], { fixed: true, display: "lg" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarHeader"], null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarForm"], null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarNav2"], __assign({ navConfig: navigation }, this.props, { router: react_router_dom__WEBPACK_IMPORTED_MODULE_1__ })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarFooter"], null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarMinimizer"], null)),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", { className: "main" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumb2"], { appRoutes: routes, router: react_router_dom__WEBPACK_IMPORTED_MODULE_1__ }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], { fluid: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: this.loading() },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                                routes.map(function (route, idx) {
                                    return route.component ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { key: idx, path: route.path, exact: route.exact, name: route.name, render: function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(route.component, __assign({}, props))); } })) : (null);
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { from: "/", to: "/home" }))))))));
    };
    return DefaultLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvVXNlci9EZWZhdWx0TGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21EO0FBQ1E7QUFDaEI7QUFDSjtBQUMySjtBQUNsTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRDQUFLLHVCQUF1QixtQkFBbUI7QUFDL0QsWUFBWSw0Q0FBSyxlQUFlLHVEQUFTLEdBQUcsY0FBYztBQUMxRCxnQkFBZ0IsNENBQUssZUFBZSw4Q0FBUSxHQUFHLDJCQUEyQjtBQUMxRSxvQkFBb0IsNENBQUssK0JBQStCLHlCQUF5Qix5QkFBeUIsRUFBRSxFQUFFO0FBQzlHLFlBQVksNENBQUssdUJBQXVCLHdCQUF3QjtBQUNoRSxnQkFBZ0IsNENBQUssZUFBZSx3REFBVSxHQUFHLDZCQUE2QjtBQUM5RSxvQkFBb0IsNENBQUssZUFBZSw4REFBZ0I7QUFDeEQsb0JBQW9CLDRDQUFLLGVBQWUsNERBQWM7QUFDdEQsb0JBQW9CLDRDQUFLLGVBQWUsNERBQWEsWUFBWSx3QkFBd0IsZUFBZSxTQUFTLDZDQUFNLEVBQUU7QUFDekgsb0JBQW9CLDRDQUFLLGVBQWUsOERBQWdCO0FBQ3hELG9CQUFvQiw0Q0FBSyxlQUFlLGlFQUFtQjtBQUMzRCxnQkFBZ0IsNENBQUssd0JBQXdCLG9CQUFvQjtBQUNqRSxvQkFBb0IsNENBQUssZUFBZSw0REFBYSxHQUFHLDRCQUE0Qiw2Q0FBTSxFQUFFO0FBQzVGLG9CQUFvQiw0Q0FBSyxlQUFlLG9EQUFTLEdBQUcsY0FBYztBQUNsRSx3QkFBd0IsNENBQUssZUFBZSw4Q0FBUSxHQUFHLDJCQUEyQjtBQUNsRiw0QkFBNEIsNENBQUssZUFBZSx1REFBTTtBQUN0RDtBQUNBLDhEQUE4RCw0Q0FBSyxlQUFlLHNEQUFLLEdBQUcsNkZBQTZGLFNBQVMsNENBQUssMkNBQTJDLFdBQVcsRUFBRSxFQUFFO0FBQy9QLGlDQUFpQztBQUNqQyxnQ0FBZ0MsNENBQUssZUFBZSx5REFBUSxHQUFHLHlCQUF5QjtBQUN4RjtBQUNBO0FBQ0EsQ0FBQyxDQUFDLCtDQUFTO0FBQ0ksNEVBQWEsRUFBQyIsImZpbGUiOiIxLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVkaXJlY3QsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAqIGFzIHJvdXRlciBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgQXBwSGVhZGVyLCBBcHBTaWRlYmFyLCBBcHBTaWRlYmFyRm9vdGVyLCBBcHBTaWRlYmFyRm9ybSwgQXBwU2lkZWJhckhlYWRlciwgQXBwU2lkZWJhck1pbmltaXplciwgQXBwQnJlYWRjcnVtYjIgYXMgQXBwQnJlYWRjcnVtYiwgQXBwU2lkZWJhck5hdjIgYXMgQXBwU2lkZWJhck5hdiwgfSBmcm9tICdAY29yZXVpL3JlYWN0Jztcbi8vIHNpZGViYXIgbmF2IGNvbmZpZ1xudmFyIERlZmF1bHRMYXlvdXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERlZmF1bHRMYXlvdXQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGVmYXVsdExheW91dCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBEZWZhdWx0TGF5b3V0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJhcHBcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBcHBIZWFkZXIsIHsgZml4ZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN1c3BlbnNlLCB7IGZhbGxiYWNrOiB0aGlzLmxvYWRpbmcoKSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERlZmF1bHRIZWFkZXIsIHsgb25Mb2dvdXQ6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5zaWduT3V0KGUpOyB9IH0pKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImFwcC1ib2R5XCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcFNpZGViYXIsIHsgZml4ZWQ6IHRydWUsIGRpc3BsYXk6IFwibGdcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcFNpZGViYXJIZWFkZXIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcFNpZGViYXJGb3JtLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBcHBTaWRlYmFyTmF2LCBfX2Fzc2lnbih7IG5hdkNvbmZpZzogbmF2aWdhdGlvbiB9LCB0aGlzLnByb3BzLCB7IHJvdXRlcjogcm91dGVyIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBcHBTaWRlYmFyRm9vdGVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBcHBTaWRlYmFyTWluaW1pemVyLCBudWxsKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcIm1haW5cIiwgeyBjbGFzc05hbWU6IFwibWFpblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwQnJlYWRjcnVtYiwgeyBhcHBSb3V0ZXM6IHJvdXRlcywgcm91dGVyOiByb3V0ZXIgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7IGZsdWlkOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN1c3BlbnNlLCB7IGZhbGxiYWNrOiB0aGlzLmxvYWRpbmcoKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpdGNoLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXMubWFwKGZ1bmN0aW9uIChyb3V0ZSwgaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGUuY29tcG9uZW50ID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsga2V5OiBpZHgsIHBhdGg6IHJvdXRlLnBhdGgsIGV4YWN0OiByb3V0ZS5leGFjdCwgbmFtZTogcm91dGUubmFtZSwgcmVuZGVyOiBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KHJvdXRlLmNvbXBvbmVudCwgX19hc3NpZ24oe30sIHByb3BzKSkpOyB9IH0pKSA6IChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVkaXJlY3QsIHsgZnJvbTogXCIvXCIsIHRvOiBcIi9ob21lXCIgfSkpKSkpKSkpO1xuICAgIH07XG4gICAgcmV0dXJuIERlZmF1bHRMYXlvdXQ7XG59KENvbXBvbmVudCkpO1xuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=