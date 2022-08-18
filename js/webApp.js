//ONCLICK SUR EXPAND : 
//Aggrandir la div
//



//REMPLACER CLASSE
//var btn = document.getElementById("btn");
//var box = document.getElementById("box");

//btn.addEventListener("click", function() {
//  box.classList.remove("class1");
//  box.classList.add("class2");
//});

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function untoggle(){
    togglerToggledChild.forEach((togglerToggledChild)=>{
        togglerToggledChild.classList.toggle("active");
    });
    togglerToggledChild.length = 0;
    togglerToggled.forEach((togglerToggled)=>{
        togglerToggled.classList.toggle("active");
    });
    togglerToggled.length = 0;
}
//  Check si un element a une classe
function hasClass(element, cls) {
    return ((" " + element.className + " ").indexOf(" " + cls + " ") > -1);
}

//  Boutton du menu le plus a gauche
const algoBut   = document.getElementById("algoBut");
const devBut    = document.getElementById("devBut");
const netBut    = document.getElementById("netBut");

//  Contenu des categories
const algo  = document.getElementById("algo");
const dev   = document.getElementById("dev");
const net   = document.getElementById("net");


algoBut.onclick = async function(){
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


    if (!(childToggled.includes(childElem))){childToggled.push(childElem);}
    else{childToggled.remove(childElem);}
  });
});

togglers.forEach((toggler) => {
  toggler.addEventListener("click", () => {
    toggler.classList.toggle("active");
    toggler.nextElementSibling.classList.toggle("active");


    if (!(togglerToggled.includes(toggler))){togglerToggled.push(toggler);}
    else{togglerToggled.remove(toggler,togglerToggled);}
    if (!(togglerToggledChild.includes(toggler.nextElementSibling))){togglerToggledChild.push(toggler.nextElementSibling);}
    else{togglerToggledChild.remove(toggler.nextElementSibling);}
  });
});
let counterParam = 0;
function showMenu(){
    let menu=document.getElementById("menu_param");
    if (counterParam===0){
        menu.style.visibility="visible";
        document.getElementById('body').style.overflowY = "hidden";
        counterParam++;
    }
    else{
        counterParam=0;
        menu.style.visibility="hidden";
        document.getElementById('body').style.overflowY = "scroll";
    }
    
    
}
const popup = document.querySelector('.full-screen');

function showPopup(){
  popup.classList.remove('hidden');
}

function closePopup(){
  popup.classList.add('hidden');
}

let actualTheme = 0;
function changeTheme(){

    if (actualTheme==0){
        actualTheme=1;
        document.documentElement.style.setProperty('--left_menu_background_reduced', '#dbdbdb');
        document.documentElement.style.setProperty('--left_menu_background_expanded', '#d6d6d6');
        document.documentElement.style.setProperty('--second_left_menu_background', '#aaaaaa');
        document.documentElement.style.setProperty('--main_background', '#cacaca');
        document.documentElement.style.setProperty('--second_search_background', '#e3e1e7');
        document.documentElement.style.setProperty('--icon_color', '#202020');
        document.documentElement.style.setProperty('--icon_color_hover', '#3b3b3b');
        document.documentElement.style.setProperty('--info_hover_textcolor', 'rgb(196, 196, 196)');
        document.documentElement.style.setProperty('--wrapper_second_left_menu_bordercolor', '#7162a3');
        document.documentElement.style.setProperty('--wrapper_second_left_menu_backgroundcolor', '#cccccc');
        document.documentElement.style.setProperty('--wrapper_second_left_menu_title', 'rgb(19, 19, 19)');
        document.documentElement.style.setProperty('--wrapper_second_left_menu_foldercolor', '#161616');
        document.documentElement.style.setProperty('--tree_view_active_hover', 'rgb(153, 153, 153)');
        document.documentElement.style.setProperty('--scroll_bar_color', '#554a8b');
        document.documentElement.style.setProperty('--main_content_border_color', '#554a8b');
        document.documentElement.style.setProperty('--paragraph_text_color', 'rgb(19, 19, 19)');
        document.documentElement.style.setProperty('--main_content_background', '#b8b8b8');
        document.documentElement.style.setProperty('--main_content_title', '#1a1a1a');
    }
    else if (actualTheme==1){
        actualTheme=0;
        document.documentElement.style.setProperty('--left_menu_background_reduced', '#17171b');
        document.documentElement.style.setProperty('--left_menu_background_expanded', '#121114');
        document.documentElement.style.setProperty('--second_left_menu_background', '#1f1f21');
        document.documentElement.style.setProperty('--main_background', '#29292e');
        document.documentElement.style.setProperty('--second_search_background', '#121115');
        document.documentElement.style.setProperty('--icon_color', '#7e7e7e');
        document.documentElement.style.setProperty('--icon_color_hover', '#999999');
        document.documentElement.style.setProperty('--info_hover_textcolor', 'rgb(214, 214, 214)');
        document.documentElement.style.setProperty('--wrapper_second_left_menu_bordercolor', '#2f2847');
        document.documentElement.style.setProperty('--wrapper_second_left_menu_backgroundcolor', '#211f22');
        document.documentElement.style.setProperty('--wrapper_second_left_menu_title', 'rgb(207, 207, 207)');
        document.documentElement.style.setProperty('--wrapper_second_left_menu_foldercolor', '#7e7e7e');
        document.documentElement.style.setProperty('--tree_view_active_hover', 'rgb(19, 19, 19)');
        document.documentElement.style.setProperty('--scroll_bar_color', '#554a8b');
        document.documentElement.style.setProperty('--main_content_border_color', '#554a8b');
        document.documentElement.style.setProperty('--paragraph_text_color', 'rgb(235, 235, 235)');
        document.documentElement.style.setProperty('--main_content_background', '#282629');
        document.documentElement.style.setProperty('--main_content_title', '#d3d3d3');
    }
}


let stack = document.getElementById('stack');let stackBut = document.getElementById('stackBut');
let queue = document.getElementById('queue');let queueBut = document.getElementById('queueBut');
let deque = document.getElementById('deque');let dequeBut = document.getElementById('dequeBut');


stackBut.onclick = function(){
    stack.classList.remove('off');stack.classList.add('on');
    queue.classList.remove('on');queue.classList.add('off');
    deque.classList.remove('on');deque.classList.add('off');
};
queueBut.onclick = function(){
    stack.classList.remove('on');stack.classList.add('off');
    queue.classList.remove('off');queue.classList.add('on');
    deque.classList.remove('on');deque.classList.add('off');
};
dequeBut.onclick = function(){
    stack.classList.remove('on');stack.classList.add('off');
    queue.classList.remove('on');stack.classList.add('off');
    deque.classList.remove('off');deque.classList.add('on');
};

let second_menu = document.getElementById('second_menu');
let main_content = document.getElementById('main_content')
let border_first_menu = document.getElementById('first_menu');

let open = document.getElementById('hide_menu');
let close = document.getElementById('view_menu');

close.onclick = function(){
    close.classList.remove('on');close.classList.add('off');
    open.classList.remove('off');open.classList.add('on');
    second_menu.style.display ='none';
    main_content.style.marginLeft = '30px';
    border_first_menu.style.borderRight = '2px solid #2f2847';
}
open.onclick = function(){
    close.classList.remove('off');close.classList.add('on');
    open.classList.remove('on');open.classList.add('off');
    second_menu.style.display = '';
    main_content.style.marginLeft = '370px';
    border_first_menu.style.borderRight = '';
}