exports.id = 130;
exports.ids = [130];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 8684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addBasePath = addBasePath;
var _addPathPrefix = __webpack_require__(1751);
var _normalizeTrailingSlash = __webpack_require__(2392);
const basePath =  false || "";
function addBasePath(path, required) {
    if (false) {}
    return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 2725:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addLocale = void 0;
var _normalizeTrailingSlash = __webpack_require__(2392);
const addLocale = (path, ...args)=>{
    if (false) {}
    return path;
};
exports.addLocale = addLocale;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 6742:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createAsyncLocalStorage = createAsyncLocalStorage;
class FakeAsyncLocalStorage {
    disable() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    exit() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    enterWith() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
}
function createAsyncLocalStorage() {
    if (globalThis.AsyncLocalStorage) {
        return new globalThis.AsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-local-storage.js.map


/***/ }),

/***/ 8254:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bailoutToClientRendering = bailoutToClientRendering;
var _dynamicNoSsr = __webpack_require__(7680);
var _staticGenerationAsyncStorage = __webpack_require__(7156);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticGenerationAsyncStorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicNoSsr).suspense();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 186:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.clientHookInServerComponentError = clientHookInServerComponentError;
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(6689));
function clientHookInServerComponentError(hookName) {
    if (false) {}
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-hook-in-server-component-error.js.map


/***/ }),

