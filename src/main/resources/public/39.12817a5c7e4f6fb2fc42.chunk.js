webpackJsonp([39],{UmK5:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("/oeL"),u=function(){return function(){}}(),i=e("qbdv"),r=e("BkNc"),a=e("bm2B"),s=e("9Qcf"),o=e("maBJ"),d=e("R08E"),c=e("Qg/J"),_=e("WDs4"),p=e("jk5u"),h=e("g5gQ"),v=e("mtQK"),f=e("Rhg7"),g=e("5h8W"),m=e("5maJ"),b=e("vjf1"),y=e("zGhY"),j=e("1N5f"),S=e("sZAn"),w=e("KGm0"),R=e("Mqds"),P=e("JNkf"),M=e("I00F"),C=e("nc++"),O=e("b5Sx"),D=(e("82j9"),e("ZV8k")),T=e("oRYE"),I=e("kUuJ"),x=e("6reP"),E=function(){function l(l,n,e,t,u,i){this.location=l,this._state=n,this._sockService=e,this.userService=t,this.projectService=u,this.router=i}return l.prototype.canActivate=function(l,n){var e=I.b.getOrgAndPrjId(n.url);return console.log("PrjResolve - canActivate",e.prjId,T.a.CURR_PRJ_ID),null==T.a.CURR_PRJ_ID||T.a.CURR_PRJ_ID==e.prjId||this.projectService.change(e.projectId).toPromise().then(function(l){var n=l.data;return"project"==n.type&&(T.a.CURR_PRJ_ID=n.id,T.a.CURR_PRJ_NAME=n.name),!0})},l.ctorParameters=function(){return[{type:i.Location},{type:D.a},{type:x.a},{type:w.a},{type:O.a},{type:r.k}]},l}(),k=e("3SRs"),N=e("KDXw"),F=e("D7l2"),L=function(){function l(l){this._route=l}return l.prototype.ngOnInit=function(){var l=this;this._route.params.forEach(function(n){l.prjId=n.prjId}),console.log("==Current Prj",this.prjId,T.a.CURR_PRJ_ID)},l.ctorParameters=function(){return[{type:r.a}]},l}(),U=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275eld"](0,null,null,4,"div",[["class","prj"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](8388608,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](73728,null,0,r.o,[r.p,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null]],null,null),(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275ted"](null,["\n  "]))],null,null)}var J=t["\u0275ccf"]("prj",L,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,null,null,1,"prj",[],null,null,null,A,U)),t["\u0275did"](57344,null,0,L,[r.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),V=e("a1Di"),z=e("N3K9"),B=e("U80n"),$=e("TJST"),K=e("4ITx"),Q=e("Lp8h"),H=e("eehj"),q=e("VQ7i"),Z=e("fi61"),G=e("ZZZf"),W=e("uSpx"),X=e("/X/w"),Y=e("KWOn"),ll=function(){function l(l,n,e,t,u,i){this._route=l,this._verService=n,this._envService=e,this._userService=t,this._projectService=u,this._reportService=i,this.tab="ver",this.project={},this.plans=[],this.histories={},this.vers=[],this.envs=[],this.users=[],this.testChartData={},this.issueChartData={},this.orgId=T.a.CURR_ORG_ID}return l.prototype.ngOnInit=function(){var l=this;this.routeSub=this._route.pathFromRoot[5].params.subscribe(function(n){l.id!=+n.prjId&&(l.id=+n.prjId,l.loadData())})},l.prototype.ngAfterViewInit=function(){},l.prototype.loadData=function(){var l=this;this.id&&(this._projectService.view(this.id).subscribe(function(n){l.project=n.project,l.plans=n.plans,l.histories=n.histories,"project"==n.project.type&&(T.a.CURR_PRJ_ID=l.project.id,T.a.CURR_PRJ_NAME=l.project.name)}),this._reportService.projectTestReport(this.id).subscribe(function(n){l.testChartData=n.data}),this._reportService.projectIssueReport(this.id).subscribe(function(n){l.issueChartData=n.data}))},l.prototype.ngOnDestroy=function(){this.routeSub.unsubscribe()},l.ctorParameters=function(){return[{type:r.a},{type:N.a},{type:F.a},{type:w.a},{type:O.a},{type:k.a}]},l}(),nl=[[".project-view{display:-ms-flexbox;display:flex;padding:15px}.project-view .content{-ms-flex:1;flex:1;margin-right:20px}.project-view .content .list-toolbar{margin-top:3px}.project-view .content design-progress,.project-view .content execution-process{margin-bottom:20px;width:100%;background-color:#fff}.project-view .info{width:400px}.project-view .info .activity .title{height:36px;line-height:36px}"]],el=t["\u0275crt"]({encapsulation:2,styles:nl,data:{}});function tl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,null,null,22,"tr",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275eld"](0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["",""])),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275eld"](0,null,null,3,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n              "," - ","\n            "])),t["\u0275ppd"](2),t["\u0275ppd"](2),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275eld"](0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["",""])),t["\u0275ppd"](1),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275eld"](0,null,null,7,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n                  "])),(l()(),t["\u0275eld"](0,null,null,4,"span",[["class","link no-underline"],["prj-privilege",""]],null,[[null,"click"]],function(l,n,e){var u=!0;"click"===n&&(u=!1!==t["\u0275nov"](l,17).onClick()&&u);return u},null,null)),t["\u0275did"](8192,null,0,r.l,[r.k,r.a,[8,null],t.Renderer,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](1),t["\u0275did"](368640,null,0,V.a,[P.a,t.ElementRef,t.Renderer],{privs:[0,"privs"]},null),(l()(),t["\u0275ted"](null,["\u67e5\u770b"])),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275ted"](null,["\n          "]))],function(l,n){var e=n.component;l(n,17,0,l(n,18,0,"/pages/org/"+e.orgId+"/prj/"+e.id+"/implement/plan/"+n.context.$implicit.id+"/view"));l(n,19,0,"test_plan-view")},function(l,n){l(n,3,0,n.context.$implicit.name),l(n,6,0,t["\u0275unv"](n,6,0,l(n,7,0,t["\u0275nov"](n.parent,0),n.context.$implicit.startTime,"MM/dd")),t["\u0275unv"](n,6,1,l(n,8,0,t["\u0275nov"](n.parent,0),n.context.$implicit.endTime,"MM/dd"))),l(n,11,0,t["\u0275unv"](n,11,0,l(n,12,0,t["\u0275nov"](n.parent,1),n.context.$implicit.status)))})}function ul(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,null,null,7,"div",[["class","action-html descr-item"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n              "])),(l()(),t["\u0275eld"](0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t["\u0275ted"](null,["\xa0\xa0\n              "])),(l()(),t["\u0275eld"](0,null,null,2,"div",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["",""])),t["\u0275ppd"](2),(l()(),t["\u0275ted"](null,["\n            "]))],null,function(l,n){l(n,2,0,n.context.$implicit.title),l(n,5,0,t["\u0275unv"](n,5,0,l(n,6,0,t["\u0275nov"](n.parent.parent,0),n.context.$implicit.createTime,"HH:mm:ss")))})}function il(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,null,null,10,"div",[["class","item"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275eld"](0,null,null,1,"div",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n            ","\n          "])),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275eld"](0,null,null,4,"div",[["class","descr"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275and"](8388608,null,null,1,null,ul)),t["\u0275did"](401408,null,0,i.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275ted"](null,["\n        "]))],function(l,n){l(n,8,0,n.context.$implicit.value)},function(l,n){l(n,3,0,n.context.$implicit.key)})}function rl(l){return t["\u0275vid"](0,[t["\u0275pid"](0,i.DatePipe,[t.LOCALE_ID]),t["\u0275pid"](0,z.a,[]),t["\u0275pid"](0,B.a,[]),(l()(),t["\u0275eld"](0,null,null,123,"div",[["class","project-view"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n\n  "])),(l()(),t["\u0275eld"](0,null,null,68,"div",[["class","content"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275eld"](0,null,null,23,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,20,"div",[["class","list-toolbar col-xl-12"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275eld"](0,null,null,4,"div",[["class","title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275eld"](0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["",""])),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275ted"](null,["\n\n        "])),(l()(),t["\u0275eld"](0,null,null,1,"div",[["class","filter"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n\n        "])),(l()(),t["\u0275ted"](null,["\n\n        "])),(l()(),t["\u0275eld"](0,null,null,8,"div",[["class","buttons"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275eld"](0,null,null,5,"button",[["class","btn btn-secondary btn-with-icon btn-sm"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0;"click"===n&&(u=!1!==t["\u0275nov"](l,23).onClick()&&u);return u},null,null)),t["\u0275did"](8192,null,0,r.l,[r.k,r.a,[8,null],t.Renderer,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](1),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275eld"](0,null,null,0,"i",[["class","fa fa-plus-circle"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\u8fd4\u56de\n          "])),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275ted"](null,["\n\n    "])),(l()(),t["\u0275eld"](0,null,null,13,"div",[["class","row chart"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275eld"](0,null,null,1,"design-progress",[],null,null,null,$.b,$.a)),t["\u0275did"](57344,null,0,K.a,[],{showTitle:[0,"showTitle"],data:[1,"data"]},null),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275eld"](0,null,null,1,"execution-process",[],null,null,null,Q.b,Q.a)),t["\u0275did"](57344,null,0,H.a,[],{showTitle:[0,"showTitle"],data:[1,"data"]},null),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275ted"](null,["\n\n    "])),(l()(),t["\u0275eld"](0,null,null,25,"div",[["class","row chart"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275eld"](0,null,null,1,"issue-trend",[],null,null,null,q.b,q.a)),t["\u0275did"](57344,null,0,Z.a,[],{title:[0,"title"],data:[1,"data"]},null),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275eld"](0,null,null,1,"issue-age",[],null,null,null,G.b,G.a)),t["\u0275did"](57344,null,0,W.a,[],{title:[0,"title"],data:[1,"data"]},null),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275eld"](0,null,null,1,"issue-distrib",[],null,null,null,X.b,X.a)),t["\u0275did"](57344,null,0,Y.a,[],{title:[0,"title"],data:[1,"data"]},null),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275eld"](0,null,null,1,"issue-distrib",[],null,null,null,X.b,X.a)),t["\u0275did"](57344,null,0,Y.a,[],{title:[0,"title"],data:[1,"data"]},null),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275ted"](null,["\n\n  "])),(l()(),t["\u0275ted"](null,["\n\n  "])),(l()(),t["\u0275eld"](0,null,null,50,"div",[["class","info"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n\n    "])),(l()(),t["\u0275eld"](0,null,null,34,"div",[["class","activity"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        \u6267\u884c\u8ba1\u5212\n      "])),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,28,"div",[["class","list"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275eld"](0,null,null,25,"table",[["class","table"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275eld"](0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275eld"](0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275eld"](0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\u540d\u79f0"])),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275eld"](0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\u65f6\u95f4"])),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275eld"](0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\u72b6\u6001"])),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275eld"](0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\u64cd\u4f5c"])),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275ted"](null,["\n\n          "])),(l()(),t["\u0275eld"](0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275and"](8388608,null,null,1,null,tl)),t["\u0275did"](401408,null,0,i.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275ted"](null,["\n\n    "])),(l()(),t["\u0275eld"](0,null,null,11,"div",[["class","activity"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        \u9879\u76ee\u6d3b\u52a8\n      "])),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,5,"div",[["class","list"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275and"](8388608,null,null,2,null,il)),t["\u0275did"](401408,null,0,i.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275ppd"](1),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275ted"](null,["\n  "])),(l()(),t["\u0275ted"](null,["\n\n"])),(l()(),t["\u0275ted"](null,["\n"]))],function(l,n){var e=n.component;l(n,23,0,l(n,24,0,"/pages/org/"+e.orgId+"/prjs"));l(n,37,0,!0,e.testChartData.design);l(n,43,0,!0,e.testChartData.exe);l(n,52,0,"\u95ee\u9898\u8d8b\u52bf",e.issueChartData.trend);l(n,58,0,"\u95ee\u9898\u9f84\u671f",e.issueChartData.age);l(n,64,0,"\u95ee\u9898\u4f18\u5148\u7ea7\u5206\u5e03",e.issueChartData.distribByPriority);l(n,70,0,"\u95ee\u9898\u72b6\u6001\u5206\u5e03",e.issueChartData.distribByStatus),l(n,107,0,e.plans),l(n,121,0,t["\u0275unv"](n,121,0,l(n,122,0,t["\u0275nov"](n,2),e.histories)))},function(l,n){l(n,14,0,n.component.project.name)})}var al=t["\u0275ccf"]("project-view",ll,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,null,null,1,"project-view",[],null,null,null,rl,el)),t["\u0275did"](2220032,null,0,ll,[r.a,N.a,F.a,w.a,O.a,k.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),sl=e("KBuQ"),ol=e("9GFz"),dl=e("CPp0"),cl=e("a3e3");e.d(n,"PrjModuleNgFactory",function(){return vl});var _l,pl=this&&this.__extends||(_l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var e in n)n.hasOwnProperty(e)&&(l[e]=n[e])},function(l,n){function e(){this.constructor=l}_l(l,n),l.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),hl=function(l){function n(n){return l.call(this,n,[J,al],[])||this}return pl(n,l),Object.defineProperty(n.prototype,"_NgLocalization_23",{get:function(){return null==this.__NgLocalization_23&&(this.__NgLocalization_23=new i.NgLocaleLocalization(this.parent.get(t.LOCALE_ID))),this.__NgLocalization_23},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_\u0275i_24",{get:function(){return null==this.__\u0275i_24&&(this.__\u0275i_24=new a.z),this.__\u0275i_24},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FormBuilder_25",{get:function(){return null==this.__FormBuilder_25&&(this.__FormBuilder_25=new a.e),this.__FormBuilder_25},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_UserService_26",{get:function(){return null==this.__UserService_26&&(this.__UserService_26=new w.a(this.parent.get(D.a),this.parent.get(sl.a),this.parent.get(ol.a))),this.__UserService_26},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ClientService_27",{get:function(){return null==this.__ClientService_27&&(this.__ClientService_27=new R.a(this.parent.get(D.a),this.parent.get(sl.a),this.parent.get(ol.a))),this.__ClientService_27},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_PrivilegeService_28",{get:function(){return null==this.__PrivilegeService_28&&(this.__PrivilegeService_28=new P.a),this.__PrivilegeService_28},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_OrgPrivilegeDirective_29",{get:function(){return null==this.__OrgPrivilegeDirective_29&&(this.__OrgPrivilegeDirective_29=new M.a(this._PrivilegeService_28,this.parent.get(t.ElementRef),this.parent.get(t.Renderer))),this.__OrgPrivilegeDirective_29},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_AccountService_31",{get:function(){return null==this.__AccountService_31&&(this.__AccountService_31=new C.a(this.parent.get(ol.a),this.parent.get(sl.a))),this.__AccountService_31},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ProjectService_32",{get:function(){return null==this.__ProjectService_32&&(this.__ProjectService_32=new O.a(this.parent.get(ol.a),this.parent.get(D.a))),this.__ProjectService_32},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_PrjResolve_33",{get:function(){return null==this.__PrjResolve_33&&(this.__PrjResolve_33=new E(this.parent.get(i.Location),this.parent.get(D.a),this.parent.get(x.a),this._UserService_26,this._ProjectService_32,this.parent.get(r.k))),this.__PrjResolve_33},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ReportService_34",{get:function(){return null==this.__ReportService_34&&(this.__ReportService_34=new k.a(this.parent.get(ol.a))),this.__ReportService_34},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_VerService_35",{get:function(){return null==this.__VerService_35&&(this.__VerService_35=new N.a(this.parent.get(ol.a))),this.__VerService_35},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_EnvService_36",{get:function(){return null==this.__EnvService_36&&(this.__EnvService_36=new F.a(this.parent.get(ol.a))),this.__EnvService_36},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new i.CommonModule,this._RouterModule_1=new r.n(this.parent.get(r.t,null),this.parent.get(r.k,null)),this._\u0275ba_2=new a.w,this._FormsModule_3=new a.i,this._ReactiveFormsModule_4=new a.s,this._TranslateModule_5=new s.b,this._TranslateStore_6=new o.a,this._TranslateLoader_7=p.b(this.parent.get(dl.e)),this._TranslateParser_8=new d.a,this._MissingTranslationHandler_9=new c.a,this._USE_STORE_10=void 0,this._TranslateService_11=new _.a(this._TranslateStore_6,this._TranslateLoader_7,this._TranslateParser_8,this._MissingTranslationHandler_9,this._USE_STORE_10),this._AppTranslationModule_12=new p.a(this._TranslateService_11),this._NgbDropdownModule_13=new h.a,this._PipeModule_14=new v.a,this._NgaModule_15=new f.a,this._NgbTabsetModule_16=new g.a,this._DirectiveModule_17=new m.a,this._AngularEchartsModule_18=new b.a,this._ChartDesignModule_19=new y.a,this._ChartExecutionModule_20=new j.a,this._ChartIssueModule_21=new S.a,this._PrjModule_22=new u,this._ROUTES_30=[[{path:":prjId",component:L,canActivate:[E],children:[{path:"view",component:ll},{path:"design",loadChildren:"../../../design/design.module#DesignModule"},{path:"implement",loadChildren:"../../../implement/implement.module#ImplementModule"},{path:"issue",loadChildren:"../../../issue/issue.module#IssueModule"},{path:"issue-query",loadChildren:"../../../issue-query/issue-query.module#IssueQueryModule"}]}]],this._PrjModule_22},n.prototype.getInternal=function(l,n){return l===i.CommonModule?this._CommonModule_0:l===r.n?this._RouterModule_1:l===a.w?this._\u0275ba_2:l===a.i?this._FormsModule_3:l===a.s?this._ReactiveFormsModule_4:l===s.b?this._TranslateModule_5:l===o.a?this._TranslateStore_6:l===cl.b?this._TranslateLoader_7:l===d.b?this._TranslateParser_8:l===c.b?this._MissingTranslationHandler_9:l===_.b?this._USE_STORE_10:l===_.a?this._TranslateService_11:l===p.a?this._AppTranslationModule_12:l===h.a?this._NgbDropdownModule_13:l===v.a?this._PipeModule_14:l===f.a?this._NgaModule_15:l===g.a?this._NgbTabsetModule_16:l===m.a?this._DirectiveModule_17:l===b.a?this._AngularEchartsModule_18:l===y.a?this._ChartDesignModule_19:l===j.a?this._ChartExecutionModule_20:l===S.a?this._ChartIssueModule_21:l===u?this._PrjModule_22:l===i.NgLocalization?this._NgLocalization_23:l===a.z?this._\u0275i_24:l===a.e?this._FormBuilder_25:l===w.a?this._UserService_26:l===R.a?this._ClientService_27:l===P.a?this._PrivilegeService_28:l===M.a?this._OrgPrivilegeDirective_29:l===r.i?this._ROUTES_30:l===C.a?this._AccountService_31:l===O.a?this._ProjectService_32:l===E?this._PrjResolve_33:l===k.a?this._ReportService_34:l===N.a?this._VerService_35:l===F.a?this._EnvService_36:n},n.prototype.destroyInternal=function(){this.__OrgPrivilegeDirective_29&&this._OrgPrivilegeDirective_29.ngOnDestroy()},n}(t["\u0275NgModuleInjector"]),vl=new t.NgModuleFactory(hl,u)}});