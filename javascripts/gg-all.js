jQuery(function(){function o(o){return g.x=o.clientX,g.y=o.clientY,g.matrixTransform(c.getScreenCTM().inverse())}storage=$.localStorage,svgBoard=new componentHightLighter,svgBoard.setKeyframe("blink"),svgBoard.setButtonAnchor("b-"),svgBoard.setLocalStorage(storage),allComponents=[],jQuery.each($("#components").find("g"),function(o,e){allComponents.push(e.id)}),svgBoard.addComponents($("#components").find("g"));var e=svgPanZoom("#pcb",{panEnabled:!1,zoomEnabled:!0,controlIconsEnabled:!1,mouseWheelZoomEnabled:!1,dblClickZoomEnabled:!1,center:!1,zoomScaleSensitivity:3}),t=$(".step"),n=t.length,a=1;t.slice(a).hide(),$(".pagination-page").pagination({items:n,itemsOnPage:a,displayedPages:5,edges:0,hrefTextPrefix:"#step-",cssStyle:"dark-theme",onPageClick:function(o){var n=a*(o-1),r=n+a;t.hide().slice(n,r).show(),e.reset(),currentComponents=t.slice(n,r)[0].getAttribute("id").split("_"),svgBoard.addComponents(allComponents),svgBoard.addCurrentComponents(currentComponents),svgBoard.draw()}});var r=function(){var o=window.location.hash||"#step-1";o=o.match(/^#step-(\d+)$/),o&&$("#pagination").pagination("selectPage",parseInt(o[1]))};$(window).bind("popstate",r),r();var i=e.getSizes().realZoom,s=!1,l=function(o,t){1==s?(e.reset(),s=!1):(e.pan({x:0,y:0}),svgBoard.isFlipped()?(zoom_atx=o*i+e.getSizes().width/2,zoom_aty=-(t*i)+e.getSizes().height/2):(zoom_atx=-(o*i)+e.getSizes().width/2,zoom_aty=-(t*i)+e.getSizes().height/2),e.pan({x:zoom_atx,y:zoom_aty}),e.zoom(3),s=!0)},c=document.querySelector("svg"),g=c.createSVGPoint();c.addEventListener("click",function(e){var t=o(e);l(t.x,t.y)},!1);var d=0,p=function(o){hPoints=[];for(var e=0;e<o.length;e++){var t=[];hx=$("#"+o[e]).children("text:first").attr("x"),hy=$("#"+o[e]).children("text:first").attr("y"),t.push(hx),t.push(hy),hPoints.push(t)}return hPoints},h=function(o,t){s=!0,e.reset(),e.pan({x:0,y:0}),x=o[t][0],y=o[t][1],svgBoard.isFlipped()?(zoom_atx=x*i+e.getSizes().width/2,zoom_aty=-(y*i)+e.getSizes().height/2):(zoom_atx=-(x*i)+e.getSizes().width/2,zoom_aty=-(y*i)+e.getSizes().height/2),e.pan({x:zoom_atx,y:zoom_aty}),e.zoom(3)},m=new window.keypress.Listener;m.simple_combo("space",function(){d=0,s=!1,e.reset(),$(".pagination-page").pagination("nextPage")}),m.simple_combo("b",function(){d=0,s=!1,e.reset(),$(".pagination-page").pagination("prevPage")}),m.simple_combo("esc",function(){s=!1,e.reset()}),m.simple_combo("p",function(){highLightedPoints=p(svgBoard.getCurrentComponents()),h(highLightedPoints,d),d++,d==highLightedPoints.length&&(d=0)}),$("#pref-board-color").colorselector({callback:function(o,e,t){$("#colorValue").val(o),$("#colorColor").val(e),$("#colorTitle").val(t),svgBoard.setPreferencesBoardColor(e)}}),$("#pref-done-color").colorselector({callback:function(o,e,t){$("#colorValue").val(o),$("#colorColor").val(e),$("#colorTitle").val(t),svgBoard.setPreferencesDoneColor(e)}}),$("#pref-todo-color").colorselector({callback:function(o,e,t){$("#colorValue").val(o),$("#colorColor").val(e),$("#colorTitle").val(t),svgBoard.setPreferencesTodoColor(e)}})});