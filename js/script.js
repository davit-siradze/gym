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

// Practice
// Clicl Anatomy
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// გულმკერდი 
// Get the modal
var modals = document.getElementById("myModals");

// Get the button that opens the modal
var btn = document.getElementById("myBtns");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modals.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modals.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// ხელის კუნთის (9)
// Get the modal
var modals1 = document.getElementById("myModalss");

// Get the button that opens the modal
var btn = document.getElementById("myBtns1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes1")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modals1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modals1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modals1) {
    modals1.style.display = "none";
  }
};
// ხელის კუნთი (10)
var modals10 = document.getElementById("myModals10");

// Get the button that opens the modal
var btn = document.getElementById("myBtns10");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes10")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modals10.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modals10.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modals10) {
    modals10.style.display = "none";
  }
};

// პრესი (11)
var modals11 = document.getElementById("myModals11");

// Get the button that opens the modal
var btn = document.getElementById("myBtns11");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes11")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modals11.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modals11.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modals11) {
    modals11.style.display = "none";
  }
};
// 15 
var modals15 = document.getElementById("myModals15");

// Get the button that opens the modal
var btn = document.getElementById("myBtns15");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes15")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modals15.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modals15.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modals15) {
    modals15.style.display = "none";
  }
};
// 2 
var modals2 = document.getElementById("myModals2");

// Get the button that opens the modal
var btn = document.getElementById("myBtns2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modals2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modals2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modals2) {
    modals2.style.display = "none";
  }
};
// Trapecia
var modalbck = document.getElementById("myModalsbck");

// Get the button that opens the modal
var btn = document.getElementById("myBtnsbck");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closesbck")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modalbck.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalbck.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalbck) {
    modalbck.style.display = "none";
  }
};

// zurgis uganieresi

var modalzr = document.getElementById("myModalszr");

// Get the button that opens the modal
var btn = document.getElementById("myBtnszr");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeszr")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modalzr.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalzr.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalzr) {
    modalzr.style.display = "none";
  }
};

// zurgis uganieresi (2)

var modalzr2 = document.getElementById("myModalszr2");

// Get the button that opens the modal
var btn = document.getElementById("myBtnszr2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeszr2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modalzr2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalzr2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalzr2) {
    modalzr2.style.display = "none";
  }
};

// ukana
var modaluk = document.getElementById("myModalsuk");

// Get the button that opens the modal
var btn = document.getElementById("myBtnsuk");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closesuk")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modaluk.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modaluk.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modaluk) {
    modaluk.style.display = "none";
  }
};
// kanchi
var modalkan = document.getElementById("myModalskan");

// Get the button that opens the modal
var btn = document.getElementById("myBtnskan");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeskan")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modalkan.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalkan.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalkan) {
    modalkan.style.display = "none";
  }
};
// tric

var modaltric = document.getElementById("myModaltric");

// Get the button that opens the modal
var btn = document.getElementById("myBtntric");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closetroc")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modaltric.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modaltric.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modaltric) {
    modaltric.style.display = "none";
  }
};

// Majis gamshleli damkecveli

var modalmaj = document.getElementById("myModalmaj");

// Get the button that opens the modal
var btn = document.getElementById("myBtnmaj");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closemaj")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modalmaj.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalmaj.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalmaj) {
    modalmaj.style.display = "none";
  }
};


// დელტისებრი
var modalmxr = document.getElementById("myModalmxr");

// Get the button that opens the modal
var btn = document.getElementById("myBtntmxr");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closemxr")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modalmxr.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalmxr.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalmxr) {
    modalmxr.style.display = "none";
  }
};

// დუნდულ
var modaldundul = document.getElementById("myModaldundul");

// Get the button that opens the modal
var btn = document.getElementById("myBtndundul");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closesdundul")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modaldundul.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modaldundul.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modaldundul) {
    modaldundul.style.display = "none";
  }
};





// 12
var modal12 = document.getElementById("myModals12");

// Get the button that opens the modal
var btn = document.getElementById("myBtns12");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes12")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal12.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal12.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal12) {
    modal12.style.display = "none";
  }
};

// 13
var modal13 = document.getElementById("myModals13");

// Get the button that opens the modal
var btn = document.getElementById("myBtns13");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes13")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal13.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal13.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal13) {
    modal13.style.display = "none";
  }
};
// 14
var modal14 = document.getElementById("myModals14");

// Get the button that opens the modal
var btn = document.getElementById("myBtns14");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes14")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal14.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal14.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal14) {
    modal14.style.display = "none";
  }
};