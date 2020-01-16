(function($) {
  // ヘッダー、ハンバーガーメニュー
    $(function () {
      $('#nav-toggle').on('click', function() {
        $('body').toggleClass('open');
      });

      $('#portfolio').show('drop', {
          direction: 'up',
          duration: 1200
      });

      setTimeout(function(){
        $('#name').show('clip', {
            direction: 'vertical',
            duration: 2000
        });
      },1500);

      setTimeout(function(){
        $('#intro').show('clip', {
            direction: 'vertical',
            duration: 2000
        });
      },1500);
    });

  // スクロールでふわっとフェイドイン
    $(function () {
      $(window).scroll(function (){
        $('#fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
      });

      $(window).scroll(function (){
        $('#fadein-2').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
      });
      

      // スクロールしたスキルゲージが伸びる設定
      $(window).scroll(function (){
        $('.bar').each(function(){
          var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
              setTimeout(function(){
                $(".common").css('text-indent','inherit');
                $(".htmlcss").animate({width:"90%"}, 1000);
                $(".javascript").animate({width:"80%"}, 1200);
                $(".ruby").animate({width:"70%"}, 1400);
                $(".rails").animate({width:"90%"}, 1600);
                $(".python").animate({width:"75%"}, 1800);
                $(".sql").animate({width:"70%"}, 2000);
                $(".aws").animate({width:"80%"}, 2200);
                $(".passion").animate({width:"110%"}, 2500);
              },500);
            }
        });
      });
    });

  // swiper設定
    // Params
    var sliderSelector = '.swiper-container',
        options = {
          init: false,
          loop: true,
          speed:800,
          slidesPerView: 2, // or 'auto'
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
