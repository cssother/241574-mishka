var mainNav = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

mainNav.classList.remove("main-nav--no-js");

navToggle.addEventListener("click", function(event) {
  event.preventDefault();
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
  }
});

var productBtn = document.querySelector(".product__btn");
var productionBtn = document.querySelector(".production__btn");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

if (modal && overlay) {
  if (productBtn) {
    productBtn.addEventListener ("click", function(event) {
      event.preventDefault();
      modal.classList.add("modal--show");
      overlay.classList.add("overlay--show");
    });
  }

  if (productionBtn) {
    productionBtn.addEventListener ("click", function(event) {
      event.preventDefault();
      modal.classList.add("modal--show");
      overlay.classList.add("overlay--show");
    });
  }

  overlay.addEventListener ("click", function(event) {
    event.preventDefault();
    modal.classList.remove("modal--show");
    overlay.classList.remove("overlay--show");
  });

  window.addEventListener("keydown", function(event) {
    if(event.keyCode === 27) {
      if (modal.classList.contains("modal--show") && overlay.classList.contains("overlay--show")) {
        modal.classList.remove("modal--show");
        overlay.classList.remove("overlay--show");
      }
    }
  });
}
