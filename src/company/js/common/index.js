document.addEventListener('DOMContentLoaded', function () {

    //  MOBILE NAVIGATION
    var mobNavBtn = document.getElementById('mobNavBtn');
    var body = document.body;

    mobNavBtn.addEventListener('click', function () {
        var toggleMobileNav = document.querySelector('.main_navigation');


        toggleMobileNav.classList.toggle("in")
        body.classList.toggle("no_scroll")
        mobNavBtn.childNodes[1].classList.toggle('active')
    })
});

var swiper = new Swiper('.leader_slider .swiper-container', {
    slidesPerView:1,
    loop:true,
    navigation: {
        nextEl: '.leader_slider_next',
        prevEl: '.leader_slider_prev',
    },
});