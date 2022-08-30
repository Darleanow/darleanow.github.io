//FAIRE HEAPGOTO
//Adapter heihgt en fonction de la div ARTICLE qu'on voit !
const delay = ms => new Promise(res => setTimeout(res, ms));
addEventListener('load', (event) => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
	setTimeout(function(){
		document.querySelectorAll('.loading_screen').forEach(e => e.remove())
	}, 3000);
	setTimeout(function(){
		document.getElementById('animate_this').classList.add('animate');
	},2400);
	setTimeout(function(){
		var element = document.getElementById("body");
  		element.classList.remove("class_remove_onload");
	},3000);
	
});


let theme = "default";
Array.prototype.remove = function() {
	var what, a = arguments,
		L = a.length,
		ax;
	while (L && this.length) {
		what = a[--L];
		while ((ax = this.indexOf(what)) !== -1) {
			this.splice(ax, 1);
		}
	}
	return this;
};

var arYw="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;
(arYw._gsQueue||(arYw._gsQueue=[])).push(function(){"use strict";
var e,t=arYw.document,p=t.defaultView?t.defaultView.getComputedStyle:function(){},g=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,_=-1!==((arYw.navigator||{}).userAgent||"").indexOf("Edge"),C="DrawSVGPlugin",S=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),m=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),w=function(e){for(var t=-1!==(window?window.location.href:"").indexOf(String.fromCharCode(103,114,101,101,110,115,111,99,107))&&-1!==e.indexOf(String.fromCharCode(108,111,99,97,108,104,111,115,116)),r=[S,String.fromCharCode(99,111,100,101,112,101,110,46,105,111),String.fromCharCode(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),String.fromCharCode(99,111,100,101,112,101,110,46,100,101,118),String.fromCharCode(99,115,115,45,116,114,105,99,107,115,46,99,111,109),String.fromCharCode(99,100,112,110,46,105,111),String.fromCharCode(103,97,110,110,111,110,46,116,118),String.fromCharCode(99,111,100,101,99,97,110,121,111,110,46,110,101,116),String.fromCharCode(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),String.fromCharCode(99,101,114,101,98,114,97,120,46,99,111,46,117,107),String.fromCharCode(116,121,109,112,97,110,117,115,46,110,101,116),String.fromCharCode(116,119,101,101,110,109,97,120,46,99,111,109),String.fromCharCode(116,119,101,101,110,108,105,116,101,46,99,111,109),String.fromCharCode(112,108,110,107,114,46,99,111),String.fromCharCode(104,111,116,106,97,114,46,99,111,109),String.fromCharCode(119,101,98,112,97,99,107,98,105,110,46,99,111,109),String.fromCharCode(97,114,99,104,105,118,101,46,111,114,103),String.fromCharCode(99,111,100,101,115,97,110,100,98,111,120,46,105,111),String.fromCharCode(115,116,97,99,107,98,108,105,116,122,46,99,111,109),String.fromCharCode(106,115,102,105,100,100,108,101,46,110,101,116)],o=r.length;
-1<--o;
)if(-1!==e.indexOf(r[o]))return!0;
return t&&window&&window.console&&console.log(String.fromCharCode(87,65,82,78,73,78,71,58,32,97,32,115,112,101,99,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+C+String.fromCharCode(32,105,115,32,114,117,110,110,105,110,103,32,108,111,99,97,108,108,121,44,32,98,117,116,32,105,116,32,119,105,108,108,32,110,111,116,32,119,111,114,107,32,111,110,32,97,32,108,105,118,101,32,100,111,109,97,105,110,32,98,101,99,97,117,115,101,32,105,116,32,105,115,32,97,32,109,101,109,98,101,114,115,104,105,112,32,98,101,110,101,102,105,116,32,111,102,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,46,32,80,108,101,97,115,101,32,115,105,103,110,32,117,112,32,97,116,32,104,116,116,112,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98,47,32,97,110,100,32,116,104,101,110,32,100,111,119,110,108,111,97,100,32,116,104,101,32,39,114,101,97,108,39,32,118,101,114,115,105,111,110,32,102,114,111,109,32,121,111,117,114,32,71,114,101,101,110,83,111,99,107,32,97,99,99,111,117,110,116,32,119,104,105,99,104,32,104,97,115,32,110,111,32,115,117,99,104,32,108,105,109,105,116,97,116,105,111,110,115,46,32,84,104,101,32,102,105,108,101,32,121,111,117,39,114,101,32,117,115,105,110,103,32,119,97,115,32,108,105,107,101,108,121,32,100,111,119,110,108,111,97,100,101,100,32,102,114,111,109,32,101,108,115,101,119,104,101,114,101,32,111,110,32,116,104,101,32,119,101,98,32,97,110,100,32,105,115,32,114,101,115,116,114,105,99,116,101,100,32,116,111,32,108,111,99,97,108,32,117,115,101,32,111,114,32,111,110,32,115,105,116,101,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,46)),t}(window?window.location.host:"");
function l(e,t,r,o,i,s){return r=(parseFloat(r||0)-parseFloat(e||0))*i,o=(parseFloat(o||0)-parseFloat(t||0))*s,Math.sqrt(r*r+o*o)}function c(e){return"string"!=typeof e&&e.nodeType||(e=arYw.TweenLite.selector(e)).length&&(e=e[0]),e}function y(e){if(!e)return 0;
    var t,r,o,i,s,n,a,h=(e=c(e)).tagName.toLowerCase(),f=1,d=1;
    "non-scaling-stroke"===e.getAttribute("vector-effect")&&(d=e.getScreenCTM(),f=Math.sqrt(d.a*d.a+d.b*d.b),d=Math.sqrt(d.d*d.d+d.c*d.c));
try{r=e.getBBox()}catch(e){}if(r&&(r.width||r.height)||"rect"!==h&&"circle"!==h&&"ellipse"!==h||(r={width:parseFloat(e.getAttribute("rect"===h?"width":"circle"===h?"r":"rx")),height:parseFloat(e.getAttribute("rect"===h?"height":"circle"===h?"r":"ry"))},"rect"!==h&&(r.width*=2,r.height*=2)),"path"===h)i=e.style.strokeDasharray,e.style.strokeDasharray="none",t=e.getTotalLength()||0,f!==d&&console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),t*=(f+d)/2,e.style.strokeDasharray=i;
else if("rect"===h)t=2*r.width*f+2*r.height*d;
else if("line"===h)t=l(r.x,r.y,r.x+r.width,r.y+r.height,f,d);
else if("polyline"===h||"polygon"===h)for(o=e.getAttribute("points").match(g)||[],"polygon"===h&&o.push(o[0],o[1]),t=0,s=2;
s<o.length;
s+=2)t+=l(o[s-2],o[s-1],o[s],o[s+1],f,d)||0;
else"circle"!==h&&"ellipse"!==h||(n=r.width/2*f,a=r.height/2*d,t=Math.PI*(3*(n+a)-Math.sqrt((3*n+a)*(n+3*a))));
return t||0}function x(e,t){if(!e)return[0,0];
    e=c(e),t=t||y(e)+1;
    var r=p(e),o=r.strokeDasharray||"",i=parseFloat(r.strokeDashoffset),s=o.indexOf(",");
return s<0&&(s=o.indexOf(" ")),t<(o=s<0?t:parseFloat(o.substr(0,s))||1e-5)&&(o=t),[Math.max(0,-i),Math.max(0,o-i)]}(e=arYw._gsDefine.plugin({propName:"drawSVG",API:2,version:"0.2.0",global:!0,overwriteProps:["drawSVG"],init:function(e,t,r,o){if(!e.getBBox)return!1;
var i,s,n,a,h,f,d,g,l,c,u=y(e)+1;
return this._style=e.style,this._target=e,"function"==typeof t&&(t=t(o,e)),!0===t||"true"===t?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",i=x(e,u),h=t,f=u,d=i[0],-1===(c=h.indexOf(" "))?(g=void 0!==d?d+"":h,l=h):(g=h.substr(0,c),l=h.substr(c+1)),g=-1!==g.indexOf("%")?parseFloat(g)/100*f:parseFloat(g),s=(l=-1!==l.indexOf("%")?parseFloat(l)/100*f:parseFloat(l))<g?[l,g]:[g,l],this._length=u+10,0===i[0]&&0===s[0]?(n=Math.max(1e-5,s[1]-u),this._dash=u+n,this._offset=u-i[1]+n,this._offsetPT=this._addTween(this,"_offset",this._offset,u-s[1]+n,"drawSVG")):(this._dash=i[1]-i[0]||1e-6,this._offset=-i[0],this._dashPT=this._addTween(this,"_dash",this._dash,s[1]-s[0]||1e-5,"drawSVG"),this._offsetPT=this._addTween(this,"_offset",this._offset,-s[0],"drawSVG")),_&&(a=p(e)).strokeLinecap!==a.strokeLinejoin&&(s=parseFloat(a.strokeMiterlimit),this._addTween(e.style,"strokeMiterlimit",s,s+1e-4,"strokeMiterlimit")),this._isNonScaling="non-scaling-stroke"===e.getAttribute("vector-effect"),!0},set:function(e){if(this._firstPT){if(this._isNonScaling){var t,r=y(this._target)+11;
r!==this._length&&(t=r/this._length,this._length=r,this._offsetPT.s*=t,this._offsetPT.c*=t,this._dashPT?(this._dashPT.s*=t,this._dashPT.c*=t):this._dash*=t)}this._super.setRatio.call(this,e),this._style.strokeDashoffset=this._offset,this._style.strokeDasharray=1===e||0===e?this._offset<.001&&this._length-this._dash<=10?"none":this._offset===this._dash?"0px, 999999px":this._dash+"px,"+this._length+"px":this._dash+"px,"+this._length+"px"}}})).getLength=y,e.getPosition=x}),arYw._gsDefine&&arYw._gsQueue.pop()(),function(e){"use strict";
var t=function(){return(arYw.GreenSockGlobals||arYw).DrawSVGPlugin};

"undefined"!=typeof module&&module.exports?(require("../TweenLite.js"),module.exports=t()):"function"==typeof define&&define.amd&&define(["TweenLite"],t)}();
	 var setFilter = function setFilter(path, elem) {
		elem.style.filter = path;
		elem.style.webkitFilter = path;
	  };
  
	  var loaderContainer = document.querySelector('.loader-container'),
		loaderSVG = document.querySelector('#loader'),
		circleL = document.querySelector('#circleL'),
		circleR = document.querySelector('#circleR'),
		jumpArc = document.querySelector('#jump'),
  
		BASE_DURATION_MULTIPLIER = 1.0;
  
	  var jumpArcReflection = jumpArc.cloneNode();
  
	  jumpArcReflection.setAttribute('class', 'reflection'); // setAttribute needs to be used for classing SVG in JS
	  loaderSVG.appendChild(jumpArcReflection);
  
	  setFilter('url("#strokeGlow")', jumpArc);
	  setFilter('url("#strokeGlow")', jumpArcReflection);
  
	  var masterTL = new TimelineMax({
		repeat: -1
	  });
  
	  function jump() {
  
		var jumpTL = new TimelineMax();
  
		jumpTL
		  .set(
			[jumpArc, jumpArcReflection], {
			  drawSVG: '0% 0%'
			}
		  )
		  .set(
			[circleL, circleR], {
			  attr: {
				rx: 0,
				ry: 0
			  }
			}
		  )
		  .to(
			[jumpArc, jumpArcReflection],
			BASE_DURATION_MULTIPLIER * 0.4, {
			  drawSVG: '0% 30%',
			  ease: Linear.easeNone
			}
		  )
  
		// scale up the ripple ovals (with x scaling a bit more since, you know, it's a horizontal oval :-) )
		.to(
		  circleL,
		  BASE_DURATION_MULTIPLIER * 2, {
			attr: {
			  rx: '+=30',
			  ry: '+=10'
			},
			opacity: 0, // ripple, then fade out
			ease: Power1.easeOut
		  },
		  '-=0.1'
		)
  
		.to(
		  [jumpArc, jumpArcReflection],
		  BASE_DURATION_MULTIPLIER * 1.0, {
			drawSVG: '50% 80%',
			ease: Linear.easeNone
		  },
		  '-=1.9'
		)
  
		.to(
		  [jumpArc, jumpArcReflection],
		  BASE_DURATION_MULTIPLIER * 0.7, {
			drawSVG: '100% 100%',
			ease: Linear.easeNone
		  },
		  '-=0.9'
		)
  
		// finish by animating the right circle ripple
		.to(
		  circleR,
		  BASE_DURATION_MULTIPLIER * 2, {
			attr: {
			  rx: '+=30',
			  ry: '+=10'
			},
			opacity: 0, // ripple, then fade out
			ease: Power1.easeOut
		  },
		  '-=0.5'
		);
  
		jumpTL.timeScale(3);
  
		return jumpTL;
  
	  }
  
	  window.onload = function() {
  
		masterTL.add(jump());
  
	  };

