(function($) {
  $(function () {
    $('#nav-toggle').on('click', function() {
      $('body').toggleClass('open');
    });
  });

  
  $(function () {
    //最初の画像以外を非表示にする
    $('#slick-tsumiageapp img:gt(0)').hide();
    //タイマー
    setInterval(function() {
         //フェードインとアウトを繰り返す
        $('#slick-tsumiageapp :first-child').fadeOut(2000).next('img').fadeIn(2000).end().appendTo('#slick-tsumiageapp');
    }, 4000);
  });

    $(function () {
      //最初の画像以外を非表示にする
      $('#slick-bookapp img:gt(0)').hide();
      //タイマー
      setInterval(function() {
           //フェードインとアウトを繰り返す
          $('#slick-bookapp :first-child').fadeOut(2000).next('img').fadeIn(2000).end().appendTo('#slick-bookapp');
      }, 4000);
    });

    $(function () {
      //最初の画像以外を非表示にする
      $('#slick-myportfolio img:gt(0)').hide();
      //タイマー
      setInterval(function() {
           //フェードインとアウトを繰り返す
          $('#slick-myportfolio :first-child').fadeOut(2000).next('img').fadeIn(2000).end().appendTo('#slick-myportfolio');
      }, 4000);
    });

    $(function () {
      //最初の画像以外を非表示にする
      $('#slick-site img:gt(0)').hide();
      //タイマー
      setInterval(function() {
           //フェードインとアウトを繰り返す
          $('#slick-site :first-child').fadeOut(2000).next('img').fadeIn(2000).end().appendTo('#slick-site');
      }, 4000);
    });

    // Params
    var sliderSelector = '.swiper-container',
        options = {
          init: false,
          speed:800,
          slidesPerView: 1, // or 'auto'
          // spaceBetween: 10,
          centeredSlides : true,
          effect: 'coverflow', // 'cube', 'fade', 'coverflow',
          coverflowEffect: {
            rotate: 50, // Slide rotate in degrees
            stretch: 0, // Stretch space between slides (in px)
            depth: 100, // Depth offset in px (slides translate in Z axis)
            modifier: 1, // Effect multipler
            slideShadows : true, // Enables slides shadows
          },
          grabCursor: true,
          parallax: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            1023: {
              slidesPerView: 1,
              spaceBetween: 0
            }
          },
          // Events
          on: {
            imagesReady: function(){
              this.el.classList.remove('loading');
            }
          }
        };
    var mySwiper = new Swiper(sliderSelector, options);

    // Initialize slider
    mySwiper.init();
})(jQuery);
