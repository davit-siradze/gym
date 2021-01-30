const menuIcon = document.querySelector
(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});


// webAnimation
// Home Page
TweenMax.from(".logo", 1.6, {
  delay: 0.8,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".hamburger-menu", 1.6, {
  delay:0.8,
  opacity:0,
  y:20,
  ease: Expo.easeInOut
});
TweenMax.from(".socialleft", 1.6, {
  delay: 0.8,
  opacity:0,
  y:20,
  ease: Expo.easeInOut
});
TweenMax.from(".whoambrip",2.9 , {
  delay: 0.8,
  opacity:0,
  y:20,
  ease: Expo.easeInOut
});
TweenMax.from(".whoambri",2.3, {
  delay: 2.1,
  opacity:0,
  y:20,
  ease: Expo.easeInout
});
TweenMax.from(".button",2.3, {
  delay: 0.8,
  opacity:0,
  y:20,
  ease: Expo.easeInout
});
TweenMax.from(".whoambrianatomy",2.3, {
  delay: 1.9,
  opacity:0,
  y:20,
  ease: Expo.easeInout
});


TweenMax.from(".right",3.5, {
  delay: 2.8,
  opacity:0,
  y:20,
  ease: Expo.easeInout
});
TweenMax.from(".whoh",2.3, {
  delay: 2.4,
  opacity:0,
  y:20,
  ease: Expo.easeInout
});
// Anatomy Page
TweenMax.from(".imgwraper",2.3, {
  delay: 1.4,
  opacity:0,
  y:20,
  ease: Expo.easeInout
});

TweenMax.from(".anatompone",2.3, {
  delay: 1.9,
  opacity:0,
  y:20,
  ease: Expo.easeInout
});
TweenMax.from(".anatomptwo1",2.3, {
  delay: 2.4,
  opacity:0,
  y:20,
  ease: Expo.easeInout
});

TweenMax.from(".customs-btn",2.3, {
  delay: 2.9,
  opacity:0,
  y:20,
  ease: Expo.easeInout
});
TweenMax.from(".geoa", 2.3, {
  delay: 1.8,
  opacity:0,
  y:20,
  ease: Expo.easeInOut
});

TweenMax.from(".enga", 2.3, {
  delay: 1.4,
  opacity:0,
  y:20,
  ease: Expo.easeInOut
});
TweenMax.from(".imgwraper",2.3, {
  delay: 1.4,
  opacity:0,
  y:20,
  ease: Expo.easeInout
});


TweenMax.from(".anatomptwo",2.3, {
  delay: 2.4,
  opacity:0,
  y:20,
  ease: Expo.easeInout
});
TweenMax.from(".aboutp",2.3, {
  delay: 3.2,
  opacity:0,
  y:20,
  ease: Expo.easeInout
});
TweenMax.from(".abouth",2.3, {
  delay: 3.2,
  opacity:0,
  y:20,
  ease: Expo.easeInout
});
TweenMax.from(".aboutback", 2.3, {
  delay: 0.7,
  opacity:0,
  y:20,
  ease: Power0.easeNone
});

TweenMax.from(".mythimg", 2.3, {
  delay: 1.9,
  opacity:0,
  y:20,
  ease: Power0.easeNone
  });
  TweenMax.from(".mythimg1", 2.3, {
  delay: 2.4,
  opacity:0,
  y:20,
  ease: Power0.easeNone
});

TweenMax.from(".practicepage", 2.3, {
    delay: 1.5,
    opacity:0,
    y:20,
    ease: Power0.easeNone
});
TweenMax.from(".calendar", 2.3, {
    delay: 1.8,
    opacity:0,
    y:20,
    ease: Power0.easeNone
});
          
TweenMax.fromTo('.hant', 2.5, 
      {left: -500, }, 
      {left: "50"});