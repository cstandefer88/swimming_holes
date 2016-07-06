$(document).ready(function(){
  $('.fa-chevron-down').click(function () {
    $('html,body').animate({
        scrollTop: $(document).height()/4.7,
    }, 1000);
  });
});
