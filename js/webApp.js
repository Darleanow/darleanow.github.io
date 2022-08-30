//FAIRE HEAPGOTO
//Adapter heihgt en fonction de la div ARTICLE qu'on voit !
addEventListener('load', (event) => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
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
	close.classList.remove('on');
	close.classList.add('off');
	open.classList.remove('off');
	open.classList.add('on');
	second_menu.style.display = 'none';
	main_content.style.marginLeft = '30px';
	border_first_menu.style.borderRight = '2px solid ' + defaulT;
}

open.onclick = function() {
	close.classList.remove('off');
	close.classList.add('on');
	open.classList.remove('on');
	open.classList.add('off');
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