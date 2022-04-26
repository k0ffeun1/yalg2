
$(document).ready(function () {
    $('.slider').slick({
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.slider23').slick({
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.slider8').slick({
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
let btn23 = document.getElementById('btn23')
let btn8 = document.getElementById('btn8')
let slider23 = document.getElementById('slider23')
let slider8 = document.getElementById('slider8')
btn8.addEventListener('click', () => {
    slider23.style.opacity = "0"
    slider23.style.zIndex = "10"
    slider8.style.opacity = "1"
    slider8.style.zIndex = "100"
})
btn23.addEventListener('click', () => {
    slider23.style.opacity = "1"
    slider23.style.zIndex = "100"
    slider8.style.opacity = "0"
    slider8.style.zIndex = "10"
    
})

