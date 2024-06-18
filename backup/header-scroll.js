const header = document.querySelector('header');
let beforeScroll = window.scrollY;

window.addEventListener('scroll', () => {            

    if (window.scrollY > beforeScroll) {
        header.classList.add('scrolled-background');                
    }else {
        header.classList.remove('scrolled-background');
    }

    if(window.scrollY < 62){
        header.classList.remove('scrolled-background');
    }else{
        header.classList.add('scrolled-background');
    }

    beforeScroll = window.scrollY;

});
