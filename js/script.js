setTimeout(function(){
  $(".element").typed({
      strings: ["Software Engineer"],
      typeSpeed: 60, // typing speed
      backDelay: 750, // pause before backspacing
      loop: false, // loop on or off (true or false)
      loopCount: false, // number of loops, false = infinite
      callback: function(){ } // call function after typing is done
  });
}, 500);
