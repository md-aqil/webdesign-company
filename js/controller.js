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
var swiper = new Swiper('.swiper-container.swiper-works', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


var swiper = new Swiper('.swiper-container.swiper-testimonial-product', {
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
            width: 1000,
            spaceBetween: 100,
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


var swiper = new Swiper('.swiper-container.swiper-img-preveiw', {
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    // effect: 'fade',
    spaceBetween: 0,
    slidesPerView: 1,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

// swiper2 ==============END


var galleryThumbs2 = new Swiper('.gallery-thumbs2', {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop2 = new Swiper('.gallery-top2', {
    // effect: 'fade',
    spaceBetween: 0,
    slidesPerView: 1,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs2
    }
});


$('.faq-heading').click(function () {
    $(this).parent('li').find('.faq-text').slideToggle();
});

fetch("header.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });

fetch("./footer.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });