$(document).ready(function(){toggleMenu()})
function toggleMenu(){const sidebar=$(".js-sidebar"),overlay=$(".js-overlay"),burger=$(".js-burger"),sidebarClose=$(".js-close"),body=$("body");burger.on("click",function(e){if(sidebar.hasClass("is-active")){menuClose()}else{menuOpen()}});sidebarClose.on('click',function(){menuClose()})
var menuOpen=function(){burger.removeClass("is-active").addClass("is-active");overlay.add(sidebar).addClass("is-active");body.css({overflowY:"hidden"})};var menuClose=function(){burger.add(overlay).add(sidebar).removeClass("is-active");body.removeAttr("style")}}
var tl=new TimelineMax();tl.fromTo('.header__logo, .social__list, .btn-login',0.6,{y:-20,opacity:0},{y:0,opacity:1}).staggerFromTo('.nav__link, .btn-main',0.1,{opacity:0,y:-30},{opacity:1,y:0},0.01).fromTo('.intro__in, .intro__form, .contacts',0.7,{y:20,opacity:0},{y:0,opacity:1},"-=0.77")
const acc=document.querySelectorAll(".js-link");var i,_prevClick;for(i=0;i<acc.length;i++){acc[i].addEventListener('click',function(e){e.preventDefault();if(_prevClick&&_prevClick!==this){_prevClick.classList.remove("is-active");_prevClick.nextElementSibling.style.maxHeight=''}
this.classList.toggle("is-active");let panel=this.nextElementSibling;if(panel.style.maxHeight){panel.style.maxHeight=''}else{panel.style.maxHeight=panel.scrollHeight+"px"}
_prevClick=this})}
var items=document.querySelectorAll('.sidebar__list-item')
items.forEach(function(item,i){let delay=0.1+i*0.11;item.style.animationDelay=delay+'s'})
