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
            slidesToScroll: 4,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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
})

