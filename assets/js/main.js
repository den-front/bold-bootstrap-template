document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const ud_header = document.querySelector(".ud-header");
    const logo = document.querySelector(".navbar-brand img:first-child");
    const logo2 = document.querySelector(".navbar-brand img:last-child");

    if (window.pageYOffset > 0) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    if (ud_header.classList.contains("sticky")) {
      logo.hidden = true;
      logo2.hidden = false;
    } else {
      logo.hidden = false;
      logo2.hidden = true;
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");

    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  });

  document.querySelector(".back-to-top").addEventListener("click", function () {
    scrollTo(document.documentElement);
  });

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".ud-menu-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
    navbarCollapse.classList.toggle("show");
  });

  const submenuButton = document.querySelectorAll(".nav-item-has-children");
  submenuButton.forEach((elem) => {
    elem.querySelector("a").addEventListener("click", () => {
      elem.querySelector(".ud-submenu").classList.toggle("show");
    });
  });
});
