var componentHightLighter=function(){};componentHightLighter.prototype=function(){function t(t,n){return n=jQuery.grep(n,function(n){return n!==t})}function n(){return P="bottom"==w}function i(t){L=t}function o(){return L}function e(t){K=t}function s(t){H=t}function r(){return H}function c(t){F=t,H.set("doneColor",F),p()}function l(t){x=t,H.set("todoColor",x),p()}function a(t){B=t,H.set("boardColor",B),p()}function u(t,n){$("#"+t).css("color",n)}function f(n){Q=t("",n)}function d(n){S=t("",n)}function g(){return S}function y(){return Q}function p(){w=$("#"+S[0]).children("use").attr("class"),"bottom"==w?($("#board").find("svg").css("transform","scale(-1,1)"),$("g#all").find("text.bottom").css("visibility","visible"),$("g#all").find("text.top").css("visibility","hidden"),$("g#all").find("use.bottom").css("visibility","visible"),$("g#all").find("use.top").css("visibility","hidden")):($("#board").find("svg").css("transform",""),$("g#all").find("text.bottom").css("visibility","hidden"),$("g#all").find("text.top").css("visibility","visible"),$("g#all").find("use.bottom").css("visibility","hidden"),$("g#all").find("use.top").css("visibility","visible")),$("#all rect").css("fill",H.get("boardColor")),jQuery.each(Q,function(t,n){j(n),H.isSet(n)?u(n,F):u(n,x)}),jQuery.each(S,function(t,n){b(K,n),h(n),H.isSet(n)||C(n)})}function b(t,n){H.isSet(n)?$("."+t+n).find("span").attr("class","glyphicon glyphicon-ok green"):$("."+t+n).find("span").attr("class","glyphicon glyphicon-remove red")}function h(t){$("."+K+t).off("click"),$("."+K+t).click({item:t},function(n){H.isSet(t)?(v(n.data.item),$("."+K+t).find("span").attr("class","glyphicon glyphicon-remove red")):(m(n.data.item),$("."+K+t).find("span").attr("class","glyphicon glyphicon-ok green"))})}function m(n){jQuery.inArray(n,k)<0&&(k.push(n),H.set(n,"done")),jQuery.inArray(n,A)>=0&&(A=t(n,A)),j(n),$("#"+n).css("color",F)}function v(n){jQuery.inArray(n,A)<0&&(A.push(n),H.remove(n)),jQuery.inArray(n,k)>=0&&(k=t(n,k)),C(n),$("#"+n).css("color",x)}function C(t){$("#"+t).attr("class",L)}function j(t){$("#"+t).attr("class","noblink")}var Q=[],S=[],k=[],A=[],F="#13795B",x="#FFF",B="",L="",P="false",H="",K="",w="";return{isFlipped:n,draw:p,bindButton:h,addComponents:f,addCurrentComponents:d,getCurrentComponents:g,getComponents:y,setButtonAnchor:e,setKeyframe:i,getKeyFrame:o,setLocalStorage:s,getLocalStorage:r,setPreferencesDoneColor:c,setPreferencesTodoColor:l,setPreferencesBoardColor:a}}();