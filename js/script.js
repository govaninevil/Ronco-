function langbox() {
  var x = document.getElementById("lang-dropdown");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
$(document).ready(function() {
    $("#mobile").on("click", function(){
      
      $("body").toggleClass("mobile");
    })
})

const nextIcon = '<img src ="image/slider-arrow-left.png" alt:"slider-arrow-left">'
const prevIcon = '<img src ="image/slider-arrow-right.png" alt:"slider-arrow-right">'

$("#frist").owlCarousel({
  loop:true,
  margin:10,
  nav:true,
})

$(document).ready(function() {
  $('#parentHorizontalTab').easyResponsiveTabs({
      type: 'default', //Types: default, vertical, accordion
      width: 'auto', //auto or any width like 600px
             fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
});



$(document).ready(function() {
  $('.box').hover(
        function(){ 
            $(".industry.box.active").addClass('inactive').removeClass('active');
        },
        function(){ 
            $(".industry.box.inactive").addClass('active').removeClass('inactive'); 
        }
    );
});


$("#industry-slider").owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  slideTransition: 'linear',
  autoplayTimeout:6000,
  autoplaySpeed: 6000,
  responsive:{
    0:{
      items:1
    },
    361:{
      items:2
    },
    600:{
      items:3
    },
    1023:{
      items:6
    }
  }
});

$("#banner-slider").owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:false,
  responsive:{
    0:{
      items:1
    }
  }
}); 