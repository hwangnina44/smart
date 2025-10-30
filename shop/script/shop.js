
$(function () {
  $("#header").load("/smart/header.html", function () {
    // 메뉴 드롭다운 이벤트
    $('.menu').mouseenter(function () {
      $(this).find('.sub_menu').stop(true, true).slideDown();
    }).mouseleave(function () {
      $(this).find('.sub_menu').stop(true, true).slideUp();
    });
    // header 스크롤 이벤트
    const $headerDefault = $('header.default');
    const $headerActive = $('header.active');

    $(window).on('scroll', function () {
      const scrollY = $(this).scrollTop();

      if (scrollY <= 10) {
        $headerDefault.stop(true, true).fadeIn(200);
        $headerActive.stop(true, true).fadeOut(200);
      } else {
        $headerDefault.stop(true, true).fadeOut(200);
        $headerActive.stop(true, true).fadeIn(200);
      }
    }).trigger('scroll');

    //메뉴 활성화
    $('header.default').find('.menu').first().addClass('on');
    $('header.active').find('.menu').first().addClass('on');
  });

  $('#footer').load("/smart/footer.html");

  //상품클릭시 이동
  $('.shop_list li').on('click',function(){
    window.location.href = 'detail.html';
  });
});

