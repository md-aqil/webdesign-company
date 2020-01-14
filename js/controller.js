$(window).on('load', function () {
    $('#page-load-modal').modal('show');
});


// marketin-page javascript =======

var swiper = new Swiper('.swiper-container.mar-1', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper = new Swiper('.swiper-container.mar-2', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper = new Swiper('.swiper-container.mar-3', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper = new Swiper('.swiper-container.mar-4', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var galleryThumbsList = new Swiper('.gallery-thumbs-list', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTopMainImage = new Swiper('.gallery-top-main-image', {
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbsList
    }
});

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


var swiper = new Swiper('.swiper-container.swiper-review-product-page', {
    slidesPerView: 4,
    spaceBetween: 80,
    navigation: {
        nextEl: '.swiper-button-next-test',
        prevEl: '.swiper-button-prev-test',
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


$(document).ready(function () {
    $(".openCheckbox").change(function () {
        var value = $(this).children("option:selected").val();
        $('.checklist').slideDown();

    });
});



// multi-select ==========
var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}
// multi-select END==========

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





// blog controller here=====================

// scroll-progress-bar

! function (o) {
    o.fn.prognroll = function (t) {
        var e = o.extend({
            height: 5,
            color: "#50bcb6",
            custom: !1
        }, t);
        return this.each(function () {
            if (o(this).data('prognroll')) {
                return !1
            }
            o(this).data('prognroll', !0);
            var t = o("<span>", {
                class: "bar"
            });

            o("#progress-bar").prepend(t);
            t.css({
                position: "fixed",
                top: 0,
                left: 0,
                width: 0,
                height: e.height,
                backgroundColor: e.color,
                zIndex: 9999999
            });

            e.custom === !1 ? o(window).scroll(function (t) {
                t.preventDefault();
                var e = o(window).scrollTop(),
                    r = o(window).outerHeight(),
                    l = o(document).height(),
                    n = e / (l - r) * 100;
                o(".bar").css("width", n + "%")
            }) : o(this).scroll(function (t) {
                t.preventDefault();
                var e = o(this).scrollTop(),
                    r = o(this).outerHeight(),
                    l = o(this).prop("scrollHeight"),
                    n = e / (l - r) * 100;
                o(".bar").css("width", n + "%")
            });
            o(window).on('hashchange', function (t) {
                t.preventDefault();
                console.log(o(window).scrollTop())
            });
            o(window).trigger('hashchange');
            var r = o(window).scrollTop(),
                l = o(window).outerHeight(),
                n = o("body").outerHeight(),
                c = r / (n - l) * 100;
            o(".bar").css("width", c + "%")
        })
    }
}(jQuery)



$("#progress-bar").prognroll({

    height: 2,

    color: "#5248c0",
    position: "bottom"

});

$(function () {

    $('#progress-bar').slideUp();

    $(window).scroll(function () {
        var aTop = $('.navbar').height();
        if ($(this).scrollTop() >= aTop) {
            $('#progress-bar').slideDown();
        } else {
            $('#progress-bar').slideUp();

        }
    });
});







var swiper = new Swiper('.swiper-container.blog', {
    slidesPerView: 4,
    spaceBetween: 20,

    freeMode: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




var swiper = new Swiper('.swiper-container.review', {
    slidesPerView: 3,
    spaceBetween: 30,
    parallax: true,
    freeMode: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper('.swiper-container.swiper-cta', {

    spaceBetween: 30,
    parallax: true,
    grabCursor: true,
    mousewheel: true,

    loop: true,
    keyboard: {
        enabled: true,
    },

    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});




var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
    setTimeout(function () {
        cw[i].className = 'letter out';
    }, i * 80);
}

function animateLetterIn(nw, i) {
    setTimeout(function () {
        nw[i].className = 'letter in';
    }, 340 + (i * 80));
}

function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

var swiper = new Swiper('.swiper-container.slider1', {
    speed: 600,
    parallax: true,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 5,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});
var swiper = new Swiper('.swiper-container.slider2', {
    speed: 600,
    parallax: true,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 5,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});