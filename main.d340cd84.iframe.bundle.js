(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators})),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),ThemeProvider=__webpack_require__("./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js"),theme=__webpack_require__("./src/styles/theme.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),decorators=[function(Story){return Object(jsx_runtime.jsx)(ThemeProvider.a,{theme:theme.a,children:Object(jsx_runtime.jsx)(Story,{})})}],parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/BookReader.stories.tsx":"./src/stories/BookReader.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/BookReader.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Reader",(function(){return Reader}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),AppBar=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/@mui/material/AppBar/AppBar.js")),Toolbar=__webpack_require__("./node_modules/@mui/material/Toolbar/Toolbar.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),NavigateNext=__webpack_require__("./node_modules/@mui/icons-material/NavigateNext.js"),NavigateNext_default=__webpack_require__.n(NavigateNext),ChevronLeft=__webpack_require__("./node_modules/@mui/icons-material/ChevronLeft.js"),ChevronLeft_default=__webpack_require__.n(ChevronLeft),Brightness6=__webpack_require__("./node_modules/@mui/icons-material/Brightness6.js"),Brightness6_default=__webpack_require__.n(Brightness6),Download=__webpack_require__("./node_modules/@mui/icons-material/Download.js"),Download_default=__webpack_require__.n(Download),ZoomOutMap=__webpack_require__("./node_modules/@mui/icons-material/ZoomOutMap.js"),ZoomOutMap_default=__webpack_require__.n(ZoomOutMap),BookmarkAdd=__webpack_require__("./node_modules/@mui/icons-material/BookmarkAdd.js"),BookmarkAdd_default=__webpack_require__.n(BookmarkAdd),readerReducer=(__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),function readerReducer(state,action){switch(action.type){case"next":return state.actualPage===state.numPages?state:Object.assign({},state,{actualPage:state.actualPage+1});case"previous":return 1===state.actualPage?state:Object.assign({},state,{actualPage:state.actualPage-1});case"setNumPages":return action.payload?Object.assign({},state,{numPages:action.payload}):state;case"setActualPage":return action.payload?Object.assign({},state,{actualPage:action.payload}):state;case"toggleContrast":return Object.assign({},state,{contrast:!state.contrast});case"download":return state.onDownload?(state.onDownload(),state):state;case"bookmark":return state.onBookMark?(state.onBookMark(),state):state;case"fullscreen":if(document.fullscreenElement)document.exitFullscreen&&document.exitFullscreen();else{var element=document.getElementById("browser-book-reader");element&&element.requestFullscreen()}return state;default:throw new Error("Unhandled action type: "+action.type)}}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ReaderStateContext=react.createContext(void 0),readerContext_ReaderProvider=function ReaderProvider(_ref){var children=_ref.children,defaultState={actualPage:1,numPages:0,mode:_ref.mode||"divided",bookmarked:_ref.bookmarked||!1,contrast:!1,onDownload:_ref.onDownload||void 0,onBookMark:_ref.onBookMark||void 0},_React$useReducer2=_slicedToArray(react.useReducer(readerReducer,defaultState),2),value={state:_React$useReducer2[0],dispatch:_React$useReducer2[1]};return Object(jsx_runtime.jsx)(ReaderStateContext.Provider,{value:value,children:children})};readerContext_ReaderProvider.displayName="ReaderProvider";var readerContext_useReader=function useReader(){var context=react.useContext(ReaderStateContext);if(void 0===context)throw new Error("useCount must be used within a CountProvider");return context};try{readerContext_ReaderProvider.displayName="ReaderProvider",readerContext_ReaderProvider.__docgenInfo={description:"",displayName:"ReaderProvider",props:{mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"string | undefined"}},bookmarked:{defaultValue:null,description:"",name:"bookmarked",required:!0,type:{name:"boolean | undefined"}},onDownload:{defaultValue:null,description:"",name:"onDownload",required:!0,type:{name:"(() => void) | undefined"}},onBookMark:{defaultValue:null,description:"",name:"onBookMark",required:!0,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/context/readerContext.tsx#ReaderProvider"]={docgenInfo:readerContext_ReaderProvider.__docgenInfo,name:"ReaderProvider",path:"src/context/readerContext.tsx#ReaderProvider"})}catch(__react_docgen_typescript_loader_error){}var Controls_Controls=function Controls(_ref){var barColor=_ref.barColor,context=readerContext_useReader(),controlsConfig=function generateConfig(state){return[{icon:ChevronLeft_default.a,role:"previous",visible:"divided"===state.mode,action:{type:"previous"}},{icon:BookmarkAdd_default.a,role:"bookmark",visible:void 0!==state.onBookMark,action:{type:"bookmark"}},{icon:ZoomOutMap_default.a,role:"fullscreen",action:{type:"fullscreen"}},{icon:Download_default.a,role:"download",visible:void 0!==state.onDownload,action:{type:"download"}},{icon:Brightness6_default.a,role:"invert",action:{type:"toggleContrast"}},{icon:NavigateNext_default.a,role:"next",visible:"divided"===state.mode,action:{type:"next"}}]}(context.state),middlePosition=Math.round((controlsConfig.length-1)/2);return Object(jsx_runtime.jsx)(AppBar.a,{position:"sticky",sx:{top:"auto",bottom:0,backgroundColor:barColor},children:Object(jsx_runtime.jsx)(Toolbar.a,{sx:{justifyContent:"center"},children:controlsConfig.map((function(element,index){var Icon=element.icon;return!1===element.visible?null:Object(jsx_runtime.jsxs)("div",{children:[middlePosition===index&&Object(jsx_runtime.jsxs)("span",{children:[context.state.actualPage,"/",context.state.numPages]}),Object(jsx_runtime.jsx)(IconButton.a,{role:element.role,onClick:function onClick(){return element.action&&context.dispatch({type:element.action.type})},color:"inherit",children:Object(jsx_runtime.jsx)(Icon,{})})]},index)}))})})};Controls_Controls.displayName="Controls";try{Controls_Controls.displayName="Controls",Controls_Controls.__docgenInfo={description:"",displayName:"Controls",props:{barColor:{defaultValue:null,description:"",name:"barColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Controls/Controls.tsx#Controls"]={docgenInfo:Controls_Controls.__docgenInfo,name:"Controls",path:"src/components/Controls/Controls.tsx#Controls"})}catch(__react_docgen_typescript_loader_error){}var ThemeProvider=__webpack_require__("./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js"),CssBaseline=__webpack_require__("./node_modules/@mui/material/CssBaseline/CssBaseline.js"),theme=__webpack_require__("./src/styles/theme.ts"),entry=__webpack_require__("./node_modules/react-pdf/dist/esm/entry.js"),CircularProgress=__webpack_require__("./node_modules/@mui/material/CircularProgress/CircularProgress.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Loading_Loading=function Loading(){return Object(jsx_runtime.jsx)(Box.a,{sx:{display:"flex",height:"100%"},children:Object(jsx_runtime.jsx)(CircularProgress.a,{})})};Loading_Loading.displayName="Loading";var react_intersection_observer_m=__webpack_require__("./node_modules/react-intersection-observer/react-intersection-observer.m.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return Pages_arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function Pages_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Pages_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pages_arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Pages_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var _templateObject,Pages_Pages=function Pages(_ref){var numPages=_ref.numPages,mode=_ref.mode,onLoad=_ref.onLoad,context=readerContext_useReader();switch(mode){case"divided":return Object(jsx_runtime.jsx)(entry.b,{onLoadSuccess:function onLoadSuccess(){var _document$getElementB;onLoad((null===(_document$getElementB=document.getElementById("browser-book-reader"))||void 0===_document$getElementB?void 0:_document$getElementB.offsetHeight)||0)},loading:Object(jsx_runtime.jsx)(Loading_Loading,{}),pageNumber:context.state.actualPage});case"full":return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:_toConsumableArray(Array(numPages).keys()).map((function(x,i){return Object(jsx_runtime.jsx)(react_intersection_observer_m.a,{as:"div",onChange:function onChange(inView,entry){inView&&entry.boundingClientRect.height>100&&context.dispatch({type:"setActualPage",payload:i+1})},children:Object(jsx_runtime.jsx)(entry.b,{pageNumber:i+1})},x)}))});default:return Object(jsx_runtime.jsx)(entry.b,{pageNumber:context.state.actualPage})}};try{Pages_Pages.displayName="Pages",Pages_Pages.__docgenInfo={description:"",displayName:"Pages",props:{numPages:{defaultValue:null,description:"",name:"numPages",required:!0,type:{name:"number"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"string | undefined"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!0,type:{name:"(arg0: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pages/Pages.tsx#Pages"]={docgenInfo:Pages_Pages.__docgenInfo,name:"Pages",path:"src/components/Pages/Pages.tsx#Pages"})}catch(__react_docgen_typescript_loader_error){}var Wrapper=__webpack_require__("./node_modules/@emotion/styled/dist/styled.browser.esm.js").a.div(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n    position: relative;\n    overflow: scroll;\n    height: 100%;\n    min-height: ",";\n\n    .react-pdf__Page__canvas {\n        margin: 0 auto;\n        ","\n    }\n\n    ","\n"])),(function(props){return 0===props.minHeight?"100%":props.minHeight+"px"}),(function(props){return props.contrast?"filter: invert(100%);":null}),(function(props){return props.styles}));function DocumentWrapper_slicedToArray(arr,i){return function DocumentWrapper_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function DocumentWrapper_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function DocumentWrapper_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return DocumentWrapper_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DocumentWrapper_arrayLikeToArray(o,minLen)}(arr,i)||function DocumentWrapper_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function DocumentWrapper_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}entry.c.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/"+entry.c.version+"/pdf.worker.js";var DocumentWrapper_DocumentWrapper=function DocumentWrapper(_ref){var file=_ref.file,styles=_ref.styles,_useState2=DocumentWrapper_slicedToArray(Object(react.useState)(0),2),minHeight=_useState2[0],setMinHeight=_useState2[1],context=readerContext_useReader();return Object(jsx_runtime.jsx)(Wrapper,{contrast:context.state.contrast,minHeight:minHeight,styles:styles,children:Object(jsx_runtime.jsx)(entry.a,{file:file,onLoadSuccess:function onDocumentLoadSuccess(_ref2){var numPages=_ref2.numPages;context.dispatch({type:"setNumPages",payload:numPages})},children:Object(jsx_runtime.jsx)(Pages_Pages,{onLoad:function onLoadPage(min){minHeight<min&&0===minHeight&&setMinHeight(min)},numPages:context.state.numPages||0,mode:context.state.mode})})})};DocumentWrapper_DocumentWrapper.displayName="DocumentWrapper";try{DocumentWrapper_DocumentWrapper.displayName="DocumentWrapper",DocumentWrapper_DocumentWrapper.__docgenInfo={description:"",displayName:"DocumentWrapper",props:{file:{defaultValue:null,description:"",name:"file",required:!0,type:{name:"any"}},styles:{defaultValue:null,description:"",name:"styles",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BookReader/DocumentWrapper.tsx#DocumentWrapper"]={docgenInfo:DocumentWrapper_DocumentWrapper.__docgenInfo,name:"DocumentWrapper",path:"src/components/BookReader/DocumentWrapper.tsx#DocumentWrapper"})}catch(__react_docgen_typescript_loader_error){}var BookReader_BookReader=function BookReader(_ref){var file=_ref.file,mode=_ref.mode,bookmarked=_ref.bookmarked,onDownload=_ref.onDownload,onBookMark=_ref.onBookMark,barColor=_ref.barColor,styles=_ref.styles;return Object(jsx_runtime.jsxs)(ThemeProvider.a,{theme:theme.a,children:[Object(jsx_runtime.jsx)(CssBaseline.a,{}),Object(jsx_runtime.jsx)("div",{id:"browser-book-reader",children:Object(jsx_runtime.jsxs)(readerContext_ReaderProvider,{mode:mode,bookmarked:bookmarked,onDownload:onDownload,onBookMark:onBookMark,children:[Object(jsx_runtime.jsx)(DocumentWrapper_DocumentWrapper,{file:file,styles:styles||""}),Object(jsx_runtime.jsx)(Controls_Controls,{barColor:barColor||void 0})]})})]})};BookReader_BookReader.displayName="BookReader";try{BookReader_BookReader.displayName="BookReader",BookReader_BookReader.__docgenInfo={description:"",displayName:"BookReader",props:{file:{defaultValue:null,description:"",name:"file",required:!0,type:{name:"any"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"string"}},bookmarked:{defaultValue:null,description:"",name:"bookmarked",required:!1,type:{name:"boolean"}},onDownload:{defaultValue:null,description:"",name:"onDownload",required:!1,type:{name:"(() => void)"}},onBookMark:{defaultValue:null,description:"",name:"onBookMark",required:!1,type:{name:"(() => void)"}},barColor:{defaultValue:null,description:"",name:"barColor",required:!1,type:{name:"string"}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BookReader/BookReader.tsx#BookReader"]={docgenInfo:BookReader_BookReader.__docgenInfo,name:"BookReader",path:"src/components/BookReader/BookReader.tsx#BookReader"})}catch(__react_docgen_typescript_loader_error){}var test=__webpack_require__("./src/stories/test.pdf"),test_default=__webpack_require__.n(test),BookReader_stories_Template=(__webpack_exports__.default={title:"BookReader",component:BookReader_BookReader},function Template(args){return Object(jsx_runtime.jsx)(BookReader_BookReader,Object.assign({},args))});BookReader_stories_Template.displayName="Template";var Reader=BookReader_stories_Template.bind({});Reader.args={file:test_default.a,mode:"divided",onDownload:function onDownload(){console.log("hola")},bookmarked:!1},Reader.parameters=Object.assign({storySource:{source:"(args) => <BookReader {...args} />"}},Reader.parameters)},"./src/stories/test.pdf":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/test.ea9ecf10.pdf"},"./src/styles/theme.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/colors/red.js"),theme=Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.a)({palette:{mode:"light",primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.a.A400}}});__webpack_exports__.a=theme},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){},2:function(module,exports){},3:function(module,exports){},4:function(module,exports){},5:function(module,exports){},6:function(module,exports){},7:function(module,exports){}},[[0,5,6]]]);