async function untoggle() {
	togglerToggledChild.forEach((togglerToggledChild) => {
		togglerToggledChild.classList.toggle("active");
	});
	togglerToggledChild.length = 0;
	togglerToggled.forEach((togglerToggled) => {
		togglerToggled.classList.toggle("active");
	});
	togglerToggled.length = 0;
}

//  Check si un element a une classe
function hasClass(element, cls) {
	return ((" " + element.className + " ").indexOf(" " + cls + " ") > -1);
}

//  Boutton du menu le plus a gauche
const algoBut = document.getElementById("algoBut");
const devBut = document.getElementById("devBut");
const netBut = document.getElementById("netBut");

//  Contenu des categories
const algo = document.getElementById("algo");
const dev = document.getElementById("dev");
const net = document.getElementById("net");

algoBut.onclick = async function() {
	await untoggle();
	document.getElementById('devCONTENT').style.display = 'none';
	document.getElementById('netCONTENT').style.display = 'none';
	document.getElementById('algoCONTENT').style.display = '';
	if (hasClass(algo, "inactive")) {
		algo.classList.remove("inactive");
		algo.classList.add("active");
	}
	if (hasClass(dev, "active")) {
		dev.classList.remove("active");
		dev.classList.add("inactive");
	}
	if (hasClass(net, "active")) {
		net.classList.remove("active");
		net.classList.add("inactive");
	}

}

