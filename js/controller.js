var swiper = new Swiper('.swiper-container.swiper-testimonial', {
    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next-test',
        prevEl: '.swiper-button-prev-test',
    },

    breakpoints: {
        640: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
    }
});
var swiper = new Swiper('.swiper-container.swiper-work', {
    slidesPerView: 2,
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-work',
        prevEl: '.swiper-button-prev-work',
    },
    breakpoints: {
        640: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
});

$('.faq-heading').click(function () {
    $(this).parent('li').find('.faq-text').slideToggle();
});