(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),l=n.n(r),i=(n(15),n(1)),c=n(2),s=n(4),u=n(3),h=n(5),p=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"viewMovie",value:function(){var e="https://www.themoviedb.org/movie/"+this.props.movie.id;window.location.href=e}},{key:"render",value:function(){return o.a.createElement("table",{key:this.props.movie.id},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("img",{alt:"poster",width:"120",src:this.props.movie.poster_src})),o.a.createElement("td",null,o.a.createElement("h3",null,this.props.movie.title),o.a.createElement("p",null,this.props.movie.overview),o.a.createElement("input",{type:"button",onClick:this.viewMovie.bind(this),value:"\uc0c1\uc138\ubcf4\uae30"})))))}}]),t}(o.a.Component)),m=n(8),d=n.n(m),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n.performSearch("avengers"),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"performSearch",value:function(e){var t=this;console.log("tmdb web Open API");var n="https://api.themoviedb.org/3/search/movie?&api_key=151a10798e54869f4c8a074635ec39f6&query="+e;d.a.ajax({url:n,success:function(e){console.log("\ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294\ub370 \uc131\uacf5\ud568");var n=e.results,a=[];n.forEach(function(e){e.poster_src="https://image.tmdb.org/t/p/w185/"+e.poster_path,console.log(e.poster_path),console.log(e.title);var t=o.a.createElement(p,{key:e.id,movie:e});a.push(t)}),t.setState({rows:a})},error:function(e,t,n){console.log("\ub370\uc774\ud130\t\uac16\uc624\ub294\ub370\t\uc2e4\ud328...!")}})}},{key:"searchChangeHandler",value:function(e){console.log(e.target.value);var t=e.target.value;this.performSearch(t)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("table",{className:"titleBar"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("img",{alt:"app-icon",width:"60",src:"logo.svg"})),o.a.createElement("td",{width:"8"}),o.a.createElement("td",null,o.a.createElement("h2",null,"\uc601\ud654\uac80\uc0c9 DB\ud504\ub85c\uc81d\ud2b8"))))),o.a.createElement("input",{style:{fontSize:15,display:"block",width:"99%",paddingTop:8,paddingBottom:8,paddingLeft:16},onChange:this.searchChangeHandler.bind(this),placeholder:"\ucc3e\uace0\uc790\ud558\ub294 \uc601\ud654 \ud0a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud558\uc138\uc694."}),this.state.rows)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.7fe87560.chunk.js.map