const MENU = document.getElementById('navigation');
const SECTIONS = document.querySelectorAll('section');
const HEADER = document.getElementById('logo__text');

const CLOSE_BUTTON = document.getElementById('close-btn');
const SLIDER_RIGHT = document.getElementById('slides__button-right');
const SLIDER_LEFT = document.getElementById('slides__button-left');

const PHONES = document.getElementById('slide__one js');
const H_PHONE = document.getElementById('hor__phone');
const H_PHONE_LINK = "./assets/images/features/phone-horizontal.png";
const H_PHONE_LINK_BLACK = "./assets/images/features/phone-horizontal-black.png";
const V_PHONE = document.getElementById('vert__phone');
const V_PHONE_LINK = "./assets/images/features/phone-vertical.png";
const V_PHONE_LINK_BLACK = "./assets/images/features/phone-vertical-black.png";

const SETTINGS = document.getElementById('settings');
const PORTFOLIO_IMGS = document.getElementById('images__wrap');
const INPUT = document.getElementById('inrut__wrap');
const BUTTON = document.getElementById('form_submit');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('navigation__selected'));
    event.target.classList.add('navigation__selected');
    let sectionId = document.getElementById(event.target.classList[0].toString());
    if(sectionId) { 
       sectionId.scrollIntoView(false);
    }  
});

HEADER.addEventListener('click', () => {
	if(window.scrollY > 0){
		window.scrollBy(0, -(window.scrollY));
	}
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('navigation__selected'));
    let home = document.querySelector('#navigation>li>a');
	home.classList.add('navigation__selected');	
}); 

window.addEventListener('scroll', () => {     
    let index = SECTIONS.length;
    while(--index && window.scrollY + 50 < SECTIONS[index].offsetTop) {}  
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('navigation__selected'));
    MENU.querySelectorAll('a')[index].classList.add('navigation__selected');
});

PHONES.addEventListener('click', (event) => {
    if (event.target.classList.contains("off")) {
        event.target.src =  event.target.classList.contains("horizontal") ? H_PHONE_LINK : V_PHONE_LINK;
        event.target.classList.remove('off');
    } else {
        event.target.src =  event.target.classList.contains("horizontal") ? H_PHONE_LINK_BLACK : V_PHONE_LINK_BLACK;
        event.target.classList.add('off');
    }    
});




/* let switchSlider = () => {
    document.getElementById('inrut__wrap');
    
    let pointer = 0;
    let figures = document.getElementsByTagName('figure');





    for (let i = 0; i < figures.length; i++) {
        if (figures[i].classList.contains('visible')) {
            figures[i].classList.add('hidden');
            figures[i].classList.remove('visible');
            pointer = i;
        }
    }
    if (++pointer === figures.length) {
        pointer = 0;
    }
    
    let isBlue = figures[pointer].classList.contains('blue');
    SLIDER_LEFT.src = isBlue ? './assets/images/features/left-blue.png' : './assets/images/features/left.png';
    SLIDER_RIGHT.src = isBlue ? './assets/images/features/right-blue.png' : './assets/images/features/right.png'; 
    document.getElementById('main').style.backgroundColor = isBlue ? "#648BF0" :  "#f06c64";
    figures[pointer].classList.remove('hidden');
    figures[pointer].classList.add('visible'); 
};

SLIDER_RIGHT.addEventListener('click', () => {
   switchSlider(); 
});

SLIDER_LEFT.addEventListener('click', () => {
    switchSlider();
}); */


SETTINGS.addEventListener('click', (event) => {
    SETTINGS.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    let countChildren = PORTFOLIO_IMGS.childNodes, i;    
    for (i = countChildren.length; i >= 0; i--) {
        PORTFOLIO_IMGS.appendChild(countChildren[Math.random() * i | 0]);
    }
});

PORTFOLIO_IMGS.addEventListener('click', (event) => {
    let isSelected = event.target.classList.contains('selected');
    PORTFOLIO_IMGS.querySelectorAll('img').forEach(el => el.classList.remove('selected'));
    if(!isSelected){
        event.target.classList.add('selected');
    }
});

BUTTON.addEventListener('click', (e) => {
    if(document.getElementById('name').checkValidity() && document.getElementById('email').checkValidity()){
        const subject = document.getElementById('subject').value.toString();
        const description = document.getElementById('description').value.toString();
        document.getElementById('msg_subject').innerText = subject ? subject : "Without subject";
        document.getElementById('msg_description').innerText = description ? description : "Without description";
        document.getElementById('message-block').classList.remove('hidden');
		document.body.style.overflow = 'hidden';
		e.preventDefault();
		document.body.style.overflow = 'hidden';
    }
});

CLOSE_BUTTON.addEventListener('click', (event) => {
	document.body.style.overflow = 'unset';
	document.querySelectorAll('.filled').forEach(i => i.value = '');
    document.getElementById('message-block').classList.add('hidden');
});

let items = document.getElementsByTagName('figure');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

SLIDER_LEFT.addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

SLIDER_RIGHT.addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

const swipedetect = (el) => {
	let surface = el;
	let startX = 0;
	let startY = 0;
	let distX = 0;
	let distY = 0;
	let startTime = 0;
	let elapsedTime = 0;

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 300;

	surface.addEventListener('mousedown', function(e){       
        startX = e.pageX;
		startY = e.pageY;
		startTime = new Date().getTime();
		e.preventDefault();
	}, false);

	surface.addEventListener('mouseup', function(e){
		distX = e.pageX - startX;
		distY = e.pageY - startY;
		elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime <= allowedTime){
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
				if ((distX > 0)) {
					if (isEnabled) {
                        previousItem(currentItem);
					}
				} else {
					if (isEnabled) {
                        nextItem(currentItem);
					}
				}
			}
        }
        let isActive = document.getElementsByTagName('figure')[0].classList.contains('active');   
        SLIDER_LEFT.src = isActive ? './assets/images/features/left-blue.png' : './assets/images/features/left.png';
        SLIDER_RIGHT.src = isActive ? './assets/images/features/right-blue.png' : './assets/images/features/right.png';
  		e.preventDefault();
	}, false);

	surface.addEventListener('touchstart', function(e){
		if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
			if (e.target.classList.contains('left')) {
				if (isEnabled) {
					previousItem(currentItem);
				}
			} else {
				if (isEnabled) {
					nextItem(currentItem);
				}
			}
		}
			var touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
	}, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX;
			distY = touchobj.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime){
					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
							if ((distX > 0)) {
								if (isEnabled) {
									previousItem(currentItem);
								}
							} else {
								if (isEnabled) {
									nextItem(currentItem);
								}
							}
					}
			}
			e.preventDefault();
    }, false);
}

var el = document.querySelector('#slides__wrap');
swipedetect(el);