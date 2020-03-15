const MENU = document.getElementById('navigation');
//const BUTTON = document.getElementById('btn');
//const CLOSE_BUTTON = document.getElementById('close-btn');
//const SLIDER = document.getElementById('image__wrap');
const H_PHONE = document.getElementById('hor__phone');
const H_PHONE_LINK = "./assets/images/features/phone-horizontal.png";
const H_PHONE_LINK_BLACK = "./assets/images/features/phone-horizontal-black.png";
const V_PHONE = document.getElementById('vert__phone');
const V_PHONE_LINK = "./assets/images/features/phone-vertical.png";
const V_PHONE_LINK_BLACK = "./assets/images/features/phone-vertical-black.png";
const SETTINGS = document.getElementById('settings');
const PORTFOLIO_IMGS = document.getElementById('images__wrap');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('navigation__selected'));
    event.target.classList.add('navigation__selected');
    let sectionId = document.getElementById(event.target.classList[0].toString());
    if(sectionId) { 
        sectionId.scrollIntoView();
    }
});

H_PHONE.addEventListener('click', (event) => {
    if (event.target.classList.contains("off")) {
        H_PHONE.src = H_PHONE_LINK;
        event.target.classList.remove('off');
    } else {
        H_PHONE.src = H_PHONE_LINK_BLACK;
        event.target.classList.add('off');
    }    
});

V_PHONE.addEventListener('click', (event) => {
    if (event.target.classList.contains("off")) {
        V_PHONE.src = V_PHONE_LINK;
        event.target.classList.remove('off');
    } else {
        V_PHONE.src = V_PHONE_LINK_BLACK;
        event.target.classList.add('off');
    }    
});

SETTINGS.addEventListener('click', (event) => {
    SETTINGS.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    PORTFOLIO_IMGS.querySelectorAll('img').forEach(el => el.classList.remove('selected'));
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


/* BUTTON.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.toString();
    document.getElementById('result').innerText = subject;
    document.getElementById('message-block').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', (event) => {
    MENU.querySelectorAll('result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
}); */