devBut.onclick = async function() {
	await untoggle();
	document.getElementById('netCONTENT').style.display = 'none';
	document.getElementById('algoCONTENT').style.display = 'none';
	document.getElementById('devCONTENT').style.display = '';
	if (hasClass(dev, "inactive")) {
		dev.classList.remove("inactive");
		dev.classList.add("active");
	}
	if (hasClass(net, "active")) {
		net.classList.remove("active");
		net.classList.add("inactive");
	}
	if (hasClass(algo, "active")) {
		algo.classList.remove("active");
		algo.classList.add("inactive");
	};
}

netBut.onclick = async function() {
	await untoggle();
	document.getElementById('devCONTENT').style.display = 'none';
	document.getElementById('algoCONTENT').style.display = 'none';
	document.getElementById('netCONTENT').style.display = '';
	if (hasClass(net, "inactive")) {
		net.classList.remove("inactive");
		net.classList.add("active");
	}
	if (hasClass(dev, "active")) {
		dev.classList.remove("active");
		dev.classList.add("inactive");
	}
	if (hasClass(algo, "active")) {
		algo.classList.remove("active");
		algo.classList.add("inactive");
	}
}

const childElems = document.querySelectorAll(".childElem");
const togglers = document.querySelectorAll(".toggler");
var childToggled = new Array();
var togglerToggled = new Array();
var togglerToggledChild = new Array();

