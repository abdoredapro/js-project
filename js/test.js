// local storage color 
let myColor = localStorage.getItem('color_list');
if(myColor !== null) {
    document.documentElement.style.setProperty('--main-color',localStorage.getItem('color_list'));
    document.querySelectorAll('.color-list li').forEach(Element => {
        Element.classList.remove('active');
        if(Element.dataset.color == myColor) {   
            Element.classList.add('active');
        }
    })
}
// Toggle Class fa-spin
document.querySelector('.toggle-settings .fa-cog').onclick =
function () {
    'use strict';
    this.classList.toggle('fa-spin');
    // open Menue onlick and close 
    let menue = document.querySelector('.settings-box');
    menue.classList.toggle('open');
}
// change color 
const color = document.querySelectorAll('.color-list li');
color.forEach(li => {
    li.addEventListener('click', (e) => {
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        localStorage.setItem('color_list',e.target.dataset.color);
        e.target.parentElement.querySelectorAll('.active').forEach(Element => {
            Element.classList.remove('active');
        })

        e.target.classList.add('active');


    })
    
})
// random background
let backgroundInterval;
let statueBackground = true;
let localItem = localStorage.getItem('random_background');
if(localItem !== null) {
    if(localItem === 'true') {
        statueBackground = true;

    } else {
        statueBackground = false;
    }
    document.querySelectorAll('.random-background span').forEach(el => {
        el.classList.remove('active');
    });
if(localItem === 'true') { 
    document.querySelector('.random-background .yes').classList.add('active');
} else {
    document.querySelector('.random-background .no').classList.add('active');
}
}
const randomBackground = document.querySelectorAll('.random-background span');
randomBackground.forEach(span => {
    span.addEventListener('click', (e) => {
        
        e.target.parentElement.querySelectorAll('.active').forEach(Element => {
            Element.classList.remove('active');
            
        })

        e.target.classList.add('active');
        if(e.target.dataset.background === 'yes') {
            statueBackground = true;
            randomBackgroundF();
            localStorage.setItem('random_background', true);
            
            
       } else {
            statueBackground = false;
           clearInterval(backgroundInterval);
           localStorage.setItem('random_background', false);
       }


    })
    
})
// random background image 
let landBackground = document.querySelector('.landing-page');
let myImages = ['background.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];

function randomBackgroundF() {
    if(statueBackground === true){
        backgroundInterval = setInterval(function () {
let randomNumber = Math.floor(Math.random() * myImages.length);
landBackground.style.backgroundImage = 'url("../image/'+ myImages[randomNumber]+'")';
},3000);
}
}
randomBackgroundF();

// write type
let myElement = document.querySelector('.para');
let i = 0;
let myText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";
window.onload = function () {
    'use strict';
let typeWriter = setInterval(function () {
    myElement.textContent += myText[i];
    i++
    if (i > myText.length - 1 ) {
        clearInterval(typeWriter);
    }
},100);
};
// skills 
let mySkills = document.querySelector('.skills');
window.onscroll = function () {
    //  hegiht Element
 let skillsH = mySkills.offsetHeight; // height of []
 let skillO = mySkills.offsetTop; // الجزء الى فوق السيكشن بتاعنا
 let skillW = this.innerHeight; // 
 let skillS = this.pageYOffset; //  الجزء الى بتعمله اسكرول
if(skillS > (skillsH + skillO - skillW)) {
    let mySpan = document.querySelectorAll('.skills .skill-progress span');
    mySpan.forEach(el => {
        el.style.width = el.dataset.progress;
    })
}
};
// popup myImages
let myGallary = document.querySelectorAll('.my-gallary img');
myGallary.forEach(img => {
    img.addEventListener('click', (e) => {
        // creat popup 
        let overley = document.createElement('div');
        overley.className = 'popup-overley';
        document.body.appendChild(overley);
        // creat popup box 
        let myBox = document.createElement('div');
        myBox.className = 'popup-box';
         // create head 
        if(img.alt !== null) {
        let myHead = document.createElement('h2');
        let myText = document.createTextNode(img.alt);
        myHead.appendChild(myText);
        myHead.className = 'popup-head';
        myBox.appendChild(myHead);
        }

        // create Img 
        let myPopImage = document.createElement('img');
        myPopImage.src = img.src;
        myBox.appendChild(myPopImage);
        document.body.appendChild(myBox);
        // create span 
        let myClose = document.createElement('span');
        let myTextSpan = document.createTextNode('X');
        myClose.appendChild(myTextSpan);
        myClose.className = 'popup-close';
        myBox.appendChild(myClose);


    })
})
document.addEventListener('click', (e) => {
    if(e.target.className === 'popup-close') {
        e.target.parentElement.remove();
        document.querySelector('.popup-overley').remove();
    }
})
//  close poup when click in body 
document.addEventListener('click', (e) =>{
    if(e.target.className === 'popup-overley') {
        e.target.remove();
        document.querySelector('.popup-box').remove();
    }
})
// bullet 

let bulletSpan = document.querySelectorAll('.bullet-box span');
let bulletContinar = document.querySelector('.nav-bullet');
bulletSpan.forEach(span => {
    span.addEventListener('click', (e) => {
        if(span.dataset.bullet === 'yes') {
            bulletContinar.style.display = 'block';
            localStorage.setItem('bullet_option' , 'block')

        } else {
            bulletContinar.style.display = 'none';
            localStorage.setItem('bullet_option' , 'none')

        }
    })
})
let localB = localStorage.getItem('bullet_option');
if(localB !== null) {
    bulletSpan.forEach(span => {
        span.classList.remove('active');
    })
    if (localB === 'block') {
        bulletContinar.style.display = 'block';
        document.querySelector('.bullet-box .yes').classList.add('active');
        
    } else {
        bulletContinar.style.display = 'none';
        document.querySelector('.bullet-box .no').classList.add('active');
    }
    
} 
// testing bullet section i will succes it 
let myBulletSection = document.querySelectorAll('.nav-bullet .bullet');
myBulletSection.forEach(sec => {
    sec.addEventListener('click', (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({behavior:'smooth'});
        
    })
})
// reset Option 
document.querySelector('.settings-box .reset').onclick =  () => {
    localStorage.clear();
    
    window.location.reload();
}
// toggle menue 
let toggleBtn = document.querySelector('.toggle-menue');
let links = document.querySelector('.links')
toggleBtn.onclick = function (e) {
    e.stopPropagation();
    this.classList.toggle('active-menue');
    links.classList.toggle('open');
}
document.addEventListener('click', (e) => {
    if(e.target !== toggleBtn && e.target !== links) {
        if(links.classList.contains('open')) {
            toggleBtn.classList.toggle('active-menue');
            links.classList.toggle('open');
        }

    }

})
links.onclick = function (e) {
    e.stopPropagation();
}
