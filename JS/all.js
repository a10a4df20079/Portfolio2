$(function(){
  $('.top a').on("click",function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    },500);
    })
  });
//swup
const swup = new Swup();

//lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })
  $(document).ready
