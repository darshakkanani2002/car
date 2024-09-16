let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1500 ||
    document.documentElement.scrollTop > 1500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// navigation active design
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

  function handleNavClick(event) {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
  }
  navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
  });

  // Function to dynamically change active design based on window scroll
  function setActiveLink() {
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
      const navLink = document.querySelector(`.nav-link[data-section="${section.id}"]`);
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - sectionHeight / 3 && window.pageYOffset < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          navLink.classList.add('active');
        });

      }
    });
  }

  // Initial call to setActiveLink to set the active link on page load
  setActiveLink();

  // Add event listener for scroll event to call setActiveLink on scroll
  window.addEventListener('scroll', setActiveLink);
});


// hero section swiper
var swiper = new Swiper(".hero_swiper", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".hero-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return number < 10 ? "0" + number : "fraction before " + number;
    },
    formatFractionTotal: function (number) {
      return number < 10 ? "0" + number : number;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Update progress bar on slide change
swiper.on("slideChange", function () {
  var currentIndex = swiper.realIndex + 1;
  var progressBar = document.querySelector(".progressbar");
  if (currentIndex === 3) {
    progressBar.style.width = "19px";
  } else if (currentIndex === 1) {
    progressBar.style.width = "140px";
  } else if (currentIndex === 2) {
    progressBar.style.width = "280px";
  }
});

// Update progress bar width on drag
// swiper.on("progress", function () {
//   var progressBar = document.querySelector(".progressbar");
//   var progress = (swiper.progress * 280).toFixed(2);
//   progressBar.style.width = progress + "px";
// });




// bets car swiper
var swiper = new Swiper(".best-car", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});
var swiperMain = new Swiper(".best-car-swiper2", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  allowTouchMove: false,
});

var swiperContent = new Swiper(".best-car-content", {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  allowTouchMove: false,
});


// testimonial section swiper
var swiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});