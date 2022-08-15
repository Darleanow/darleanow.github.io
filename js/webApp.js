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