/***/ 1874:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useSearchParams = useSearchParams;
exports.usePathname = usePathname;
Object.defineProperty(exports, "ServerInsertedHTMLContext", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.ServerInsertedHTMLContext;
    }
}));
Object.defineProperty(exports, "useServerInsertedHTML", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.useServerInsertedHTML;
    }
}));
exports.useRouter = useRouter;
exports.useSelectedLayoutSegments = useSelectedLayoutSegments;
exports.useSelectedLayoutSegment = useSelectedLayoutSegment;
Object.defineProperty(exports, "redirect", ({
    enumerable: true,
    get: function() {
        return _redirect.redirect;
    }
}));
Object.defineProperty(exports, "notFound", ({
    enumerable: true,
    get: function() {
        return _notFound.notFound;
    }
}));
var _react = __webpack_require__(6689);
var _appRouterContext = __webpack_require__(3280);
var _hooksClientContext = __webpack_require__(9274);
var _clientHookInServerComponentError = __webpack_require__(186);
var _serverInsertedHtml = __webpack_require__(3349);
var _redirect = __webpack_require__(2609);
var _notFound = __webpack_require__(8930);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
    }
}
exports.ReadonlyURLSearchParams = ReadonlyURLSearchParams;
function useSearchParams() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useSearchParams");
    const searchParams = (0, _react).useContext(_hooksClientContext.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react).useMemo(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering  } = __webpack_require__(8254);
        if (bailoutToClientRendering()) {
            // TODO-APP: handle dynamic = 'force-static' here and on the client
            return readonlySearchParams;
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("usePathname");
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react).useContext(_hooksClientContext.PathnameContext);
}
function useRouter() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useRouter");
    const router = (0, _react).useContext(_appRouterContext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// TODO-APP: handle parallel routes
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _children;
        node = (_children = parallelRoutes.children) != null ? _children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = Array.isArray(segment) ? segment[1] : segment;
    if (!segmentValue) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey = "children") {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useSelectedLayoutSegments");
    const { tree  } = (0, _react).useContext(_appRouterContext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = "children") {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 8930:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.notFound = notFound;
exports.isNotFoundError = isNotFoundError;
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    return (error == null ? void 0 : error.digest) === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 2609:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.redirect = redirect;
exports.isRedirectError = isRedirectError;
exports.getURLFromRedirectError = getURLFromRedirectError;
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
function redirect(url) {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = `${REDIRECT_ERROR_CODE};${url}`;
    throw error;
}
function isRedirectError(error) {
    return typeof (error == null ? void 0 : error.digest) === "string" && error.digest.startsWith(REDIRECT_ERROR_CODE + ";") && error.digest.length > REDIRECT_ERROR_CODE.length + 1;
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.slice(REDIRECT_ERROR_CODE.length + 1);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 7156:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.staticGenerationAsyncStorage = void 0;
var _asyncLocalStorage = __webpack_require__(6742);
const staticGenerationAsyncStorage = (0, _asyncLocalStorage).createAsyncLocalStorage();
exports.staticGenerationAsyncStorage = staticGenerationAsyncStorage;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-async-storage.js.map


/***/ }),

/***/ 1210:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getDomainLocale = getDomainLocale;
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 6007:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = initHeadManager;
exports.isEqualNode = isEqualNode;
exports.DOMAttributeNames = void 0;
function initHeadManager() {
    return {
        mountedInstances: new Set(),
        updateHead: (head)=>{
            const tags = {};
            head.forEach((h)=>{
                if (// it won't be inlined. In this case revert to the original behavior
                h.type === "link" && h.props["data-optimized-fonts"]) {
                    if (document.querySelector(`style[data-href="${h.props["data-href"]}"]`)) {
                        return;
                    } else {
                        h.props.href = h.props["data-href"];
                        h.props["data-href"] = undefined;
                    }
                }
                const components = tags[h.type] || [];
                components.push(h);
                tags[h.type] = components;
            });
            const titleComponent = tags.title ? tags.title[0] : null;
            let title = "";
            if (titleComponent) {
                const { children  } = titleComponent.props;
                title = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
            }
            if (title !== document.title) document.title = title;
            [
                "meta",
                "base",
                "link",
                "style",
                "script"
            ].forEach((type)=>{
                updateElements(type, tags[type] || []);
            });
        }
    };
}
const DOMAttributeNames = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv",
    noModule: "noModule"
};
exports.DOMAttributeNames = DOMAttributeNames;
function reactElementToDOM({ type , props  }) {
    const el = document.createElement(type);
    for(const p in props){
        if (!props.hasOwnProperty(p)) continue;
        if (p === "children" || p === "dangerouslySetInnerHTML") continue;
        // we don't render undefined props to the DOM
        if (props[p] === undefined) continue;
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (type === "script" && (attr === "async" || attr === "defer" || attr === "noModule")) {
            el[attr] = !!props[p];
        } else {
            el.setAttribute(attr, props[p]);
        }
    }
    const { children , dangerouslySetInnerHTML  } = props;
    if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
    } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
    }
    return el;
}
function isEqualNode(oldTag, newTag) {
    if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
        const nonce = newTag.getAttribute("nonce");
        // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
        // be stripped if there is no content security policy response header that includes a nonce.
        if (nonce && !oldTag.getAttribute("nonce")) {
            const cloneTag = newTag.cloneNode(true);
            cloneTag.setAttribute("nonce", "");
            cloneTag.nonce = nonce;
            return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
        }
    }
    return oldTag.isEqualNode(newTag);
}
function updateElements(type, components) {
    const headEl = document.getElementsByTagName("head")[0];
    const headCountEl = headEl.querySelector("meta[name=next-head-count]");
    if (false) {}
    const headCount = Number(headCountEl.content);
    const oldTags = [];
    for(let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null){
        var ref;
        if ((j == null ? void 0 : (ref = j.tagName) == null ? void 0 : ref.toLowerCase()) === type) {
            oldTags.push(j);
        }
    }
    const newTags = components.map(reactElementToDOM).filter((newTag)=>{
        for(let k = 0, len = oldTags.length; k < len; k++){
            const oldTag = oldTags[k];
            if (isEqualNode(oldTag, newTag)) {
                oldTags.splice(k, 1);
                return false;
            }
        }
        return true;
    });
    oldTags.forEach((t)=>{
        var ref;
        return (ref = t.parentNode) == null ? void 0 : ref.removeChild(t);
    });
    newTags.forEach((t)=>headEl.insertBefore(t, headCountEl));
    headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head-manager.js.map


/***/ }),

/***/ 8045:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

