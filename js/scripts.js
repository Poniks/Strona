function validation() {
    let inputEmail = document.querySelector('form #email');
    let pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    let formInputs = document.querySelectorAll('form .formInput');
    
    formInputs.forEach((input,index) => {
        if(input.value === ""){
            input.classList.add('invalid');
        } else input.classList.remove('invalid');
    })

    if(!pattern.test(inputEmail.value)){
        inputEmail.classList.add('invalid');
    }
}

function resetValidation(e) {
    e.target.classList.remove('invalid');
}

let slider = document.getElementById('slider');
let radios = document.getElementsByClassName('radio')
let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let radio3 = document.getElementById('radio3');
let radio4 = document.getElementById('radio4');
let arrowLeft = document.getElementById('leftArrow');
let arrowRight = document.getElementById('rightArrow');

for(let i = 0; i < radios.length; i++){
    radios[i].addEventListener('click', () => {
        let current = document.getElementsByClassName('active');

        current[0].classList.remove('active');
        radios[i].classList.add('active');

        if(current[0].id === 'radio1') slider.style.transform = 'translateX(0)';
        else if(current[0].id === 'radio2') slider.style.transform = 'translateX(-25%)';
        else if(current[0].id === 'radio3') slider.style.transform = 'translateX(-50%)';
        else if(current[0].id === 'radio4') slider.style.transform = 'translateX(-75%)';
    })     
}

arrowLeft.onclick = function() {
    let active = document.getElementsByClassName('active')[0].id

    let current = document.getElementsByClassName('active');
        current[0].classList.remove('active');

    if(active === 'radio1') {
        slider.style.transform = 'translateX(-75%)';
        radio4.classList.add('active');
    } else if(active === 'radio2') {
        slider.style.transform = 'translateX(0)';
        radio1.classList.add('active');
    } else if(active === 'radio3') {
        slider.style.transform = 'translateX(-25%)';
        radio2.classList.add('active');
    } else if(active === 'radio4') {
        slider.style.transform = 'translateX(-50%)';
        radio3.classList.add('active');
    }
    
}

arrowRight.onclick = function() {
    let active = document.getElementsByClassName('active')[0].id

    let current = document.getElementsByClassName('active');
    current[0].classList.remove('active');

    if(active === 'radio1') {
        slider.style.transform = 'translateX(-25%)';
        radio2.classList.add('active');
    }  else if(active === 'radio2') {
        slider.style.transform = 'translateX(-50%)';
        radio3.classList.add('active');
    } else if(active === 'radio3') {
        slider.style.transform = 'translateX(-75%)';
        radio4.classList.add('active');
    } else if(active === 'radio4') {
        slider.style.transform = 'translateX(0%)';
        radio1.classList.add('active');
    }        
}

function togglePopup() {
    document.getElementById('popup-1').classList.toggle('active');
}

window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector("nav").classList.add("sticky");
    } else {
        document.querySelector("nav").classList.remove("sticky");
    }
})

let mobileMenu = document.querySelector('.hamburger');

mobileMenu.addEventListener('click', function() {
document.querySelector('nav').classList.toggle('opened');
})

let footerMenu = document.querySelectorAll('.column li .title');

footerMenu.forEach((item, index) => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.column')[index].classList.toggle('active');
    })
})