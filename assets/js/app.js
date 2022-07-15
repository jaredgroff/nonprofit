const hero = document.querySelector(".hero-section");
hero.style.height = window.innerHeight + "px";

window.addEventListener("resize", function () {
  hero.style.height = this.innerHeight + "px";
});



//scroll

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
   if (startchange.length){
  $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top) {
         $("#my-navbar").css('background-color', '#2a261fe6');
         $(".nav-link").css('color', '#f1f1f1');
         $(".nav-link").hover(function(){
          $(this).css("color", "var(--hover-color)");
          }, function(){
          $(this).css("color", "var(--link-color");
        });
      } else {
         $('#my-navbar').css('background-color', 'transparent');
      }
  });
   }
});