"use client";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(6689));
var _head = _interop_require_default(__webpack_require__(5443));
var _imageBlurSvg = __webpack_require__(4486);
var _imageConfig = __webpack_require__(5843);
var _imageConfigContext = __webpack_require__(744);
var _warnOnce = __webpack_require__(618);
var _imageLoader = _interop_require_default(__webpack_require__(9552));
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
const allImgs = new Map();
let perfObserver;
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
function getWidths({ deviceSizes , allSizes  }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs({ config , src , unoptimized , width , quality , sizes , loader  }) {
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths , kind  } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === "w" ? w : i + 1}${kind}`).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getInt(x) {
    if (typeof x === "number" || typeof x === "undefined") {
        return x;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, src, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder === "blur") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current(_extends({}, event, {
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            }));
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
const ImageElement = /*#__PURE__*/ (0, _react).forwardRef((_param, forwardedRef)=>{
    var { imgAttributes , heightInt , widthInt , qualityInt , className , imgStyle , blurStyle , isLazy , fill , placeholder , loading , srcString , config , unoptimized , loader , onLoadRef , onLoadingCompleteRef , setBlurComplete , setShowAltText , onLoad , onError  } = _param, rest = _object_without_properties_loose(_param, [
        "imgAttributes",
        "heightInt",
        "widthInt",
        "qualityInt",
        "className",
        "imgStyle",
        "blurStyle",
        "isLazy",
        "fill",
        "placeholder",
        "loading",
        "srcString",
        "config",
        "unoptimized",
        "loader",
        "onLoadRef",
        "onLoadingCompleteRef",
        "setBlurComplete",
        "setShowAltText",
        "onLoad",
        "onError"
    ]);
    loading = isLazy ? "lazy" : loading;
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("img", Object.assign({}, rest, {
        // @ts-ignore - TODO: upgrade to `@types/react@17`
        loading: loading,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: _extends({}, imgStyle, blurStyle)
    }, imgAttributes, {
        ref: (0, _react).useCallback((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            srcString,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder === "blur") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    })));
});
const Image = /*#__PURE__*/ (0, _react).forwardRef((_param, forwardedRef)=>{
    var { src , sizes , unoptimized =false , priority =false , loading , className , quality , width , height , fill , style , onLoad , onLoadingComplete , placeholder ="empty" , blurDataURL , layout , objectFit , objectPosition , lazyBoundary , lazyRoot  } = _param, all = _object_without_properties_loose(_param, [
        "src",
        "sizes",
        "unoptimized",
        "priority",
        "loading",
        "className",
        "quality",
        "width",
        "height",
        "fill",
        "style",
        "onLoad",
        "onLoadingComplete",
        "placeholder",
        "blurDataURL",
        "layout",
        "objectFit",
        "objectPosition",
        "lazyBoundary",
        "lazyRoot"
    ]);
    const configContext = (0, _react).useContext(_imageConfigContext.ImageConfigContext);
    const config = (0, _react).useMemo(()=>{
        const c = configEnv || configContext || _imageConfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return _extends({}, c, {
            allSizes,
            deviceSizes
        });
    }, [
        configContext
    ]);
    let rest = all;
    let loader = rest.loader || _imageLoader.default;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        var _tmp;
        _tmp = (obj)=>{
            const { config: _  } = obj, opts = _object_without_properties_loose(obj, [
                "config"
            ]);
            return customImageLoader(opts);
        }, loader = _tmp, _tmp;
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = _extends({}, style, layoutStyle);
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const [blurComplete, setBlurComplete] = (0, _react).useState(false);
    const [showAltText, setShowAltText] = (0, _react).useState(false);
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const blurStyle = placeholder === "blur" && blurDataURL && !blurComplete ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("data:image/svg+xml;charset=utf-8,${(0, _imageBlurSvg).getImageBlurSvg({
            widthInt,
            heightInt,
            blurWidth,
            blurHeight,
            blurDataURL,
            objectFit: imgStyle.objectFit
        })}")`
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    let srcString = src;
    if (false) {}
    const linkProps = {
        // @ts-expect-error upgrade react types to react 18
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: rest.crossOrigin
    };
    const onLoadRef = (0, _react).useRef(onLoad);
    (0, _react).useEffect(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react).useRef(onLoadingComplete);
    (0, _react).useEffect(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const imgElementArgs = _extends({
        isLazy,
        imgAttributes,
        heightInt,
        widthInt,
        qualityInt,
        className,
        imgStyle,
        blurStyle,
        loading,
        config,
        fill,
        unoptimized,
        placeholder,
        loader,
        srcString,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        setShowAltText
    }, rest);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, Object.assign({}, imgElementArgs, {
        ref: forwardedRef
    })), priority ? // for browsers that do not support `imagesrcset`, and in those cases
    // it would likely cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", Object.assign({
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        as: "image",
        href: imgAttributes.srcSet ? undefined : imgAttributes.src
    }, linkProps))) : null);
});
var _default = Image;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image.js.map


