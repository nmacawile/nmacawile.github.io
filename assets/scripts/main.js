 const animateScroll = function(e) {
  // prevent default anchor click behavior
  e.preventDefault();

  // store hash
  let hash = this.hash;

  // animate
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){

    // when done, add hash to url
    // (default click behaviour)
    window.location.hash = hash;
  });
}

 
$("#topbar ul li a[href^='#']").on('click', animateScroll);
$(".chevron-link").on('click', animateScroll);

const animateProgressBars = (function() {
  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();

    return rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < $(window).width() &&
      rect.top < $(window).height();
  }

  let finishedAllTransitions = false;
  let progressBars = document.querySelectorAll(".transition");

  const animate = function() {
    if (!finishedAllTransitions) {
      progressBars.forEach(el => {
        if(isElementInViewport(el)) {
          el.style.maxWidth = "600px";
          el.classList.remove("transition");
        }
      });

      finishedAllTransitions = checkIfFinished();
    } 
  }

  const checkIfFinished = function() {  
    if (document.querySelectorAll(".transition").length > 0) 
      return false;
    else
      return true;
  }

  // Bind to scroll event
  $(document).on("scroll", animate);
  // Animate when element is visible on reload regardless of scroll event
  animate();
})();


const topbar = document.getElementById('topbar');

let previousY = window.pageYOffset;

window.onscroll = function() {
  const currentY = window.pageYOffset;
  if (currentY > previousY)
    topbar.style.top = '-60px';
  else  topbar.style.top = 0;
  previousY = currentY;
}