childElems.forEach((childElem) => {
	childElem.addEventListener("click", () => {
		childElem.classList.toggle("active");


		if (!(childToggled.includes(childElem))) {
			childToggled.push(childElem);
		} else {
			childToggled.remove(childElem);
		}
	});
});

togglers.forEach((toggler) => {
	toggler.addEventListener("click", () => {
		toggler.classList.toggle("active");
		toggler.nextElementSibling.classList.toggle("active");
		if (!(togglerToggled.includes(toggler))) {
			togglerToggled.push(toggler);
		} else {
			togglerToggled.remove(toggler, togglerToggled);
		}
		if (!(togglerToggledChild.includes(toggler.nextElementSibling))) {
			togglerToggledChild.push(toggler.nextElementSibling);
		} else {
			togglerToggledChild.remove(toggler.nextElementSibling);
		}
	});
});
let counterParam = 0;

function showMenu() {
	let menu = document.getElementById("menu_param");
	if (counterParam === 0) {
		menu.style.visibility = "visible";
		document.getElementById('body').style.overflowY = "hidden";
		counterParam++;
	} else {
		counterParam = 0;
		menu.style.visibility = "hidden";
		document.getElementById('body').style.overflowY = "scroll";
	}
}

const popup = document.querySelector('.full-screen');
const screen_hide = document.querySelector('.screen_hide')
function showPopup() {
	popup.classList.remove('hidden');
	screen_hide.classList.remove('screen_hide_inactive');
	screen_hide.classList.add('screen_hide_active');
}

function closePopup() {
	popup.classList.add('hidden');
	screen_hide.classList.add('screen_hide_inactive');
	screen_hide.classList.remove('screen_hide_active');
}

//EXAMPLE
//document.documentElement.style.setProperty('--main_content_title', '#d3d3d3');
//For themes

let second_menu = document.getElementById('second_menu');
let main_content = document.getElementById('main_content')
let border_first_menu = document.getElementById('first_menu');

var defaulT = "#2f2847";

let open = document.getElementById('hide_menu');
let close = document.getElementById('view_menu');

close.onclick = function() {
	close.classList.remove('onn');
	close.classList.add('offf');
	open.classList.remove('offf');
	open.classList.add('onn');
	second_menu.style.display = 'none';
	main_content.style.marginLeft = '30px';
	border_first_menu.style.borderRight = '2px solid ' + defaulT;
}

open.onclick = function() {
	close.classList.remove('offf');
	close.classList.add('onn');
	open.classList.remove('onn');
	open.classList.add('offf');
	second_menu.style.display = '';
	main_content.style.marginLeft = '370px';
	border_first_menu.style.borderRight = '';
}

let apparence_button = document.getElementById("apparence_button")
let feedback_button = document.getElementById("feedback_button")
let soon_button = document.getElementById("soon_button")
let apparence_text = document.getElementById("apparence_text")
let feedback_text = document.getElementById("feedback_text")

apparence_button.addEventListener("click", function() {
	apparence_button.classList.remove("tab_unactive_param");
	apparence_button.classList.add("tab_active_param");
	feedback_button.classList.remove("tab_active_param");
	feedback_button.classList.add("tab_unactive_param");
	soon_button.classList.remove("tab_active_param");
	soon_button.classList.add("tab_unactive_param");
	apparence_text.classList.remove("unactive_content_text");
	apparence_text.classList.add("active_content_text");
	feedback_text.classList.remove("active_content_text");
	feedback_text.classList.add("unactive_content_text");
	soon_text.classList.remove("active_content_text");
	soon_text.classList.add("unactive_content_text");
	
})