/***/ }),

/***/ 8418:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

"use client";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(6689));
var _resolveHref = __webpack_require__(7782);
var _isLocalUrl = __webpack_require__(1109);
var _formatUrl = __webpack_require__(3938);
var _utils = __webpack_require__(9232);
var _addLocale = __webpack_require__(2725);
var _routerContext = __webpack_require__(4964);
var _appRouterContext = __webpack_require__(3280);
var _useIntersection = __webpack_require__(7190);
var _getDomainLocale = __webpack_require__(1210);
var _addBasePath = __webpack_require__(8684);
const prefetched = new Set();
function prefetch(router, href, as, options, isAppRouter) {
    if (true) {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _isLocalUrl).isLocalURL(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(router.prefetch(href, as, options)).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName  } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _isLocalUrl).isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled
            });
        }
    };
    if (isAppRouter) {
        // @ts-expect-error startTransition exists.
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formatUrl).formatUrl(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    if (false) {}
    let children;
    const { href: hrefProp , as: asProp , children: childrenProp , prefetch: prefetchProp , passHref , replace , shallow , scroll , locale , onClick , onMouseEnter: onMouseEnterProp , onTouchStart: onTouchStartProp , legacyBehavior =true === false  } = props, restProps = _object_without_properties_loose(props, [
        "href",
        "as",
        "children",
        "prefetch",
        "passHref",
        "replace",
        "shallow",
        "scroll",
        "locale",
        "onClick",
        "onMouseEnter",
        "onTouchStart",
        "legacyBehavior"
    ]);
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const prefetchEnabled = prefetchProp !== false;
    const pagesRouter = _react.default.useContext(_routerContext.RouterContext);
    const appRouter = _react.default.useContext(_appRouterContext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    if (false) {}
    const { href , as  } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolveHref).resolveHref(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolveHref).resolveHref(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) { var ref; }
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useIntersection).useIntersection({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils).isAbsoluteUrl(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getDomainLocale).getDomainLocale(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", Object.assign({}, restProps, childProps), children);
});
var _default = Link;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 2392:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizePathTrailingSlash = void 0;
var _removeTrailingSlash = __webpack_require__(3297);
var _parsePath = __webpack_require__(8854);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    if (false) {}
    return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
};
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 9311:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
exports.requestIdleCallback = requestIdleCallback;
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
exports.cancelIdleCallback = cancelIdleCallback;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 699:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

