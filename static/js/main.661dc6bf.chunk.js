(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},26:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),s=(n(24),n(25),n(26),n(6)),c=n(7),u=n(11),l=n(9),p=n(8),d=n(10),h=n(4),m='# Hey there! This is a markdown previewer\n## See, this text is rendered as an h2 element\n\nIf you want to know about the many things that you can type, [check this link out](https://spec.commonmark.org/0.29/)\n\n# Here are some more examples: \nThis next example is some inline code:\n\n`bool coffeeDeprived = true;`\n\n```\n// And this is a block of code\nif(coffeeDeprived) \n{\n    makeMoreCoffee(darkRoast, 1);\n}\nelse\n{\n    cout << "Gotta keep coding";\n}\n```\n\n**Here comes a list**\n1. First Item\n2. Second Item\n\nNext we have a blockquote element:\n> "A clever person solves a person. A wise person avoids it" - Albert Einstein\n\nCheck out other cool stuff I\'ve done in my [personal portfolio!](https://jesusrodriguezunt.github.io/Portfolio/index.html) \n\nIn the meantime, let\'s enjoy some cofee\n\n![getting ready to work](http://4.bp.blogspot.com/-TUHg4T2YpJ8/TlOw8QOtQrI/AAAAAAAAANs/4h8E9aQso3Y/s1600/IPKat%2B23%2B-%2Bcat%2Bcoffee.jpg "Coffee before programming")\n',f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={textInput:m},n.updateText=n.updateText.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"updateText",value:function(e){this.props.markdownUpdate(e.target.value),this.props.markdownRender(e.target.value),this.setState={textInput:e.target.value}}},{key:"render",value:function(){return r.a.createElement("textarea",{id:"editor",rows:"20",onChange:this.updateText},this.state.textInput)}}]),t}(r.a.Component),v=Object(h.b)((function(e){return{message:e}}),(function(e){return{markdownUpdate:function(t){return e({type:"MARKDOWN_UPDATE",payload:t})},markdownRender:function(t){return e({type:"MARKDOWN_RENDER",payload:t})}}}))(f),b=n(12),w=n.n(b),k=function(e){function t(e){var n;Object(s.a)(this,t),n=Object(u.a)(this,Object(l.a)(t).call(this,e));var a=w()(m);return n.state={currentInput:{__html:a}},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){if(e.stateText!==this.props.stateText){w.a.setOptions({breaks:!0});var t=w()(this.props.stateText.update);this.setState({currentInput:{__html:t}})}}},{key:"render",value:function(){return r.a.createElement("div",{id:"preview-area"},r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:this.state.currentInput}))}}]),t}(r.a.Component),g=Object(h.b)((function(e){return{stateText:e}}),null)(k),y=n(3),O=Object(y.b)({update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MARKDOWN_UPDATE":var n=t.payload;return n;case"MARKDOWN_RENDER":return t.payload;default:return e}}}),x=Object(y.c)(O);var A=function(){return r.a.createElement(h.a,{store:x},r.a.createElement("div",{className:"App"},r.a.createElement("h1",{id:"site-header"},"Markdown Previewer"),r.a.createElement(v,null),r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.661dc6bf.chunk.js.map