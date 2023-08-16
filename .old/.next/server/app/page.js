"use strict";
(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 7160:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 2336:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 7887:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 120:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 8231:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 982:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 9618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8423:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 7417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8159)), "C:\\Users\\pod_m\\OneDrive\\Documents\\Dev\\keithjaspercouk\\src\\app\\page.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4801)), "C:\\Users\\pod_m\\OneDrive\\Documents\\Dev\\keithjaspercouk\\src\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }
      ]
      }.children;
const pages = ["C:\\Users\\pod_m\\OneDrive\\Documents\\Dev\\keithjaspercouk\\src\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 8159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Home() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "flex flex-col items-center justify-between p-24",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30",
                        children: [
                            "Download CV\xa0",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                className: "font-mono font-bold",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/files/keith-jasper-cv.pdf",
                                    children: "here"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",
                        children: "KJ"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    version: "1.0",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "300.000000pt",
                    height: "47.000000pt",
                    viewBox: "0 0 300.000000 47.000000",
                    preserveAspectRatio: "xMidYMid meet",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("metadata", {
                            children: "KeithJasper Logo SVG"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            transform: "translate(0.000000,47.000000) scale(0.100000,-0.100000)",
                            fill: "#FFF",
                            stroke: "none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M950 280 l0 -190 25 0 25 0 0 108 c0 107 0 109 25 120 33 15 78 15   93 0 8 -8 12 -49 12 -120 l0 -108 26 0 26 0 -4 119 c-4 144 -13 161 -88 161   -25 0 -55 -7 -66 -15 -10 -8 -21 -15 -24 -15 -3 0 -4 29 -2 65 4 64 4 65 -22   65 l-26 0 0 -190z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M240 452 c-15 -3 -56 -39 -105 -92 l-80 -87 -3 89 c-3 85 -3 88 -27   88 -23 0 -23 -1 -18 -77 2 -43 9 -88 15 -100 8 -15 8 -26 1 -35 -13 -17 -25   -138 -14 -138 5 0 16 -3 25 -6 14 -5 16 4 16 58 0 52 4 68 20 83 11 10 21 16   23 14 2 -2 33 -38 69 -79 53 -60 73 -76 97 -78 17 -1 31 0 31 4 0 3 -38 48   -85 98 l-84 92 79 79 c73 73 92 97 73 94 -5 -1 -19 -4 -33 -7z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M620 430 c0 -22 4 -25 27 -24 22 0 27 6 27 24 0 18 -5 24 -27 24 -23   1 -27 -2 -27 -24z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M1450 432 c0 -21 4 -23 38 -20 l37 3 3 -127 c3 -152 -3 -164 -80   -155 -46 6 -48 5 -48 -18 0 -24 3 -25 59 -25 49 0 65 4 88 24 l28 24 3 159 3   158 -65 0 c-62 0 -66 -1 -66 -23z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M760 410 c0 -29 -4 -40 -15 -40 -8 0 -15 -9 -15 -20 0 -11 7 -20 15   -20 12 0 15 -18 15 -98 0 -90 2 -100 23 -120 17 -16 36 -22 70 -22 43 0 47 2   47 23 0 21 -4 24 -42 23 l-43 -1 -3 98 -3 97 46 0 c39 0 45 3 45 21 0 19 -5   21 -45 17 l-45 -3 0 42 c0 39 -2 43 -25 43 -22 0 -25 -4 -25 -40z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M362 354 c-33 -23 -52 -67 -52 -124 0 -94 46 -141 137 -139 75 2 98   11 101 42 4 31 3 32 -34 12 -34 -17 -87 -19 -116 -4 -16 9 -48 64 -48 84 0 3   47 5 103 5 l104 0 -7 47 c-10 65 -44 93 -113 93 -31 0 -62 -6 -75 -16z m133   -47 c29 -41 20 -47 -65 -47 -44 0 -80 4 -80 9 0 4 9 20 20 34 32 40 98 42 125   4z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M620 230 l0 -140 25 0 25 0 0 140 0 140 -25 0 -25 0 0 -140z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M1670 346 c0 -23 2 -24 65 -18 44 3 69 1 80 -8 29 -24 16 -37 -41   -44 -71 -8 -108 -27 -123 -64 -35 -85 60 -153 149 -107 27 14 30 14 30 0 0 -9   9 -15 25 -15 l25 0 0 106 c0 154 -14 173 -132 174 -76 0 -78 -1 -78 -24z m160   -145 c0 -48 -26 -71 -82 -71 -46 0 -67 28 -49 66 11 24 37 34 119 43 8 1 12   -13 12 -38z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M1966 339 c-31 -37 -33 -58 -6 -92 14 -18 34 -28 66 -33 58 -8 93   -36 78 -61 -15 -24 -85 -29 -126 -9 -39 20 -38 21 -38 -9 0 -32 31 -45 106   -45 48 0 60 4 85 29 49 49 30 111 -38 127 -16 3 -41 9 -57 13 -38 9 -54 34   -37 55 17 20 90 21 117 1 28 -21 34 -18 34 14 0 34 -17 41 -102 41 -51 0 -59   -3 -82 -31z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M2220 366 c-3 -2 -4 -86 -2 -185 l3 -181 26 0 c25 0 25 2 21 49 l-5   49 58 -5 c56 -6 60 -4 93 29 25 25 36 47 41 79 8 56 -8 122 -37 149 -27 25   -98 27 -134 4 -19 -13 -24 -14 -22 -3 3 13 -32 25 -42 15z m175 -67 c28 -54   11 -147 -30 -163 -26 -10 -83 -7 -90 5 -9 13 -9 154 -1 168 9 14 66 29 89 23   10 -2 24 -17 32 -33z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M2555 337 c-56 -56 -59 -150 -6 -209 23 -26 37 -32 82 -36 80 -6 123   8 127 41 4 30 -2 32 -38 12 -43 -25 -98 -19 -131 14 -16 16 -29 39 -29 50 0   20 5 21 100 21 l100 0 0 30 c0 38 -24 86 -49 100 -11 5 -43 10 -71 10 -46 0   -56 -4 -85 -33z m139 -23 c9 -8 16 -24 16 -35 0 -17 -8 -19 -75 -19 -82 0 -90   7 -53 47 26 27 88 32 112 7z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M2830 368 c0 -2 -1 -64 -1 -138 l-1 -135 23 0 c23 0 24 2 25 95 2 93   2 95 30 113 19 12 40 16 62 13 31 -5 33 -3 30 22 -3 24 -7 27 -41 26 -20 -1   -46 -9 -56 -18 -24 -22 -34 -20 -26 4 5 16 2 20 -19 20 -14 0 -26 -1 -26 -2z"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "/code",
                        className: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: `mb-3 text-2xl font-semibold`,
                                children: [
                                    "My Code",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
                                        children: "->"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `m-0 max-w-[30ch] text-sm opacity-50`,
                                children: "Browse a libary of my code (TODO)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "/projects",
                        className: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: `mb-3 text-2xl font-semibold`,
                                children: [
                                    "My Projects",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
                                        children: "->"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `m-0 max-w-[30ch] text-sm opacity-50`,
                                children: "Mostly a work in progress"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "/hosting",
                        className: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: `mb-3 text-2xl font-semibold`,
                                children: [
                                    "Hosting Info",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
                                        children: "->"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `m-0 max-w-[30ch] text-sm opacity-50`,
                                children: "What services run this abomination"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "/contact",
                        className: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: `mb-3 text-2xl font-semibold`,
                                children: [
                                    "Contact",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
                                        children: "->"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `m-0 max-w-[30ch] text-sm opacity-50`,
                                children: "How to get in contact with &quote;The One&quote;"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,756,598], () => (__webpack_exec__(7417)));
module.exports = __webpack_exports__;

})();