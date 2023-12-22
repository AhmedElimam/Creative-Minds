
// dark mode logic

const darkTheme = "dark-theme";

const darkThemeSetUp = () => {
  if (getCurrentTheme() === "dark") {
    document.getElementById("toggleBtn").checked = true;
    document.getElementById("mode-text").textContent = "Dark Mode";
  } else {
    document.getElementById("toggleBtn").checked = false;
    document.getElementById("mode-text").textContent = "Light Mode";
  }
};

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

//   Get user's theme preference from local storage
const selectedTheme = localStorage.getItem("selected-theme");
if (selectedTheme === "dark") {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  darkThemeSetUp();
}

const themeButton = document.getElementById("toggleBtn");
themeButton.addEventListener("change", () => {
  document.body.classList.toggle(darkTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  darkThemeSetUp();
});

//scrolling bar
$(document).ready(function () {
  let progressBar = $("#progress-bar");
  let percentageText = $("#percentage");

  // Update progress on scroll
  $(window).scroll(function () {
    let scrollHeight = $(document).height() - $(window).height();
    let scrollPosition = $(window).scrollTop();
    let progress = (scrollPosition / scrollHeight) * 100;

    progressBar.css("height", progress + "%");
    percentageText.text(Math.round(progress) + "%");
  });
})
// gsap imports

gsap.set("svg", {autoAlpha:1})

gsap.timeline({repeat:0})
  //.set(".text", {textContent:"This is just a text."})
  .from("#masterText", {
  attr: { startOffset: "110%" },
  duration: 5, ease: "Power2.easeInOut",
  transition:"0.4s all ease-in-out",
  stagger:5
})
  .to("#masterText", {autoAlpha:1, duration: 0.5, stagger:5,},5);


// Initial cursor animation

//chat gsap
  const split = new SplitType(".intro-text-semi", { types: "chars,words,lines" });

// GSAP animation
gsap.to(".quote", {
  opacity: 1,
  duration: 1,
  delay: 5,

});
gsap.from(split.chars, {
  opacity: 0,
  delay: 5,
  y: 30,
  stagger: 0.1,
  duration: 1,
  ease: "power3.out",
});

// Text animation
let tween = gsap.to("#app", {
  text: { value: "APPS" },
  duration: 3,
  delay: 1,
  repeat: -1,
  ease: "Power2.easeInOut",
  onComplete: function () {
    // Backspace effect
    gsap.to("#app", {
      text: { value: "" },
      duration: 0.5,
      delay: 3,
      onComplete: function () {
        // Restart the text animation
        tween.restart();
      }
    });
  }
});


gsap.from('.intro-textline', {
  x: '100%',
  duration: 20,
  ease: 'linear',
  repeat: -1,
  onComplete: function () {
    // gsap.to animation initiated after gsap.from finishes
    gsap.to('.intro-textline', {
      x: '-100%',
      delay: 35,
      duration: 30,
      ease: 'linear',
      repeat: -1,
    });
  },
});

//logo pop main animation 
const tl = gsap.timeline();
tl.to('#logo-pops', { duration: 0.5, scale: 1.2, repeat:-1, ease: "power0.inOut", })
.to('#logo-pops', { duration: 0.5, scale: 1, repeat:-1, delay: 0.1, ease: "power0.inOut", });

  //orbit 
gsap.to(".horn_container", {
  y: 50, // Adjust the bounce height
  duration: 1,
  ease: "power3.inOut",
  repeat: -1, // Infinite bounce
  yoyo: true // Bounce back and forth
});


//owl carousle 

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  items:5,
  autoplay:true,
  autoplayTimeout: 4000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})