"use client";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handleClientScriptLoad = handleClientScriptLoad;
exports.initScriptLoader = initScriptLoader;
exports["default"] = void 0;
var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);
var _reactDom = _interop_require_default(__webpack_require__(6405));
var _react = _interop_require_wildcard(__webpack_require__(6689));
var _headManagerContext = __webpack_require__(2796);
var _headManager = __webpack_require__(6007);
var _requestIdleCallback = __webpack_require__(9311);
const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = [
    "onLoad",
    "onReady",
    "dangerouslySetInnerHTML",
    "children",
    "onError",
    "strategy"
];
const loadScript = (props)=>{
    const { src , id , onLoad =()=>{} , onReady =null , dangerouslySetInnerHTML , children ="" , strategy ="afterInteractive" , onError  } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement("script");
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener("load", function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener("error", function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    for (const [k, value] of Object.entries(props)){
        if (value === undefined || ignoreProps.includes(k)) {
            continue;
        }
        const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
        el.setAttribute(attr, value);
    }
    if (strategy === "worker") {
        el.setAttribute("type", "text/partytown");
    }
    el.setAttribute("data-nscript", strategy);
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy ="afterInteractive"  } = props;
    if (strategy === "lazyOnload") {
        window.addEventListener("load", ()=>{
            (0, _requestIdleCallback).requestIdleCallback(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === "complete") {
        (0, _requestIdleCallback).requestIdleCallback(()=>loadScript(props));
    } else {
        window.addEventListener("load", ()=>{
            (0, _requestIdleCallback).requestIdleCallback(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute("src");
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
function Script(props) {
    const { id , src ="" , onLoad =()=>{} , onReady =null , strategy ="afterInteractive" , onError  } = props, restProps = _object_without_properties_loose(props, [
        "id",
        "src",
        "onLoad",
        "onReady",
        "strategy",
        "onError"
    ]);
    // Context is available only during SSR
    const { updateScripts , scripts , getIsSsr , appDir , nonce  } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react).useRef(false);
    (0, _react).useEffect(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react).useRef(false);
    (0, _react).useEffect(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === "afterInteractive") {
                loadScript(props);
            } else if (strategy === "lazyOnload") {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === "beforeInteractive" || strategy === "worker") {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                _extends({
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError
                }, restProps)
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript(props);
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === "beforeInteractive") {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ _react.default.createElement("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            0,
                            _extends({}, restProps)
                        ])})`
                    }
                });
            }
            // @ts-ignore
            _reactDom.default.preload(src, restProps.integrity ? {
                as: "script",
                integrity: restProps.integrity
            } : {
                as: "script"
            });
            return /*#__PURE__*/ _react.default.createElement("script", {
                nonce: nonce,
                dangerouslySetInnerHTML: {
                    __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                        src
                    ])})`
                }
            });
        } else if (strategy === "afterInteractive") {
            if (src) {
                // @ts-ignore
                _reactDom.default.preload(src, restProps.integrity ? {
                    as: "script",
                    integrity: restProps.integrity
                } : {
                    as: "script"
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, "__nextScript", {
    value: true
});
var _default = Script;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map


/***/ }),

/***/ 7190:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useIntersection = useIntersection;
var _react = __webpack_require__(6689);
var _requestIdleCallback = __webpack_require__(9311);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id , observer , elements  } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection({ rootRef , rootMargin , disabled  }) {
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react).useState(false);
    const elementRef = (0, _react).useRef(null);
    const setElement = (0, _react).useCallback((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react).useEffect(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestIdleCallback).requestIdleCallback(()=>setVisible(true));
                return ()=>(0, _requestIdleCallback).cancelIdleCallback(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react).useCallback(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 7680:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.suspense = suspense;
exports.NoSSR = NoSSR;
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(6689));
var _noSsrError = __webpack_require__(5958);
function suspense() {
    const error = new Error(_noSsrError.NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = _noSsrError.NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
}
function NoSSR({ children  }) {
    if (true) {
        suspense();
    }
    return children;
} //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 5958:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NEXT_DYNAMIC_NO_SSR_CODE = void 0;
const NEXT_DYNAMIC_NO_SSR_CODE = "DYNAMIC_SERVER_USAGE";
exports.NEXT_DYNAMIC_NO_SSR_CODE = NEXT_DYNAMIC_NO_SSR_CODE; //# sourceMappingURL=no-ssr-error.js.map


/***/ }),

/***/ 5675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8045)


/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8418)


/***/ }),

/***/ 9332:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1874)


/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(699)


/***/ })

};
;