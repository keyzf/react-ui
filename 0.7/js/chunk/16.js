webpackJsonp_name_([16],{3:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=r(1),o=n(u),c=r(5),d=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return s(t,e),t.prototype.componentDidMount=function(){window.prettyPrint(null,(0,c.findDOMNode)(this.code))},t.prototype.render=function(){var e=this.props.children.split("\n").filter(function(e){return e.length>0}),t=e[0]?/^(\s*)/.exec(e[0])[1].length:0,r=new RegExp("^(\\s{"+t+"})");return e=e.map(function(e){return e.replace(r,"")}),o.default.createElement("div",{className:"code"},o.default.createElement("pre",{className:"prettyprint"},e.join("\n")))},t}(u.Component);d.propTypes={children:u.PropTypes.string},d.defaultProps={children:""},t.default=d},4:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r(1),l=n(a),s=r(2),u=n(s),o=function(e){return l.default.createElement("div",{className:(0,u.default)("docs-example",e.className)},e.children)};o.propTypes={children:a.PropTypes.any,className:a.PropTypes.string},e.exports=o},160:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r(1),l=n(a),s=r(3),u=n(s),o=r(4),c=n(o),d=r(9);e.exports=function(){return l.default.createElement("div",null,l.default.createElement("div",{className:"header"},l.default.createElement("h1",null,"Progress")),l.default.createElement("div",{className:"content"},l.default.createElement(u.default,null,"<Progress\nclassName={string}\ntype={string}       // 'info|warning|success|danger', default is 'info'\n/>"),l.default.createElement("h2",{className:"subhead"},"Example"),l.default.createElement(c.default,null,l.default.createElement(d.Progress,{value:25}),l.default.createElement(d.Progress,{value:2,max:5}),l.default.createElement(d.Progress,{value:340,max:1024})),l.default.createElement(u.default,null,"          <Progress value={25} />\n          <Progress value={2} max={5} />\n          <Progress value={340} max={1024} />"),l.default.createElement("h2",{className:"subhead"},"Type"),l.default.createElement(c.default,null,l.default.createElement(d.Progress,{value:20}),l.default.createElement(d.Progress,{type:"info",value:40}),l.default.createElement(d.Progress,{type:"warning",value:60}),l.default.createElement(d.Progress,{type:"success",value:80}),l.default.createElement(d.Progress,{type:"danger",value:100})),l.default.createElement(u.default,null,'          <Progress value={20} />\n          <Progress type="info" value={40} />\n          <Progress type="warning" value={60} />\n          <Progress type="success" value={80} />\n          <Progress type="danger" value={100} />'),l.default.createElement("h2",{className:"subhead"},"Striped"),l.default.createElement(c.default,null,l.default.createElement(d.Progress,{striped:!0,value:20}),l.default.createElement(d.Progress,{striped:!0,type:"info",value:40}),l.default.createElement(d.Progress,{striped:!0,type:"warning",value:60}),l.default.createElement(d.Progress,{striped:!0,type:"success",value:80}),l.default.createElement(d.Progress,{striped:!0,type:"danger",value:100})),l.default.createElement(u.default,null,'          <Progress striped value={20} />\n          <Progress striped type="info" value={40} />\n          <Progress striped type="warning" value={60} />\n          <Progress striped type="success" value={80} />\n          <Progress striped type="danger" value={100} />')))}}});