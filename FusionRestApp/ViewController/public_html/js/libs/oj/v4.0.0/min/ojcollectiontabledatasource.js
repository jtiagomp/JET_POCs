/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojdatasource-common","ojs/ojmodel"],function(a,g){a.re=function(c,b){this.data={};if(!(c instanceof a.t))throw Error(a.na.we._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+a.na.we._ERR_DATA_INVALID_TYPE_DETAIL);a.re.O.constructor.call(this,c,b);this.ee=c;this.NCa();this.Init();if(null!=b&&("enabled"==b.startFetch||null==b.startFetch)||null==b)this.mK=!0};o_("CollectionTableDataSource",a.re,a);a.f.ya(a.re,a.na,"oj.CollectionTableDataSource");a.re.prototype.eo=null;a.f.j("CollectionTableDataSource.prototype.comparator",
{eo:a.re.prototype.eo});a.re.prototype.Init=function(){a.re.O.Init.call(this)};a.re.prototype.at=function(c,b){b=b||{};b.deferred=!0;var d=this.ee.at(c,b),e=this;e.YI=!0;var f;return new Promise(function(b,g){null!=d?d.then(function(a){e.YI=!1;f={data:a.attributes,index:c,key:a.id};b(f)},function(b){e.YI=!1;a.na.O.handleEvent.call(e,a.na.fa.ERROR,b);g(b)}):b(null)})};a.f.j("CollectionTableDataSource.prototype.at",{at:a.re.prototype.at});a.re.prototype.fetch=function(a){a=a||{};return"init"!=a.fetchType||
this.mK?this.Zh(a):Promise.resolve()};a.f.j("CollectionTableDataSource.prototype.fetch",{fetch:a.re.prototype.fetch});a.re.prototype.get=function(c,b){b=b||{};b.deferred=!0;var d=this.ee.get(c,b),e=this,f,g;return new Promise(function(b,c){null!=d?d.then(function(a){g=e.Nj(a,a.attributes);f={data:g,index:a.index,key:a.id};b(f)},function(b){a.na.O.handleEvent.call(e,a.na.fa.ERROR,b);c(b)}):b(null)})};a.f.j("CollectionTableDataSource.prototype.get",{get:a.re.prototype.get});a.re.prototype.sort=function(a){null==
a?a=this.sortCriteria:this.sortCriteria=a;var b=this.comparator,d=this;return new Promise(function(e){null==b?(d.ee.comparator=a.key,d.ee.sortDirection="ascending"==a.direction?1:-1):d.ee.comparator=b;d.ee.sort(null);e({header:a.key,direction:a.direction})})};a.f.j("CollectionTableDataSource.prototype.sort",{sort:a.re.prototype.sort});a.re.prototype.totalSize=function(){var a=0<=this.ee.totalResults?this.ee.totalResults:-1;if(-1<a){var b=this.ee.size();return b>a?b:a}if(0<this.M_)a=this.M_;else if("atLeast"==
this.totalSizeConfidence())return this.ee.size();return a};a.f.j("CollectionTableDataSource.prototype.totalSize",{totalSize:a.re.prototype.totalSize});a.re.prototype.totalSizeConfidence=function(){return 0<=this.ee.totalResults?"actual":this.ee.hasMore?"atLeast":"unknown"};a.f.j("CollectionTableDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.re.prototype.totalSizeConfidence});a.re.prototype.NCa=function(){var c=this;this.ee.on(a.ta.fa.SYNC,function(b){if(b instanceof a.U)a.na.O.handleEvent.call(c,
a.na.fa.CHANGE,{data:[b.attributes],keys:[b.id],indexes:[b.index]});else if(b instanceof a.t&&!c.YI&&!c.Zka){var d=b.offset,e=b.lastFetchCount||b.lastFetchSize;if(0<e||c.ee.Qb()){c.Ca=d;c.Lb=e;var f=0;if(0<c.ee.u9||c.ee.D7)f=d+e;c.YI=!0;b.wB(d,f).then(function(a){c.YI=!1;var b=[],e=[],f,g,t;for(f=0;f<a.length;f++)null!=a[f]&&(g=a[f],t=c.Nj(g,g.attributes),b.push(t),e.push(g.id));c.ep.call(c,{silent:!1},{data:b,keys:e,startIndex:d},null)})}else b=c.$C(),c.ep.call(c,{silent:!1},b,null)}});this.ee.on(a.ta.fa.ALLADDED,
function(b,d){var e=[],f=[],g=[],k,l,m;for(k=0;k<d.length;k++)l=d[k],m=c.Nj(l,l.attributes),e.push(m),f.push(l.id),g.push(l.index);a.na.O.handleEvent.call(c,a.na.fa.ADD,{data:e,keys:f,indexes:g})});this.ee.on(a.ta.fa.ALLREMOVED,function(b,d){var e=[],f=[],g=[],k,l;for(k=0;k<d.length;k++)l=d[k],e.push(l.attributes),f.push(l.id),g.push(l.index);a.na.O.handleEvent.call(c,a.na.fa.REMOVE,{data:e,keys:f,indexes:g})});this.ee.on(a.ta.fa.RESET,function(b){a.na.O.handleEvent.call(c,a.na.fa.RESET,b)});this.ee.on(a.ta.fa.SORT,
function(b,d){if(null==d||!d.add){var e={};null==b||null==!b.comparator||g.isFunction(b.comparator)||(e.header=b.comparator,e.direction=1===b.sortDirection?"ascending":"descending");a.na.O.handleEvent.call(c,a.na.fa.SORT,e)}});this.ee.on(a.ta.fa.CHANGE,function(b){a.na.O.handleEvent.call(c,a.na.fa.CHANGE,{data:[b.attributes],keys:[b.id],indexes:[b.index]})});this.ee.on(a.ta.fa.DESTROY,function(b){a.na.O.handleEvent.call(c,a.na.fa.DESTROY,b)});this.ee.on(a.ta.fa.REFRESH,function(b){a.na.O.handleEvent.call(c,
a.na.fa.REFRESH,b)});this.ee.on(a.ta.fa.ERROR,function(b,d,e){a.na.O.handleEvent.call(c,a.na.fa.ERROR,b,d,e)});this.ee.on(a.ta.fa.REQUEST,function(b){a.na.O.handleEvent.call(c,a.na.fa.REQUEST,b)})};a.re.prototype.Zh=function(a){this.lK(a);a=a||{};var b=this;this.ola=0<a.pageSize?!0:!1;this.Ca=null==a.startIndex?this.Ca:a.startIndex;this.Lb=0<a.pageSize?a.pageSize:-1;a.pageSize=this.Lb;a.startIndex=this.Ca;a.refresh=!0;return new Promise(function(d,e){var f=b.Lb;b.ola||(f=25);b.ee.BF(b.Ca,f).then(function(e){var f;
if(b.ola||b.ee.Qb()){f=[];var g=[],m,p,t;for(m=0;m<e.models.length;m++)p=e.models[m],t=b.Nj(p,p.attributes),f[m]=t,g[m]=p.id;f={data:f,keys:g,startIndex:b.Ca};e.models.length<b.Lb?0>b.totalSize()&&(b.M_=b.Ca+e.models.length):b.M_=null}else f=b.$C();b.ep.call(b,a,f,null);d(f)},function(d){b.ep.call(b,a,null,d);e(d)})})};a.re.prototype.lK=function(c){this.Zka=!0;c.silent||a.na.O.handleEvent.call(this,a.na.fa.REQUEST,{startIndex:c.startIndex})};a.re.prototype.ep=function(c,b,d){this.Zka=!1;null!=d?a.na.O.handleEvent.call(this,
a.na.fa.ERROR,d):c.silent||a.na.O.handleEvent.call(this,a.na.fa.SYNC,b)};a.re.prototype.$C=function(){var a=this.ee.size()-1,b=[],d=[],e,f,g;for(e=0;e<=a;e++)g=this.ee.at(e),f=this.Nj(g,g.attributes),b[e]=f,d[e]=g.id;return{data:b,keys:d,startIndex:this.Ca}};a.re.prototype.getCapability=function(){return null};a.f.j("CollectionTableDataSource.prototype.getCapability",{getCapability:a.re.prototype.getCapability});a.re.prototype.Nj=function(a,b){var d={},e;for(e in b)b.hasOwnProperty(e)&&function(){var b=
e;Object.defineProperty(d,e,{get:function(){return a.get(b)},set:function(d){a.set(b,d,{silent:!0})},enumerable:!0})}();return d}});