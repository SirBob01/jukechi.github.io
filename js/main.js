  $(function(){
      $(".typedTestimonials").typed({
     strings: ["Chia, go to sleep na.<br /><em>- Mom</em>", "How's my big boy!<br /><em>- Keith's Mom</em>"],
		typeSpeed: 20,
			// time before typing starts
			startDelay: 100,
			// backspacing speed
			backSpeed: 50,
			// time before backspacing
			backDelay: 2500,
			// loop
			loop: true,
			// false = infinite
			loopCount: false,
			// show cursor
			showCursor: true,
      });
  });


$(function () {
    $('a').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body,.container').animate({ scrollTop: target.offset().top }, 1000);
                return false;
            }
        }
    });
});

$(document).ready(function() {
    $('.navigation').click(function(e) {  
       $('.navigation').fadeOut();
    });
    
    $('.navigation a').click(function(e) {  
       $('.navigation').fadeOut();
    });
    
});

function hamburger(){
    $(".navigation").toggle();
}