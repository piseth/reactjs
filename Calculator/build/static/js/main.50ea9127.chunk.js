(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,,,function(t,e,n){t.exports=n(24)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),r=n(9),o=n.n(r),u=(n(16),n(17),n(2)),s=n(3),l=n(6),c=n(5),h=n(4),p=function(){function t(){Object(u.a)(this,t),this.number="",this.previousInput=null,this.previousNumber=null,this.previousOperation=null,this.repeatNumber=null,this.repeatOperation=null,this.clearable=!1,this.OperationEnum={addition:"+",subtraction:"-",multiplication:"x",division:"\xf7",percentage:"%",sign:"+/-",equal:"=",allClear:"AC",clear:"C"}}return Object(s.a)(t,[{key:"updatePreviousStatus",value:function(t,e){this.previousNumber=t,this.previousInput=e,this.previousOperation=e}},{key:"handleDigitInput",value:function(t){return this.clearable=!0,this.isOperation(this.previousInput)&&(this.number=""),"."===t&&this.containDecimalPoint(this.number)?this.number:"."===t&&""===this.number?(this.number="0.",this.number):(this.number+=t,this.previousInput=t,this.removeZero(this.number))}},{key:"handleOperationInput",value:function(t){return t===this.OperationEnum.addition||t===this.OperationEnum.subtraction||t===this.OperationEnum.multiplication||t===this.OperationEnum.division?this.handleBaiscMathOperation(t):t===this.OperationEnum.percentage?this.handlePercentageOperation():t===this.OperationEnum.sign?this.handleSignOperation():t===this.OperationEnum.allClear?this.handleAllClearOperation():t===this.OperationEnum.clear?this.handleClearOperation():t===this.OperationEnum.equal?this.handleEqualOperation(t):void 0}},{key:"handleBaiscMathOperation",value:function(t){if(this.repeatNumber=null,this.repeatOperation=null,null==this.previousNumber)return this.updatePreviousStatus(this.number,t),this.number;var e=this.previousInput;return this.previousInput=t,e!==t&&this.previousOperation!==this.OperationEnum.equal&&"="!==e?(this.previousOperation===this.OperationEnum.addition&&(this.number=this.add(this.previousNumber,this.number)),this.previousOperation===this.OperationEnum.subtraction&&(this.number=this.subtract(this.previousNumber,this.number)),this.previousOperation===this.OperationEnum.multiplication&&(this.number=this.muliply(this.previousNumber,this.number)),this.previousOperation===this.OperationEnum.division&&(this.number=this.divide(this.previousNumber,this.number)),this.updatePreviousStatus(this.number,t),this.number):(this.updatePreviousStatus(this.number,t),this.number)}},{key:"handlePercentageOperation",value:function(){return""===this.number&&(this.number="0"),this.number=this.percentage(this.number),this.number}},{key:"handleSignOperation",value:function(){return""===this.number&&(this.number="0"),this.number=this.changeSign(this.number),this.number}},{key:"handleAllClearOperation",value:function(){return this.allClear()}},{key:"handleClearOperation",value:function(){return this.clear()}},{key:"perform",value:function(t){null!==this.repeatNumber?this.number=t(this.number,this.repeatNumber):(this.repeatNumber=this.number,this.number=t(this.previousNumber,this.number))}},{key:"handleEqualOperation",value:function(t){if(null==this.previousNumber)return this.updatePreviousStatus(this.number,t),this.number;if(this.previousInput=t,this.previousOperation!==this.OperationEnum.equal&&t===this.OperationEnum.equal){var e=this.number;return this.previousOperation===this.OperationEnum.addition&&this.perform(this.add),this.previousOperation===this.OperationEnum.subtraction&&this.perform(this.subtract),this.previousOperation===this.OperationEnum.multiplication&&this.perform(this.muliply),this.previousOperation===this.OperationEnum.division&&this.perform(this.divide),this.repeatNumber=e,this.repeatOperation=this.previousOperation,this.previousInput=t,this.previousOperation=t,this.number}var n=this.number;return null!=this.repeatNumber&&(this.repeatOperation===this.OperationEnum.addition&&(this.number=this.add(this.number,this.repeatNumber)),this.repeatOperation===this.OperationEnum.subtraction&&(this.number=this.subtract(this.number,this.repeatNumber)),this.repeatOperation===this.OperationEnum.multiplication&&(this.number=this.muliply(this.number,this.repeatNumber)),this.repeatOperation===this.OperationEnum.division&&(this.number=this.divide(this.number,this.repeatNumber))),this.updatePreviousStatus(n,t),this.number}},{key:"calculate",value:function(t){return this.isDigit(t)?this.handleDigitInput(t):this.isOperation(t)?this.handleOperationInput(t):"Error"}},{key:"isDigit",value:function(t){return!isNaN(t)||"."===t}},{key:"isOperation",value:function(t){return Object.values(this.OperationEnum).includes(t)}},{key:"add",value:function(t,e){return(parseFloat(t)+parseFloat(e)).toString()}},{key:"subtract",value:function(t,e){return(parseFloat(t)-parseFloat(e)).toString()}},{key:"muliply",value:function(t,e){return(parseFloat(t)*parseFloat(e)).toString()}},{key:"divide",value:function(t,e){return(parseFloat(t)/parseFloat(e)).toString()}},{key:"percentage",value:function(t){return(parseFloat(t)/100).toString()}},{key:"changeSign",value:function(t){return 0===parseFloat(t)?"0":(-1*parseFloat(t)).toString()}},{key:"clear",value:function(){return this.previousInput=null,this.previousNumber=null,this.previousOperation=null,this.repeatNumber=null,this.repeatOperation=null,this.clearable=!1,this.number}},{key:"allClear",value:function(){return this.number="",this.previousInput=null,this.previousNumber=null,this.previousOperation=null,this.repeatNumber=null,this.repeatOperation=null,this.clearable=!1,"0"}},{key:"removeZero",value:function(t){return t.length>1&&"0"===t[0]&&"."!==t[1]?this.removeZero(t.substr(1,t.length)):t}},{key:"containDecimalPoint",value:function(t){return t.includes(".")}}]),t}(),m=n(7),d=(n(18),function(t){Object(c.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).state={display:t.display,width:window.width},i.divRef=a.a.createRef(),i.spanRef=a.a.createRef(),i.previousWidth=window.width,i}return Object(s.a)(n,[{key:"updateDimensions",value:function(){this.setState(Object(m.a)(Object(m.a)({},this.state),{},{width:window.innerWidth}))}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"getFontSize",value:function(){return parseFloat(window.getComputedStyle(this.divRef.current,null).getPropertyValue("font-size"))}},{key:"reduceFontSize",value:function(){this.divRef.current.clientWidth>this.spanRef.current.clientWidth+40||(this.divRef.current.style.fontSize=this.getFontSize()-10+"px",this.reduceFontSize())}},{key:"resetFontSize",value:function(){this.divRef.current.style.fontSize="14vmin"}},{key:"render",value:function(){return a.a.createElement("div",{ref:this.divRef,className:"Display"},a.a.createElement("span",{ref:this.spanRef,className:"DisplaySpan"},this.props.display))}},{key:"componentDidUpdate",value:function(){var t=this.divRef.current.clientWidth;this.resetFontSize(),this.reduceFontSize(),this.previousWidth=t}}]),n}(a.a.Component)),v=n(10),b=(n(22),function(t){Object(c.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).keyMap={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0",EQUAL:"=",MULTIPLY:"shift+8",ADD:"shift+=",SUBTRACT:"-",DIVIDE:"/",AC:"c",DOT:".",PERCENT:"shift+5",ENTER:"enter"},i.handlers={1:function(){i.props.onClick("1")},2:function(){i.props.onClick("2")},3:function(){i.props.onClick("3")},4:function(){i.props.onClick("4")},5:function(){i.props.onClick("5")},6:function(){i.props.onClick("6")},7:function(){i.props.onClick("7")},8:function(){i.props.onClick("8")},9:function(){i.props.onClick("9")},0:function(){i.props.onClick("0")},EQUAL:function(){i.props.onClick("=")},MULTIPLY:function(){i.props.onClick("*")},SUBTRACT:function(){i.props.onClick("-")},ADD:function(){i.props.onClick("+")},DIVIDE:function(){i.props.onClick("\xf7")},AC:function(){i.props.onClick("AC")},DOT:function(){i.props.onClick(".")},PERCENT:function(){i.props.onClick("%")},ENTER:function(){i.props.onClick("=")}},i}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(v.GlobalHotKeys,{keyMap:this.keyMap,handlers:this.handlers},a.a.createElement("button",{className:this.props.className,onClick:this.props.onClick.bind(null,this.props.value)},this.props.value))}}]),n}(a.a.Component)),f=(n(23),function(t){Object(c.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).state={display:"0",engine:new p},i.handleButtonClick=i.handleButtonClick.bind(Object(l.a)(i)),i}return Object(s.a)(n,[{key:"handleButtonClick",value:function(t){this.setState({display:this.state.engine.calculate(t)})}},{key:"render",value:function(){return a.a.createElement("div",{className:"Calculator"},a.a.createElement(d,{display:this.state.display}),a.a.createElement(b,{value:this.state.engine.clearable?"C":"AC",className:"Button BlackButton",onClick:this.handleButtonClick}),a.a.createElement(b,{value:"+/-",className:"Button BlackButton",onClick:this.handleButtonClick}),a.a.createElement(b,{value:"%",className:"Button BlackButton",onClick:this.handleButtonClick}),a.a.createElement(b,{value:"\xf7",className:"Button OrangeButton",onClick:this.handleButtonClick}),a.a.createElement("br",null),a.a.createElement(b,{value:"7",className:"Button GrayButton",onClick:this.handleButtonClick}),a.a.createElement(b,{value:"8",className:"Button GrayButton",onClick:this.handleButtonClick}),a.a.createElement(b,{value:"9",className:"Button GrayButton",onClick:this.handleButtonClick}),a.a.createElement(b,{value:"x",className:"Button OrangeButton",onClick:this.handleButtonClick}),a.a.createElement("br",null),a.a.createElement(b,{value:"4",className:"Button GrayButton",onClick:this.handleButtonClick}),a.a.createElement(b,{value:"5",className:"Button GrayButton",onClick:this.handleButtonClick}),a.a.createElement(b,{value:"6",className:"Button GrayButton",onClick:this.handleButtonClick}),a.a.createElement(b,{value:"-",className:"Button OrangeButton",onClick:this.handleButtonClick}),a.a.createElement("br",null),a.a.createElement(b,{value:"1",className:"Button GrayButton",onClick:this.handleButtonClick}),a.a.createElement(b,{value:"2",className:"Button GrayButton",onClick:this.handleButtonClick}),a.a.createElement(b,{value:"3",className:"Button GrayButton",onClick:this.handleButtonClick}),a.a.createElement(b,{value:"+",className:"Button OrangeButton",onClick:this.handleButtonClick}),a.a.createElement("br",null),a.a.createElement(b,{value:"0",className:"Button GrayButton LargeButton",onClick:this.handleButtonClick}),a.a.createElement(b,{value:".",className:"Button GrayButton",onClick:this.handleButtonClick}),a.a.createElement(b,{value:"=",className:"Button OrangeButton",onClick:this.handleButtonClick}))}}]),n}(a.a.Component));var k=function(){return a.a.createElement(f,null)},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}o.a.render(a.a.createElement(k,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/www/calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/www/calculator","/service-worker.js");O?(!function(t,e){fetch(t).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):C(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(e,t)}))}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.50ea9127.chunk.js.map