feedback_button.addEventListener("click", function() {
	apparence_button.classList.add("tab_unactive_param");
	apparence_button.classList.remove("tab_active_param");
	feedback_button.classList.add("tab_active_param");
	soon_button.classList.remove("tab_active_param");
	soon_button.classList.add("tab_unactive_param");
	feedback_button.classList.remove("tab_unactive_param");
	apparence_text.classList.remove("active_content_text");
	apparence_text.classList.add("unactive_content_text");
	feedback_text.classList.remove("unactive_content_text");
	feedback_text.classList.add("active_content_text");
	soon_text.classList.remove("active_content_text");
	soon_text.classList.add("unactive_content_text");
	
})

soon_button.addEventListener("click",function(){
	apparence_button.classList.add("tab_unactive_param");
	apparence_button.classList.remove("tab_active_param");
	feedback_button.classList.remove("tab_active_param");
	soon_button.classList.add("tab_active_param");
	soon_button.classList.remove("tab_unactive_param");
	feedback_button.classList.add("tab_unactive_param");

	feedback_text.classList.remove("active_content_text");
	feedback_text.classList.add("unactive_content_text");
	apparence_text.classList.remove("active_content_text");
	apparence_text.classList.add("unactive_content_text");

	soon_text.classList.remove("unactive_content_text");
	soon_text.classList.add("active_content_text");
	
})

let fstcrcl = document.getElementById("fstcrcl");
let scdcrcl = document.getElementById("scdcrcl");
let trdcrcl = document.getElementById("trdcrcl");
let frtcrcl = document.getElementById("frtcrcl");
let fftcrcl = document.getElementById("fftcrcl");
let sxtcrcl = document.getElementById("sxtcrcl");
let sptcrcl = document.getElementById("sptcrcl");
let hgtcrcl = document.getElementById("hgtcrcl");


//Changer theme 
function del_icon_and_current_state() {
	document.querySelectorAll('.active_color_accent').forEach(e => e.remove());
	fstcrcl.classList.remove("current_color");
	scdcrcl.classList.remove("current_color");
	trdcrcl.classList.remove("current_color");
	frtcrcl.classList.remove("current_color");
	fftcrcl.classList.remove("current_color");
	sxtcrcl.classList.remove("current_color");
	sptcrcl.classList.remove("current_color");
	hgtcrcl.classList.remove("current_color");
}

fstcrcl.addEventListener("click", function() {
	del_icon_and_current_state();
	fstcrcl.classList.add("current_color");
	const node = document.createElement("i");
	node.className = "fas fa-check active_color_accent";
	document.getElementById("fstcrcl").appendChild(node);
	document.documentElement.style.setProperty('--wrapper_second_left_menu_bordercolor', '#2980b9');
	document.documentElement.style.setProperty('--scroll_bar_color', 'rgb(41, 128, 185)');
	document.documentElement.style.setProperty('--main_content_border_color', 'rgb(60, 118, 156)');
	document.documentElement.style.setProperty('--params_menu_shadow_borders', 'rgb(28, 89, 129)');
	document.documentElement.style.setProperty('--active_color_options_menu', 'rgb(66, 133, 179)');
	document.documentElement.style.setProperty('--big_h', '#60a3bc');
	document.documentElement.style.setProperty('--h_col', '#82ccdd');
	defaulT = '#2980b9'
})

scdcrcl.addEventListener("click", function() {
	del_icon_and_current_state();
	scdcrcl.classList.add("current_color");
	const node = document.createElement("i");
	node.className = "fas fa-check active_color_accent";
	document.getElementById("scdcrcl").appendChild(node);
	document.documentElement.style.setProperty('--wrapper_second_left_menu_bordercolor', '#16a085');
	document.documentElement.style.setProperty('--scroll_bar_color', 'rgb(22, 160, 133)');
	document.documentElement.style.setProperty('--main_content_border_color', 'rgb(22, 160, 133)');
	document.documentElement.style.setProperty('--params_menu_shadow_borders', 'rgb(46, 116, 102)');
	document.documentElement.style.setProperty('--active_color_options_menu', 'rgb(25, 139, 117)');
	document.documentElement.style.setProperty('--big_h', '#079992');
	document.documentElement.style.setProperty('--h_col', '#38ada9');
	defaulT = '#16a085'
})

