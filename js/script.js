// header start  ---------------------------------------------------

const header = document.querySelector('header');
let beforeScroll = window.scrollY;

window.addEventListener('scroll', () => {

    // if (window.scrollY > beforeScroll) {
    //     header.classList.add('scrolled-background');
    // }else {
    //     header.classList.remove('scrolled-background');
    // }

    if (window.scrollY < 62) {
        header.classList.remove('scrolled-background');
    } else {
        header.classList.add('scrolled-background');
    }

    // beforeScroll = window.scrollY;

});

// header end  ---------------------------------------------------
// main start ---------------------------------------------------

$('.main-bxslider').bxSlider({
    pagerCustom: '#bx-pager',
    //mode: 'fade'
});

const openMainInfoDesktop = document.querySelector(".open-main-info-desktop")
const mainInfoDesktop = document.querySelector(".main-info-desktop")

function openMainInfo() {
    openMainInfoDesktop.style.display = "none";
    mainInfoDesktop.style.left = "0";
    // input_tag.value = '';
}

function closeMainInfo() {
    mainInfoDesktop.style.left = "-500px";
    openMainInfoDesktop.style.display = "block";
    input_tag.value = '';

    // if (matchMedia("screen and (max-width:1100px)").matches) {
    //     openMainInfoDesktop.style.display = "none";
    // }
}



// const mainInfoTablet = document.querySelector('.main-info-tablet');

// window.addEventListener('scroll', () => {
//     if (mainInfoTablet.getBoundingClientRect().top < window.innerHeight) {
//         mainInfoTablet.classList.add('active');
//     }
// });

// main end ---------------------------------------------------
// editor start  ---------------------------------------------------

$('.editor-bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 5,
    slideWidth: 240,
    slideMargin: 10,
    moveSlides: 1
});

// editor start  ---------------------------------------------------
// daily start  ---------------------------------------------------

$('.daily-bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 5,
    slideWidth: 240,
    slideMargin: 10,
    moveSlides: 1
});

// daily end  ---------------------------------------------------
// montly start  ---------------------------------------------------

$('.monthly-bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 5,
    slideWidth: 240,
    slideMargin: 10,
    moveSlides: 1
});

// montly end  ---------------------------------------------------
// summer start  ---------------------------------------------------

$('.summer-bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 5,
    slideWidth: 240,
    slideMargin: 10,
    moveSlides: 1
});

// summer end  ---------------------------------------------------
// drama start  ---------------------------------------------------

$('.drama-bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 5,
    slideWidth: 240,
    slideMargin: 10,
    moveSlides: 1
});

// drama end  ---------------------------------------------------
// heartbeat start  ---------------------------------------------------

$('.heartbeat-bxslider').bxSlider({
    minSlides: 0,
    maxSlides: 5,
    slideWidth: 406.66,
    slideMargin: 10.01,
    moveSlides: 1
});

// heartbeat end  ---------------------------------------------------
// faq start ---------------------------------------------------

const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach(function (button, index) {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        this.parentNode.classList.toggle('on');

        accordionButtons.forEach(function (button2, index2) {
            if (index !== index2) {
                button2.parentNode.classList.remove('on');
            }
        });
    });
});

// faq end ---------------------------------------------------
// common start ---------------------------------------------------

const contentIntroContainer = document.querySelectorAll('.content-intro-container');
// const inclien = document.querySelector('#start-together > .incline');


// let playAble = true

window.addEventListener('scroll', () => {
    for (let i = 0; i < contentIntroContainer.length; i++) {
        if (contentIntroContainer[i].getBoundingClientRect().top < window.innerHeight / 3 * 2) {
            contentIntroContainer[i].classList.add('active');
        }
    }

    // console.log(inclien.getBoundingClientRect().top)

    // if (inclien.getBoundingClientRect().top < window.innerHeight / 3 * 2) {
    //     inclien.classList.add('active');
    // }

});

// setTimeout(() => {
//     appDownload.classList.add('active');
// }, 300);

// common end ---------------------------------------------------
// fixed start -------------------------------------------------

const editorRecommandSection = document.querySelector('#editor-recommand');
const fixedTab = document.querySelector('.fixed-tab');
const sidebar = document.querySelector('.sidebar');
const sidebarCloseBtn = document.querySelector('.sidebar-close-btn');

window.addEventListener('scroll', () => {

    if (editorRecommandSection.getBoundingClientRect().bottom < window.innerHeight) {

        fixedTab.classList.add('appear');

        fixedTab.addEventListener("click", () => {

            header.classList.remove('scrolled-background');
            sidebar.classList.add('active');

            fixedTab.classList.add('active');
        });

        sidebarCloseBtn.addEventListener("click", () => {
            sidebar.classList.remove('active');
            fixedTab.classList.remove('active');
            header.classList.add('scrolled-background');
        });

    } else {
        fixedTab.classList.remove('appear');
    }

    if (sidebar.getBoundingClientRect.left >= 0) {
        header.classList.remove('scrolled-background');
    }
});


const topBtn = document.querySelector(".top-btn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";

        promotion.style.opacity = "1";

    } else {
        topBtn.style.display = "none";

        promotion.style.opacity = "0";

    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





const promotion = document.querySelector('.promotion');

// window.addEventListener('scroll', () => {

//     if (promotion.getBoundingClientRect().top < window.innerHeight) {
//         promotion.classList.add('appear');
//     } else {
//         promotion.classList.remove('appear');
//     }
// });

// fixed end -------------------------------------------------------------