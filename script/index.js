
$(function () {
  const $headerDefault = $('header.default');
  const $headerActive = $('header.active');

  // 스크롤 시 처리
  $(window).on('scroll', function () {
    const scrollY = $(this).scrollTop();

    if (scrollY <= 10) {
      $headerDefault.stop(true, true).fadeIn(200);
      $headerActive.stop(true, true).fadeOut(200);
    } else {
      $headerDefault.stop(true, true).fadeOut(200);
      $headerActive.stop(true, true).fadeIn(200);
    }
  }).trigger('scroll'); // ← 페이지 로드 시 한 번 실행 (초기 상태 맞춤)
});
$(function () {
  //main banner >inside//
  $('.inside_box').css({
    top: 0
  });

  $('.gnb > li').mouseenter(function () {
    $(this).children('ul.sub_menu').slideDown();
  });

  $('.gnb > li').mouseleave(function () {
    $('ul.sub_menu').stop().slideUp();
  });



  //main img >main product img 나타나기
  $(window).scroll(function () {
    var scrollY = $(window).scrollTop();
    var productTop = $('.product_img').offset().top;
    var glassesTop = $('.glasses_img').offset().top;
    var weeklyTop = $('.weekly').offset().top;
    var bestTop = $('.best').offset().top;
    var ringTop = $('.ring_img').offset().top;
    var windowHeight = $(window).height();

    console.log(scrollY, windowHeight);


    if (scrollY + windowHeight > productTop + 100) {
      // 오른쪽 이미지 먼저 나타나기
      $('.product_wrap .product_right .product_img')
        .delay(0)
        .animate({ opacity: 1 }, 600);

      // 0.3초 뒤 왼쪽 이미지 나타나기
      $('.product_wrap .product_left .product_img')
        .delay(600)
        .animate({ opacity: 1 }, 600);

      $('.product_des')
        .delay(1000)
        .animate({ opacity: 1 }, 600);
    }
    //스마트 안경
    if (scrollY + windowHeight > glassesTop + 100) {
      $('.glasses_img img')
        .delay(0)
        .css({
          transform: 'scale(1)'
          , opacity: 1
        });
    }
    //위클리
    if (scrollY + windowHeight > weeklyTop + 100) {
      $('.weekly_title h2')
        .delay(0)
        .css({
          transform: 'translateY(0%)'
          , opacity: 1
        });

      $('.weekly .weekly_product ul')
        .delay(600)
        .css({
          transform: 'translateY(0%)'
          , opacity: 1
        });
    }
    //best
    if (scrollY + windowHeight > bestTop + 100) {
      $('.best .best_title')
        .delay(0)
        .css({
          transform: 'translateY(0%)'
          , opacity: 1
        });

      $('.swiper-wrapper')
        .delay(600)
        .css({
          transform: 'translateY(0%)'
          , opacity: 1
        });
    }
    //best
    if (scrollY + windowHeight > ringTop + 100) {
      $('.ring_img')
        .delay(0)
        .css({
          transform: 'translateY(0%)'
          , opacity: 1
        });
    }

  });
  //best 스와이퍼
  var swiper = new Swiper(".best_product", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 3000, // 3초마다 자동 이동
      disableOnInteraction: false, // 사용자가 스크롤/클릭해도 자동 재시작
    },
  });

});