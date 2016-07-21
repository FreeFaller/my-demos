/**
 *事件绑定
 */
var addEvent = function(element,type,handler){
    if (element.addEventListener) {
        element.addEventListener(type,handler,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,handler);
    }else{
        element["on"+type]=handler;  
    }
}
/**
 *技术评分
 */
var __skillScore = function(e){
    if (e.target.id == "skill-score") {return};
    var _element = e.target;
    var _skillScore = _element.getAttribute('data-num')
    var _node = document.getElementById('skill-score').getElementsByTagName('li');
    for (var i = _node.length; i > _skillScore; i--) {
        _node[i-1].getElementsByTagName('i')[0].classList.remove("u-icon-star");
        _node[i-1].getElementsByTagName('i')[0].classList.add("u-icon-eStar");
    };
    for (var m = 0; m < _skillScore; m++) {
        _node[m].getElementsByTagName('i')[0].classList.remove("u-icon-eStar");
        _node[m].getElementsByTagName('i')[0].classList.add("u-icon-star");
    };
}
/**
 *服务评分
 */
var __serveJudge = function(e){
    if (e.target.id == "serve-judge") {return};
    var _element = e.target;
    var _serveScore = _element.getAttribute('data-num')
    var _node = document.getElementById('serve-judge').getElementsByTagName('li');
    for (var i = _node.length; i > _serveScore; i--) {
        _node[i-1].getElementsByTagName('i')[0].classList.remove("u-icon-star");
        _node[i-1].getElementsByTagName('i')[0].classList.add("u-icon-eStar");
    };
    for (var m = 0; m < _serveScore; m++) {
        _node[m].getElementsByTagName('i')[0].classList.remove("u-icon-eStar");
        _node[m].getElementsByTagName('i')[0].classList.add("u-icon-star");
    };
}
var submitJudge = function(){
    alert('感谢您的评价');
}
var skill = document.getElementById('skill-score');
var serve = document.getElementById('serve-judge');
var submit = document.getElementById('submit');

addEvent(skill,"click",__skillScore);
addEvent(serve,"click",__serveJudge);
addEvent(submit,"click",submitJudge);