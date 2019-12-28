var swiper = new Swiper('.swiper-container.swiper-testimonial', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-test',
        prevEl: '.swiper-button-prev-test',
    },
});
var swiper = new Swiper('.swiper-container.swiper-work', {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-work',
        prevEl: '.swiper-button-prev-work',
    },
});

$('.faq-heading').click(function () {
    $(this).parent('li').find('.faq-text').slideToggle();
});