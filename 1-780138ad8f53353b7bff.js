(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{159:function(e,t){e.exports={blogTitle:"Takumon Blog",blogDescription:"SIer's tech blog powered by Gatsby",blogUrl:"https://takumon.com",blogRssUrl:"https://takumon.com/rss.xml",blogImageUrl:"https://takumon.com/icons/app-sns.png",blogAuthorTwitterUserName:"inouetakumon",blogRepositoryUrl:"https://github.com/Takumon/blog",blogAuthorTwitterUrl:"https://twitter.com/inouetakumon",blogAuthorQiitaUrl:"https://qiita.com/Takumon",blogAuthorGitHubUrl:"https://github.com/Takumon",blogAuthorFacebookUrl:"https://www.facebook.com/takuto.inoue.54",facebookAppId:"1959327667485352",blogAuthor:"Takumon",blogAuthorDescription:"SIer's tech blog powered by Gatsby",blogAuthorAvatarUrl:"https://s.gravatar.com/avatar/37d27f624f8c9c8db6fe6b6581b256f1",dateFormat:"YYYY/MM/DD"}},196:function(e,t,a){"use strict";a(53);var n=a(7),o=a.n(n),r=a(0),l=a.n(r),i=a(163),c=a(169),m=a(381),s=a.n(m),u=a(197),p=a(393),d=a.n(p),g=a(159),h=a.n(g),b=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,a=e.date,n=e.color,o=t.map(function(e){return l.a.createElement(u.a,{key:e,value:e,color:n})}),r=s()(a).format(h.a.dateFormat);return l.a.createElement("small",{className:d.a.content},l.a.createElement("div",{className:d.a.date,style:{color:n}},l.a.createElement(i.a,{color:n,icon:c.a,size:"sm"}),r),l.a.createElement("div",{className:d.a.tags},l.a.createElement(i.a,{color:n,icon:c.d,size:"sm"}),o))},t}(l.a.Component);t.a=b},197:function(e,t,a){"use strict";a(246);var n=a(7),o=a.n(n),r=a(382),l=a.n(r),i=a(0),c=a.n(i),m=a(38),s=a(392),u=a.n(s),p=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.value,a=e.count,n=e.color;return a?c.a.createElement("div",{key:t,className:u.a.content},c.a.createElement(m.Link,{to:"/tags/"+l()(t),className:u.a.link},c.a.createElement("div",{className:u.a.tag_name,style:{color:n}},t),c.a.createElement("div",{className:u.a.tag_count},a))):c.a.createElement("div",{key:t,className:u.a.content},c.a.createElement(m.Link,{to:"/tags/"+l()(t),className:u.a.link},c.a.createElement("div",{className:u.a.tag_name,style:{color:n}},t)))},t}(c.a.Component);t.a=p},198:function(e,t,a){"use strict";a(306);var n=a(7),o=a.n(n),r=a(0),l=a.n(r),i=a(38),c=(a(307),a(308),a(309)),m=a.n(c),s=a(159),u=a.n(s),p=a(239),d=a(163),g=a(241),h=a(169),b=a(318),_=a.n(b),f=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:_.a.content},l.a.createElement("img",{src:u.a.blogAuthorAvatarUrl,alt:u.a.blogAuthor,className:_.a.avatar}),l.a.createElement("div",{className:_.a.main},l.a.createElement("div",{className:_.a.description},u.a.blogDescription),l.a.createElement("div",{className:_.a.profile},l.a.createElement("a",{"aria-label":"profile_link_github",className:_.a.profile__link,href:u.a.blogAuthorGitHubUrl},l.a.createElement(d.a,{color:"#333",size:"sm",className:_.a.profile__icon,icon:g.b})),l.a.createElement("a",{"aria-label":"profile_link_twitter",className:_.a.profile__link,href:u.a.blogAuthorTwitterUrl},l.a.createElement(d.a,{color:"#3eaded",size:"sm",className:_.a.profile__icon,icon:g.c})),l.a.createElement("a",{"aria-label":"profile_link_qiita",className:_.a.profile__link,href:u.a.blogAuthorQiitaUrl},l.a.createElement(d.a,{color:"white",size:"sm",className:_.a.profile__icon_qiita,icon:h.c})))))},t}(l.a.Component),E=a(319),y=a.n(E);function w(e){var t=e.isRoot?"":l.a.createElement(f,null);return l.a.createElement("footer",{className:y.a.content,role:"contentinfo"},l.a.createElement("div",{className:y.a.content__inner},t,l.a.createElement("h4",{className:y.a.title},l.a.createElement(i.Link,{className:y.a.title__link,to:"/"},u.a.blogTitle,l.a.createElement("i",{className:y.a.tomato_icon}))),l.a.createElement("div",{className:"copyright"},"Copyright © 2018. ",u.a.blogAuthor,l.a.createElement("a",{"aria-label":"blog_repository",href:u.a.blogRepositoryUrl,rel:"noopener noreferrer",className:y.a.github_icon}))))}var k=a(320),v=a.n(k),x=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:v.a.content},l.a.createElement("a",{"aria-label":"blog_repository",href:u.a.blogRepositoryUrl,rel:"noopener noreferrer",className:v.a.github_icon}),l.a.createElement("a",{"aria-label":"feedly",className:v.a.button,href:"https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Ftakumon.com%2Frss.xml",target:"blank"},l.a.createElement("img",{id:"feedlyFollow",src:"https://s3.feedly.com/img/follows/feedly-follow-logo-green_2x.png",alt:"follow us in feedly",width:"36",height:"36"})),l.a.createElement("a",{"aria-label":"rss",className:v.a.button,href:u.a.blogRssUrl,target:"blank"},l.a.createElement(d.a,{icon:h.b})))},t}(l.a.Component),N=a(180),A=a.n(N),U=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return l.a.createElement(A.a,null,l.a.createElement("script",{type:"text/javascript"},"\n            (function(add, cla){window['UserHeatTag']=cla;window[cla]=window[cla]||function(){(window[cla].q=window[cla].q||[]).push(arguments)},window[cla].l=1*new Date();var ul=document.createElement('script');var tag = document.getElementsByTagName('script')[0];ul.async=1;ul.src=add;tag.parentNode.insertBefore(ul,tag);})('//uh.nakanohito.jp/uhj2/uh.js', '_uhtracker');_uhtracker({id:'uhxUTlOli3'});\n          "))},t}(l.a.Component);a.d(t,"a",function(){return T});var T=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.children,n="/";"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&(n=""+n);var o="/tags/";"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&(o=""+o);var r,c=t.pathname===n,s=t.pathname.startsWith(o);return r=c?l.a.createElement("div",{className:m.a.header_container},l.a.createElement(p.a,{isRoot:!0}),l.a.createElement("div",{className:m.a.header_container__inner},l.a.createElement("h1",{className:m.a.blog_title_area},l.a.createElement(i.Link,{className:m.a.blog_title,to:"/"},"Takumon Blog")),l.a.createElement(f,null)),l.a.createElement(x,null)):s?l.a.createElement("div",{className:m.a.header_container},l.a.createElement(p.a,{isRoot:!0}),l.a.createElement("div",{className:m.a.header_container__inner},l.a.createElement("h1",{className:m.a.blog_title_area},l.a.createElement(i.Link,{className:m.a.blog_title,to:"/"},"Takumon Blog")),l.a.createElement(f,null)),l.a.createElement(x,null)):"",l.a.createElement("div",{className:m.a.root_container},l.a.createElement(U,null),r,a,l.a.createElement(w,{isRoot:c}))},t}(l.a.Component)},205:function(e,t,a){"use strict";var n=a(7),o=a.n(n),r=a(325),l=a(0),i=a.n(l),c=a(180),m=a.n(c),s=a(38),u=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.postTitle,a=e.tag;return i.a.createElement(s.StaticQuery,{query:"451891596",render:function(e){var n=a?a+" | ":t?t+" | ":"";return i.a.createElement(m.a,{htmlAttributes:{lang:"ja"},title:""+n+e.site.siteMetadata.title})},data:r})},t}(i.a.Component);t.a=u},239:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(0),o=a.n(n),r=a(180),l=a.n(r),i=a(159);function c(e){var t=e.isRoot,a=e.title,n=e.description,r=e.postUrl,c=e.postDate,m=e.largeImage,s=t?"website":"article",u=function(e){var t=e.isRoot,a=e.title,n=e.description,r=e.postUrl,l=e.postDate,c=[{"@type":"Person",name:i.blogAuthor,description:i.blogAuthorDescription,image:{"@type":"ImageObject",url:i.blogAuthorAvatarUrl,width:60,height:60},url:i.blogUrl,sameAs:[i.blogAuthorFacebookUrl,i.blogAuthorTwitterUrl]},{"@type":"thing",name:i.blogAuthor,sameas:i.blogTitle,url:i.blogURL,image:{"@type":"ImageObject",url:i.blogImageUrl,width:60,height:60}}],m={"@type":"Organization",name:i.blogAuthor,description:i.blogAuthorDescription,logo:{"@type":"ImageObject",url:i.blogAuthorAvatarUrl,width:60,height:60}},s=[{"@context":"http://schema.org","@type":"WebSite",inLanguage:"ja",url:i.blogUrl,name:a,alternateName:i.blogTitle,image:i.blogImageUrl,description:i.blogAuthorDescription,author:c,publisher:m,potentialAction:{"@type":"SearchAction",target:i.blogUrl+"/search?q={q}","query-input":"required name=q"}}];t||(s.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:a,image:i.blogImageUrl}}]}),s.push({"@context":"http://schema.org","@type":"BlogPosting",url:i.blogURL,name:a,alternateName:i.blogTitle,headline:a,image:{"@type":"ImageObject",url:i.blogImageUrl},description:n,datePublished:l,dateModified:l,mainEntityOfPage:{"@type":"WebPage","@id":i.blogUrl},author:c,publisher:m}));return o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(s))}({isRoot:t,title:a,description:n,postUrl:r,postDate:c}),p=m||i.blogImageUrl,d=m?"summary_large_image":"summary";return o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:n||i.blogDescription}),o.a.createElement("meta",{name:"image",content:p}),u,o.a.createElement("meta",{property:"og:title",content:a||i.blogTitle}),o.a.createElement("meta",{property:"og:description",content:n||i.blogDescription}),o.a.createElement("meta",{property:"og:url",content:i.blogUrl}),o.a.createElement("meta",{property:"og:type",content:s}),o.a.createElement("meta",{property:"og:site_name",content:i.blogTitle}),o.a.createElement("meta",{property:"og:image",content:p}),o.a.createElement("meta",{property:"fb:app_id",content:i.facebookAppId}),o.a.createElement("meta",{name:"twitter:card",content:d}),o.a.createElement("meta",{name:"twitter:image",content:p}),o.a.createElement("meta",{name:"twitter:title",content:a||i.blogTitle}),o.a.createElement("meta",{name:"twitter:description",content:n||i.blogDescription}),o.a.createElement("meta",{name:"twitter:site",content:"@"+i.blogAuthorTwitterUserName}),o.a.createElement("link",{rel:"canonical",href:r}))}},307:function(e,t,a){},309:function(e,t,a){e.exports={root_container:"index-module--root_container--1tNtz",header_container:"index-module--header_container--23J4G",showBackground:"index-module--show-background--2WGiR",header_container__inner:"index-module--header_container__inner--MrxsL",fadeInDown:"index-module--fade-in-down--1WDdM",blog_title_area:"index-module--blog_title_area--SLwqQ",blog_title:"index-module--blog_title--1I6Cw"}},318:function(e,t,a){e.exports={content:"index-module--content--3DHe_",avatar:"index-module--avatar--35mWl",main:"index-module--main--2H-K4",profile:"index-module--profile--1yKjC",profile__link:"index-module--profile__link--qPSpb",profile__icon:"index-module--profile__icon--392zq",profile__icon_qiita:"index-module--profile__icon_qiita--2lJOT",description:"index-module--description--3PiNi"}},319:function(e,t,a){e.exports={content:"index-module--content--3k5rq",content__inner:"index-module--content__inner--eUiH2",title:"index-module--title--PPXvn",title__link:"index-module--title__link--5-xtv",copyright:"index-module--copyright--2EBmK",tomato_icon:"index-module--tomato_icon--1t7v4",github_icon:"index-module--github_icon--1H1HX"}},320:function(e,t,a){e.exports={content:"index-module--content--3j8lf",button:"index-module--button--1m7In",github_icon:"index-module--github_icon--gSyRY"}},325:function(e){e.exports={data:{site:{siteMetadata:{title:"Takumon Blog"}}}}},392:function(e,t,a){e.exports={content:"index-module--content--2yjbR",link:"index-module--link--bMTNZ",tag_name:"index-module--tag_name--26hww",tag_count:"index-module--tag_count--3Elxt"}},393:function(e,t,a){e.exports={content:"index-module--content--jhm8X",date:"index-module--date--ENEn5",tags:"index-module--tags--1waax"}}}]);