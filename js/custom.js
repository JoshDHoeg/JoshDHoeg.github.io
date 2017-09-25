function hello(){
  $('#hello, #welcome').toggleClass('fadeOut fadeIn');
  // $('body').toggleClass('nav-no-scroll');
};

function stats(){
  $('#welcome').toggleClass('fadeOut fadeIn');
  // $('body').toggleClass('nav-no-scroll');
};

setTimeout(hello, 400);
setTimeout(stats, 800);
