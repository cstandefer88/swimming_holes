$(document).ready(function(){
  $('.arrow').click(function () {
    $('html,body').animate({
        scrollTop: $(document).height()/4.4,
    }, 1000);
  });
  $('.reviewArrow').click(function () {
    $('html,body').animate({
        scrollTop: $(document).height()/1.5,
    }, 1000);
  });
});
