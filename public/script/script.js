$(document).ready(function(){
  $('.arrow').click(function () {
    $('html,body').animate({
        scrollTop: $(document).height()/5,
    }, 1000);
  });
});
