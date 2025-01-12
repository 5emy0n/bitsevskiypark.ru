(function () {
    var animated_item = document.querySelector('.about-park-wrapper');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('about-park-animation');
        }
      });
    });
  
    observer.observe(animated_item);
  })();