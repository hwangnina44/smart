$(function(){
  //헤더 불러오기
  $('#header').load('/header.html',function(){
    $('header').find('.menu').first().addClass('on');
    $('header').css({
      position: 'static'
    });
  });

  //푸터 로드
  $('#footer').load('/footer.html');

  // 배송방법에 따라 결제 방식 옵션 변경
  $('#shipping_type').on('change', function () {
    const type = $(this).val();
    const $pay = $('#shipping_pay');
    let options = '';

    if (type === '택배') {
      options = `
        <option value="선결제">선결제</option>
        <option value="착불">착불</option>
      `;
    } else if (type === '방문수령') {
      options = `
        <option value="없음">결제 없음</option>
      `;
    } else if (type === '퀵') {
      options = `
        <option value="착불">착불</option>
      `;
    }

    // 기존 옵션 비우고 새로 추가
    $pay.html(options);
  });
});