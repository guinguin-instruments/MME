/**
* simplePagination.js v1.6
* A simple jQuery pagination plugin.
* http://flaviusmatis.github.com/simplePagination.js/
*
* Copyright 2012, Flavius Matis
* Released under the MIT license.
* http://flaviusmatis.github.com/license.html
*/
!function(e){var t={init:function(a){var s=e.extend({items:1,itemsOnPage:1,pages:0,displayedPages:5,edges:2,currentPage:0,hrefTextPrefix:"#page-",hrefTextSuffix:"",prevText:"Prev",nextText:"Next",ellipseText:"&hellip;",cssStyle:"light-theme",listStyle:"",labelMap:[],selectOnClick:!0,nextAtFront:!1,invertPageOrder:!1,useStartEdge:!0,useEndEdge:!0,onPageClick:function(){},onInit:function(){}},a||{}),n=this;return s.self=this,s.pages=s.pages?s.pages:Math.ceil(s.items/s.itemsOnPage)?Math.ceil(s.items/s.itemsOnPage):1,s.currentPage?s.currentPage=s.currentPage-1:s.currentPage=s.invertPageOrder?s.pages-1:0,s.halfDisplayed=s.displayedPages/2,this.each(function(){n.addClass(s.cssStyle+" simple-pagination").data("pagination",s),t._draw.call(n)}),s.onInit(),this},selectPage:function(e){return t._selectPage.call(this,e-1),this},prevPage:function(){var e=this.data("pagination");return e.invertPageOrder?e.currentPage<e.pages-1&&t._selectPage.call(this,e.currentPage+1):e.currentPage>0&&t._selectPage.call(this,e.currentPage-1),this},nextPage:function(){var e=this.data("pagination");return e.invertPageOrder?e.currentPage>0&&t._selectPage.call(this,e.currentPage-1):e.currentPage<e.pages-1&&t._selectPage.call(this,e.currentPage+1),this},getPagesCount:function(){return this.data("pagination").pages},setPagesCount:function(e){this.data("pagination").pages=e},getCurrentPage:function(){return this.data("pagination").currentPage+1},destroy:function(){return this.empty(),this},drawPage:function(e){var a=this.data("pagination");return a.currentPage=e-1,this.data("pagination",a),t._draw.call(this),this},redraw:function(){return t._draw.call(this),this},disable:function(){var e=this.data("pagination");return e.disabled=!0,this.data("pagination",e),t._draw.call(this),this},enable:function(){var e=this.data("pagination");return e.disabled=!1,this.data("pagination",e),t._draw.call(this),this},updateItems:function(e){var a=this.data("pagination");a.items=e,a.pages=t._getPages(a),this.data("pagination",a),t._draw.call(this)},updateItemsOnPage:function(e){var a=this.data("pagination");return a.itemsOnPage=e,a.pages=t._getPages(a),this.data("pagination",a),t._selectPage.call(this,0),this},_draw:function(){var a,s,n=this.data("pagination"),i=t._getInterval(n);t.destroy.call(this),s="function"==typeof this.prop?this.prop("tagName"):this.attr("tagName");var r="UL"===s?this:e("<ul"+(n.listStyle?' class="'+n.listStyle+'"':"")+"></ul>").appendTo(this);if(n.prevText&&t._appendItem.call(this,n.invertPageOrder?n.currentPage+1:n.currentPage-1,{text:n.prevText,classes:"prev",attr:{rel:"prev"}}),n.nextText&&n.nextAtFront&&t._appendItem.call(this,n.invertPageOrder?n.currentPage-1:n.currentPage+1,{text:n.nextText,classes:"next",attr:{rel:"next"}}),""!=window.location.hash&&n.hrefTextPrefix&&(window.location.hash=n.hrefTextPrefix+(n.currentPage+1)+n.hrefTextSuffix),n.invertPageOrder){if(i.end<n.pages&&n.edges>0){if(n.useStartEdge){var l=Math.max(n.pages-n.edges,i.end);for(a=n.pages-1;a>=l;a--)t._appendItem.call(this,a)}n.pages-n.edges>i.end&&n.pages-n.edges-i.end!=1?r.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):n.pages-n.edges-i.end==1&&t._appendItem.call(this,i.end)}}else if(i.start>0&&n.edges>0){if(n.useStartEdge){var g=Math.min(n.edges,i.start);for(a=0;a<g;a++)t._appendItem.call(this,a)}n.edges<i.start&&i.start-n.edges!=1?r.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):i.start-n.edges==1&&t._appendItem.call(this,n.edges)}if(n.invertPageOrder)for(a=i.end-1;a>=i.start;a--)t._appendItem.call(this,a);else for(a=i.start;a<i.end;a++)t._appendItem.call(this,a);if(n.invertPageOrder){if(i.start>0&&n.edges>0&&(n.edges<i.start&&i.start-n.edges!=1?r.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):i.start-n.edges==1&&t._appendItem.call(this,n.edges),n.useEndEdge)){var g=Math.min(n.edges,i.start);for(a=g-1;a>=0;a--)t._appendItem.call(this,a)}}else if(i.end<n.pages&&n.edges>0&&(n.pages-n.edges>i.end&&n.pages-n.edges-i.end!=1?r.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):n.pages-n.edges-i.end==1&&t._appendItem.call(this,i.end),n.useEndEdge)){var l=Math.max(n.pages-n.edges,i.end);for(a=l;a<n.pages;a++)t._appendItem.call(this,a)}n.nextText&&!n.nextAtFront&&t._appendItem.call(this,n.invertPageOrder?n.currentPage-1:n.currentPage+1,{text:n.nextText,classes:"next",attr:{rel:"next"}})},_getPages:function(e){return Math.ceil(e.items/e.itemsOnPage)||1},_getInterval:function(e){return{start:Math.ceil(e.currentPage>e.halfDisplayed?Math.max(Math.min(e.currentPage-e.halfDisplayed,e.pages-e.displayedPages),0):0),end:Math.ceil(e.currentPage>e.halfDisplayed?Math.min(e.currentPage+e.halfDisplayed,e.pages):Math.min(e.displayedPages,e.pages))}},_appendItem:function(a,s){var n,i,r=this,l=r.data("pagination"),g=e("<li></li>"),d=r.find("ul");if(a=a<0?0:a<l.pages?a:l.pages-1,n={text:a+1,classes:""},l.labelMap.length&&l.labelMap[a]&&(n.text=l.labelMap[a]),n=e.extend(n,s||{}),a==l.currentPage||l.disabled?(l.disabled?g.addClass("disabled"):g.addClass("active"),i=e('<span class="current">'+n.text+"</span>")):(i=e('<a href="'+l.hrefTextPrefix+(a+1)+l.hrefTextSuffix+'" class="page-link">'+n.text+"</a>"),i.click(function(e){return t._selectPage.call(r,a,e)})),n.classes&&i.addClass(n.classes),n.attr)for(var p in n.attr)n.attr.hasOwnProperty(p)&&i.attr(p,n.attr[p]);g.append(i),d.length?d.append(g):r.append(g)},_selectPage:function(e,a){var s=this.data("pagination");return s.currentPage=e,s.selectOnClick&&t._draw.call(this),s.onPageClick(e+1,a)}};e.fn.pagination=function(a){return t[a]&&"_"!=a.charAt(0)?t[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void e.error("Method "+a+" does not exist on jQuery.pagination"):t.init.apply(this,arguments)}}(jQuery);