trdcrcl.addEventListener("click", function() {
	del_icon_and_current_state();
	trdcrcl.classList.add("current_color");
	const node = document.createElement("i");
	node.className = "fas fa-check active_color_accent";
	document.getElementById("trdcrcl").appendChild(node);
	document.documentElement.style.setProperty('--wrapper_second_left_menu_bordercolor', '#27ae60');
	document.documentElement.style.setProperty('--scroll_bar_color', 'rgb(39, 174, 96)');
	document.documentElement.style.setProperty('--main_content_border_color', 'rgb(45, 148, 88)');
	document.documentElement.style.setProperty('--params_menu_shadow_borders', 'rgb(30, 90, 55)');
	document.documentElement.style.setProperty('--active_color_options_menu', 'rgb(59, 131, 89)');
	document.documentElement.style.setProperty('--big_h', '#10ac84');
	document.documentElement.style.setProperty('--h_col', '#1dd1a1');
	defaulT = '#27ae60'
})

frtcrcl.addEventListener("click", function() {
	del_icon_and_current_state();
	frtcrcl.classList.add("current_color");
	const node = document.createElement("i");
	node.className = "fas fa-check active_color_accent";
	document.getElementById("frtcrcl").appendChild(node);
	document.documentElement.style.setProperty('--scroll_bar_color', 'rgb(243, 156, 18)');
	document.documentElement.style.setProperty('--wrapper_second_left_menu_bordercolor', '#f39c12');
	document.documentElement.style.setProperty('--main_content_border_color', 'rgb(207, 143, 40)');
	document.documentElement.style.setProperty('--params_menu_shadow_borders', 'rgb(180, 119, 20)');
	document.documentElement.style.setProperty('--active_color_options_menu', 'rgb(209, 154, 65)');
	document.documentElement.style.setProperty('--big_h', '#fed330');
	document.documentElement.style.setProperty('--h_col', '#fdcb6e');
	defaulT = '#f39c12'
})

fftcrcl.addEventListener("click", function() {
	del_icon_and_current_state();
	fftcrcl.classList.add("current_color");
	const node = document.createElement("i");
	node.className = "fas fa-check active_color_accent";
	document.getElementById("fftcrcl").appendChild(node);
	document.documentElement.style.setProperty('--scroll_bar_color', 'rgb(192, 57, 43)');
	document.documentElement.style.setProperty('--wrapper_second_left_menu_bordercolor', '#c0392b');
	document.documentElement.style.setProperty('--main_content_border_color', 'rgb(190, 69, 55)');
	document.documentElement.style.setProperty('--params_menu_shadow_borders', 'rgb(161, 52, 40)');
	document.documentElement.style.setProperty('--active_color_options_menu', 'rgb(180, 76, 64)');
	document.documentElement.style.setProperty('--big_h', '#eb3b5a');
	document.documentElement.style.setProperty('--h_col', '#fc5c65');
	defaulT = '#c0392b'
})

sxtcrcl.addEventListener("click", function() {
	del_icon_and_current_state();
	sxtcrcl.classList.add("current_color");
	const node = document.createElement("i");
	node.className = "fas fa-check active_color_accent";
	document.getElementById("sxtcrcl").appendChild(node);
	document.documentElement.style.setProperty('--scroll_bar_color', 'rgb(210, 77, 87)');
	document.documentElement.style.setProperty('--wrapper_second_left_menu_bordercolor', '#d24d57');
	document.documentElement.style.setProperty('--main_content_border_color', 'rgb(172, 51, 61)');
	document.documentElement.style.setProperty('--params_menu_shadow_borders', 'rgb(121, 34, 41)');
	document.documentElement.style.setProperty('--active_color_options_menu', 'rgb(116, 44, 50)');
	document.documentElement.style.setProperty('--big_h', '#df5f5f');
	document.documentElement.style.setProperty('--h_col', '#ff7675');
	defaulT = '#d24d57'
})

sptcrcl.addEventListener("click", function() {
	del_icon_and_current_state();
	sptcrcl.classList.add("current_color");
	const node = document.createElement("i");
	node.className = "fas fa-check active_color_accent";
	document.getElementById("sptcrcl").appendChild(node);
	document.documentElement.style.setProperty('--scroll_bar_color', 'rgb(231, 109, 137)');
	document.documentElement.style.setProperty('--wrapper_second_left_menu_bordercolor', '#e76d89');
	document.documentElement.style.setProperty('--main_content_border_color', 'rgb(201, 85, 112)');
	document.documentElement.style.setProperty('--params_menu_shadow_borders', 'rgb(126, 54, 70)');
	document.documentElement.style.setProperty('--active_color_options_menu', 'rgb(168, 75, 97)');
	document.documentElement.style.setProperty('--big_h', '#e84393');
	document.documentElement.style.setProperty('--h_col', '#fd79a8');
	defaulT = '#e76d89'
})

