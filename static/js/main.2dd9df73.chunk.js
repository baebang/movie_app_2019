(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{56:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(24),r=s.n(c),i=s(10),o=s(2),j=s(13),l=s.n(j),m=s(25),d=s(26),u=s(27),b=s(31),v=s(30),h=s(28),p=s.n(h),x=s(1);var O=function(e){e.id;var t=e.year,s=e.title,n=e.summary,a=e.poster,c=e.genres;return Object(x.jsxs)("div",{className:"movie",children:[Object(x.jsx)("img",{src:a,alt:s,title:s}),Object(x.jsxs)("div",{className:"movie__data",children:[Object(x.jsx)("h3",{className:"movie__title",children:s}),Object(x.jsx)("h5",{className:"movie__year",children:t}),Object(x.jsx)("ul",{className:"genres",children:c.map((function(e,t){return Object(x.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(x.jsxs)("p",{className:"movie__summary",children:[n.slice(0,140),"..."]}),Object(x.jsx)("div",{className:"Daeyal"})]})]})},_=(s(56),function(e){Object(b.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(d.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(l.a.mark((function t(){var s,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(x.jsx)("section",{className:"container",children:t?Object(x.jsx)("div",{className:"loader",children:Object(x.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(x.jsx)("div",{className:"movies",children:s.map((function(e){return Object(x.jsx)(O,{Key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))})})}}]),s}(a.a.Component));var g=function(){return Object(x.jsx)("span",{children:"\uc5ec\uae30\uac00 \uc5b4\ubc14\uc6c3 \ud398\uc774\uc9c0 \uc774\ub290\ub2c8\ub77c...."})};var y=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(i.b,{to:"/",children:"Home"}),Object(x.jsx)(i.b,{to:"/about",children:"About"})]})};s(65);var f=function(){return Object(x.jsxs)(i.a,{children:[Object(x.jsx)(y,{}),Object(x.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(x.jsx)(o.a,{path:"/About",component:g})]})};r.a.render(Object(x.jsx)(f,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.2dd9df73.chunk.js.map