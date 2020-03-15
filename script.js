const MENU = document.getElementById('navigation');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');
const SLIDER = document.getElementById('image__wrap');
const H_PHONE = document.getElementById('hor__phone');
const H_PHONE_LINK = "./assets/images/features/phone-horizontal.png";
const H_PHONE_LINK_BLACK = "./assets/images/features/phone-horizontal-black.png";
const V_PHONE = document.getElementById('vert__phone');
const V_PHONE_LINK = "./assets/images/features/phone-vertical.png";
const V_PHONE_LINK_BLACK = "./assets/images/features/phone-vertical-black.png";

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

/* BUTTON.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.toString();
    document.getElementById('result').innerText = subject;
    document.getElementById('message-block').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', (event) => {
    MENU.querySelectorAll('result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
}); */