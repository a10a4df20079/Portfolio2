
  
//swup
const swup = new Swup();
swup.on('pageView',()=>{
  $(function(){
    console.log('run');
    $('.top a').on("click",function(event){
      event.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      },500);
      })
    })
  });

//lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })
  $(document).ready
