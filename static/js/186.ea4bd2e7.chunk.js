"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,t,n){n.r(t);var r=n(861),a=n(885),c=n(757),u=n.n(c),s=n(791),i=n(689),o=n(390),p=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],f=(0,i.UO)();return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.fetchMovieReviews(t);case 3:n=e.sent,c(n.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,e.finish(10);case 12:case 13:case"end":return e.stop()}}),e,null,[[0,7,10,12]])})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(f.movieId)}),[f.movieId]),(0,p.jsx)("div",{children:n.length>0?(0,p.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Autor: ",n]}),(0,p.jsx)("p",{children:r})]},t)}))}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie."})})}},390:function(e,t,n){var r=n(861),a=n(757),c=n.n(a),u=n(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var s="b3f9afca16a4955ec4fa9a455f1a40de",i=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("trending/all/day?api_key=".concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={fetchMoviesInTrend:i,fetchMoviesDetails:o,fetchMovieCredits:p,fetchMovieReviews:f,fetchMovies:v};t.Z=h}}]);
//# sourceMappingURL=186.ea4bd2e7.chunk.js.map