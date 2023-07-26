console.log("So glad you are here!");
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }

  (function($) {
    $("a[href*=\\#]:not([href=\\#])").click(function()
  {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) 
    {    
      var target = $(this.hash),
      headerHeight = $("header").height() + 48; // Get fixed header height
            
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              
      if (target.length) 
      {
        $('html,body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 800);
        return false;
      }
    }
  });
})(jQuery);