hgtcrcl.addEventListener("click", function() {
	del_icon_and_current_state();
	hgtcrcl.classList.add("current_color");
	const node = document.createElement("i");
	node.className = "fas fa-check active_color_accent";
	document.getElementById("hgtcrcl").appendChild(node);
	document.documentElement.style.setProperty('--scroll_bar_color', 'rgb(85, 74, 139)');
	document.documentElement.style.setProperty('--wrapper_second_left_menu_bordercolor', '#2f2847');
	document.documentElement.style.setProperty('--main_content_border_color', 'rgb(85, 74, 139)');
	document.documentElement.style.setProperty('--params_menu_shadow_borders', 'rgba(81, 36, 110, 0.54)');
	document.documentElement.style.setProperty('--active_color_options_menu', 'rgba(112, 72, 177, 0.774)'); 
	document.documentElement.style.setProperty('--big_h', '#6c5ce7');
	document.documentElement.style.setProperty('--h_col', '#a29bfe');
	defaulT = '#2f2847'
})

var first_theme = document.getElementById("first_theme");
var second_theme = document.getElementById("second_theme");
var third_theme = document.getElementById("third_theme");

function del_active_theme() {
	var elems = document.querySelectorAll(".position_arrow");
	[].forEach.call(elems, function(el) {
		el.classList.remove("active_theme");
	});
}

document.getElementById("default").onclick = function() {
	
	document.querySelectorAll('.delete_helper').forEach(e => e.remove());
	const node = document.createElement("i");
	node.className = "fas fa-check arrow_icon_theme_1 delete_helper";
	document.getElementById("active_theme_1").appendChild(node);
	del_active_theme()
	document.getElementById("active_theme_1").classList.add("active_theme");
	document.documentElement.style.setProperty("--left_menu_background_reduced", "#17171b");
	document.documentElement.style.setProperty("--left_menu_background_expanded", "#121114");
	document.documentElement.style.setProperty("--second_left_menu_background", "#1f1f21");
	document.documentElement.style.setProperty("--main_background", "#29292e");
	document.documentElement.style.setProperty("--second_search_background", "#121115");
	document.documentElement.style.setProperty("--icon_color", "#7e7e7e");
	document.documentElement.style.setProperty("--icon_color_hover", "#999999");
	document.documentElement.style.setProperty("--info_hover_color", "rgb(0, 0, 0)");
	document.documentElement.style.setProperty("--info_hover_textcolor", "rgb(214, 214, 214)");
	document.documentElement.style.setProperty("--wrapper_second_left_menu_backgroundcolor", "#211f22");
	document.documentElement.style.setProperty("--wrapper_second_left_menu_title", "rgb(207, 207, 207)");
	document.documentElement.style.setProperty("--wrapper_second_left_menu_foldercolor", "#7e7e7e");
	document.documentElement.style.setProperty("--tree_view_active_hover", "rgb(19, 19, 19)");
	document.documentElement.style.setProperty("--paragraph_text_color", "rgb(235, 235, 235)");
	document.documentElement.style.setProperty("--main_content_background", "#282629");
	document.documentElement.style.setProperty("--main_content_title", "#d3d3d3");
	document.documentElement.style.setProperty("--left_pan_menu_params", "#181718");
	document.documentElement.style.setProperty("--center_pan_menu_params", "#1b1b1b");
	document.documentElement.style.setProperty("--text_color_in_params_menu", "rgb(236, 236, 236)");
	document.documentElement.style.setProperty("--close_button_color_params_menu", "rgb(129, 128, 128)");
	document.documentElement.style.setProperty("--tooltip_help_back", "rgb(39, 39, 39)");
	document.documentElement.style.setProperty("--color_tooltip_text", "rgb(255,255,255)");
	theme="default";
	
}

