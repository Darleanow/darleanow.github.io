//IMPORTANT : STYLISER LE HEADER QUAND IL EST SOUS TAILLE REDUITE 
//LIGNE 248 BOUTTON ME CONTACTER
const scroll = document.querySelectorAll(".scroll");
const maxIndex = 3; //NB DE PAGES
let index = 0;
let animationEnd = true;
let boolUp = 0;
const start = {
	x: 0,
	y: 0
};

function touchStart(event) {
	start.x = event.touches[0].pageX;
	start.y = event.touches[0].pageY;
}

function touchMove(event) {
	const offset = {};
	offset.x = start.x - event.touches[0].pageX;
	offset.y = start.y - event.touches[0].pageY;
	scrollHandler({
		deltaY: offset.y
	});
}

function scrollHandler(e) {
	if (animationEnd) {
		if (e.deltaY > 0) index++;
		else index--;
		if (index < 0) index = 0;
		if (index > scroll.length - 1) index = scroll.length - 1;
		scroll[0].style.marginTop = "-" + index * 100 + "vh";
		animationEnd = false;
		setTimeout(() => animationEnd = true, 450)
	}
}

function keyScroll(e) {
	if (e.key == "ArrowUp") {
		index--;
		if (index < 0) {
			index = 0;
		}
		scroll[0].style.marginTop = "-" + index * 100 + "vh";
		animationEnd = false;
		setTimeout(() => animationEnd = true, 450);
	} else if (e.key == "ArrowDown") {
		if (index < maxIndex) {
			index++;
			scroll[0].style.marginTop = "-" + index * 100 + "vh";
			animationEnd = false;
			setTimeout(() => animationEnd = true, 450);
		}
	}
}

function firstPageButton() {
	index++;
	scroll[0].style.marginTop = "-" + index * 100 + "vh";
	animationEnd = false;
	setTimeout(() => animationEnd = true, 450);
}
document.body.addEventListener('keydown', keyScroll);
document.body.addEventListener("wheel", scrollHandler);
document.body.addEventListener("touchstart", touchStart, false);
document.body.addEventListener("touchmove", touchMove, false);

function scrollToBottom() {
	actualindex = index;
	index = scroll.length - 2;
	scroll[0].style.marginTop = "-" + index * 100 + "vh";
	animationEnd = false;
	setTimeout(() => animationEnd = true, 450);
}

function scrollBackToIndex() {
	index = actualindex;
	scroll[0].style.marginTop = "-" + index * 100 + "vh";
	animationEnd = false;
	setTimeout(() => animationEnd = true, 450);
}

function wait(s) {
	var debut = new Date().getTime();
	var fin = 0;
	while ((fin - debut) < s) {
		fin = new Date().getTime();
	}
}
let successCheck = 0;

function success() {
	Swal.fire({
		title: 'Merci',
		html: 'Votre message a été reçu',
		color: '#EAEAEA',
		icon: 'success',
		showConfirmButton: false,
		timer: 2000,
		background: '#373737'
	})
	successCheck = 1;
}

function waitTwoFunctions() {
	setTimeout(function() {
		if (successCheck == 1) {
			scrollBackToIndex();
		}
	}, 2500);
}
//CLIC SUR LE FORMULAIRE
let formNameValid = 0;
let formMailValid = 0;
let formNumValid = 0;
let formMessageValid = 0;
const formName = document.getElementById("formName");
formName.addEventListener('focus', (event) => {
	event.target.style.background = '';
	event.target.style.borderRadius = '0px';
});
formName.addEventListener('blur', (event) => {
	if (formName.value == "") {
		event.target.style.background = 'rgba(248, 74, 74, 0.8)'
		event.target.style.borderRadius = '10px';
		formNameValid = 0;
	} else {
		formNameValid = 1;
	}
});
const formMail = document.getElementById("formMail");
formMail.addEventListener('focus', (event) => {
	event.target.style.background = '';
	event.target.style.borderRadius = '0px';
});
formMail.addEventListener('blur', (event) => {
	const mail = formMail.value;
	let mailValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(mail);
	if (mailValid == true) {
		event.target.style.background = '';
		event.target.style.borderRadius = '0px';
		formMailValid = 1;
	} else {
		event.target.style.background = 'rgba(248, 74, 74, 0.8)'
		event.target.style.borderRadius = '10px';
		formMailValid = 0;
	}
});
const formNum = document.getElementById("formNum");
formNum.addEventListener('focus', (event) => {
	event.target.style.background = '';
	event.target.style.borderRadius = '0px';
});
formNum.addEventListener('blur', (event) => {
	const num = formNum.value;
	let isnum = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(num)
	if (isnum == true) {
		event.target.style.background = '';
		event.target.style.borderRadius = '0px';
		formNumValid = 1;
	} else {
		event.target.style.background = 'rgba(248, 74, 74, 0.8)'
		event.target.style.borderRadius = '10px';
		formNumValid = 0;
	}
});
const formMessage = document.getElementById("formMessage");
formMessage.addEventListener('focus', (event) => {
	event.target.style.background = '';
	event.target.style.borderRadius = '0px';
	formMessageValid = 1;
});
formMessage.addEventListener('blur', (event) => {
	if (formMessage.value == "") {
		event.target.style.background = 'rgba(248, 74, 74, 0.8)'
		event.target.style.borderRadius = '10px';
		formMessageValid = 0;
	}
});
//BOUTTON ENVOYER
document.getElementById("sendButton").onclick = function() {
	if (formMailValid == 1 && formMessageValid == 1 && formNameValid == 1 && formNumValid == 1) {
		success();
		waitTwoFunctions();
	} else {
		if (formNameValid == 0) {
			Swal.fire('Oops...', 'Le format entré pour le nom est invalide.', 'error')
		} else if (formMailValid == 0) {
			Swal.fire('Oops...', "Le format entré pour l'addresse mail est invalide.", 'error')
		} else if (formNumValid == 0) {
			Swal.fire('Oops...', "Le format entré pour le numéro de téléphone est invalide.", 'error')
		} else {
			Swal.fire('Oops...', "Votre demande de contact doit contenir un message.", 'error')
		}
	}
}
document.getElementById("cancelButton").onclick = function() {
	scrollBackToIndex();
}
document.getElementById("contactNAV").onclick = function ()
{
  scrollToBottom();
}
document.getElementById("knowMore").onclick = function() {
	firstPageButton();
}

document.getElementById("contentNAV").onclick = function(){
  index=1;
  scroll[0].style.marginTop = "-" + index * 100 + "vh";
  animationEnd = false;
  setTimeout(() => animationEnd = true,450);
}
document.getElementById("aProposNAV").onclick =function(){
    actualindex = index;
    index = scroll.length - 1;
    scroll[0].style.marginTop = "-" + index * 100 + "vh";
    animationEnd = false;
    setTimeout(() => animationEnd = true, 450);
}
document.getElementById('aProposButton').onclick = function(){
	index = 4;
	scroll[0].style.marginTop =  "-" + index * 100 + "vh";
	animationEnd = false;
	setTimeout(() => animationEnd = true,450);
}
document.getElementById("goToHome").onclick = function(){
  index=0;
  scroll[0].style.marginTop = "-" + index * 100 + "vh";
  animationEnd = false;
  setTimeout(() => animationEnd = true,450);
}

document.getElementById('a_venir_card').onclick = function(){
    Swal.fire('Bientôt...', '- Projets (en cours)<br>- Tutoriels<br>- Theme blanc pour webApp<br>- format entierement responsive', 'warning')
}