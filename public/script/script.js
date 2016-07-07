$(document).ready(function(){
  $('.arrow').click(function () {
    $('html,body').animate({
        scrollTop: $(document).height()/4.4,
    }, 1000);
  });
  $('.reviewArrow').click(function () {
    $('html,body').animate({
        scrollTop: $(document).height()/2,
    }, 1000);
  });
});