document.getElementById("darker").onclick = function() {
	document.querySelectorAll('.delete_helper').forEach(e => e.remove());
	const node = document.createElement("i");
	node.className = "fas fa-check arrow_icon_theme_2 delete_helper";
	document.getElementById("active_theme_2").appendChild(node);
	del_active_theme()
	document.getElementById("active_theme_2").classList.add("active_theme");
	document.documentElement.style.setProperty("--left_menu_background_reduced", "#101013");
	document.documentElement.style.setProperty("--left_menu_background_expanded", "#0e0d0f");
	document.documentElement.style.setProperty("--second_left_menu_background", "#1f1f21");
	document.documentElement.style.setProperty("--main_background", "#18181b");
	document.documentElement.style.setProperty("--second_search_background", "#0d0d0f");
	document.documentElement.style.setProperty("--icon_color", "#6e6e6e");
	document.documentElement.style.setProperty("--icon_color_hover", "#777676");
	document.documentElement.style.setProperty("--info_hover_color", "rgb(0, 0, 0)");
	document.documentElement.style.setProperty("--info_hover_textcolor", "rgb(180, 180, 180)");
	document.documentElement.style.setProperty("--wrapper_second_left_menu_backgroundcolor", "#19171a");
	document.documentElement.style.setProperty("--wrapper_second_left_menu_title", "rgb(182, 182, 182)");
	document.documentElement.style.setProperty("--wrapper_second_left_menu_foldercolor", "#646464");
	document.documentElement.style.setProperty("--tree_view_active_hover", "rgb(14, 13, 13)");
	document.documentElement.style.setProperty("--paragraph_text_color", "rgb(185, 185, 185)");
	document.documentElement.style.setProperty("--main_content_background", "#19181a");
	document.documentElement.style.setProperty("--main_content_title", "#b9b8b8");
	document.documentElement.style.setProperty("--left_pan_menu_params", "#0e0d0e");
	document.documentElement.style.setProperty("--center_pan_menu_params", "#0f0f0f");
	document.documentElement.style.setProperty("--text_color_in_params_menu", "rgb(185, 185, 185)");
	document.documentElement.style.setProperty("--close_button_color_params_menu", "rgb(97, 96, 96)");
	document.documentElement.style.setProperty("--tooltip_help_back", "rgb(39, 39, 39)");
	document.documentElement.style.setProperty("--color_tooltip_text", "rgb(255,255,255)");
	theme="darker";
	
}
document.getElementById("light").onclick = function() {
	document.querySelectorAll('.delete_helper').forEach(e => e.remove());
	const node = document.createElement("i");
	node.className = "fas fa-check arrow_icon_theme_3 delete_helper";
	document.getElementById("active_theme_3").appendChild(node);
	del_active_theme()
	document.getElementById("active_theme_3").classList.add("active_theme");
	document.documentElement.style.setProperty("--left_menu_background_reduced", "#dadada");
	document.documentElement.style.setProperty("--left_menu_background_expanded", "#e0e0e0");
	document.documentElement.style.setProperty("--second_left_menu_background", "#1f1f21");
	document.documentElement.style.setProperty("--main_background", "#e0e0e0");
	document.documentElement.style.setProperty("--second_search_background", "#f1f1f1");
	document.documentElement.style.setProperty("--icon_color", "#202020");
	document.documentElement.style.setProperty("--icon_color_hover", "#999999");
	document.documentElement.style.setProperty("--info_hover_color", "rgb(255, 255, 255)");
	document.documentElement.style.setProperty("--info_hover_textcolor", "rgb(26, 26, 26)");
	document.documentElement.style.setProperty("--wrapper_second_left_menu_backgroundcolor", "#d5d1d6");
	document.documentElement.style.setProperty("--wrapper_second_left_menu_title", "rgb(39, 39, 39)");
	document.documentElement.style.setProperty("--wrapper_second_left_menu_foldercolor", "#1f1f1f");
	document.documentElement.style.setProperty("--tree_view_active_hover", "rgb(252, 252, 252)");
	document.documentElement.style.setProperty("--paragraph_text_color", "rgb(17, 17, 17)");
	document.documentElement.style.setProperty("--main_content_background", "#dfdfdf");
	document.documentElement.style.setProperty("--main_content_title", "#1b1b1b");
	document.documentElement.style.setProperty("--left_pan_menu_params", "#bbb8bb");
	document.documentElement.style.setProperty("--center_pan_menu_params", "#c9c9c9");
	document.documentElement.style.setProperty("--text_color_in_params_menu", "rgb(27, 27, 27)");
	document.documentElement.style.setProperty("--close_button_color_params_menu", "rgb(119, 117, 117)");
	document.documentElement.style.setProperty("--tooltip_help_back", "rgb(241, 241, 241)");
	document.documentElement.style.setProperty("--color_tooltip_text", "rgb(0,0,0)");
	theme="light";
	
}

let heap_goto = document.getElementById('heap_goto');


let stack = document.getElementById('stack');
let stackBut = document.getElementById('stackBut');
let queue = document.getElementById('queue');
let queueBut = document.getElementById('queueBut');
let deque = document.getElementById('deque');
let dequeBut = document.getElementById('dequeBut');

stackBut.onclick = function() {
	stack.classList.remove('off');
	stack.classList.add('on');
	queue.classList.remove('on');
	queue.classList.add('off');
	deque.classList.remove('on');
	deque.classList.add('off');
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

queueBut.onclick = function() {
	stack.classList.remove('on');
	stack.classList.add('off');
	queue.classList.remove('off');
	queue.classList.add('on');
	deque.classList.remove('on');
	deque.classList.add('off');
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

dequeBut.onclick = function() {
	stack.classList.remove('on');
	stack.classList.add('off');
	queue.classList.remove('on');
	queue.classList.add('off');
	deque.classList.remove('off');
	deque.classList.add('on');
	window.scrollTo({ top: 0, behavior: 'smooth' });
};


heap_goto.onclick = function(){

}