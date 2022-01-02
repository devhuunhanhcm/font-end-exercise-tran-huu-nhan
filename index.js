window.addEventListener('DOMContentLoaded',() => {
    $(document).ready(function(){
        $('.slider-carousel').slick({
            speed: 2000,
            slidesToShow: 1,
            dots: false,
            accessibility: true,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
            slidesToScroll: 1
        });

        $('.product-list').slick({
            padding: '20px',
            speed: 2000,
            slidesToShow: 4,
            dots: false,
            accessibility: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            slidesToScroll: 4
        });
    });
})

