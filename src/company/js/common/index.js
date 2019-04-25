document.addEventListener('DOMContentLoaded', function () {

    //  MOBILE NAVIGATION
    var mobNavBtn = document.getElementById('mobNavBtn');

    mobNavBtn.addEventListener('click', function () {
        var toggleMobileNav = document.querySelector('.main_navigation');

        toggleMobileNav.classList.toggle("in")
        mobNavBtn.childNodes[1].classList.toggle('active')
    })
});

var swiper = new Swiper('.leader_slider .swiper-container', {
    slidesPerView:1,
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});