gsap.registerPlugin(ScrollTrigger);
const preloaderFunction = () => {
  const tl = gsap.timeline();
  // tl.from(".first-page .last", {
  //   height: 0,
  //   width: 0,
  //   opacity: 0,
  //   duration: 1.5,
  //   // display: none,
  // });

  tl.to(".first-page h2 span", {
    opacity: 1,
    y: 30,
    duration: 1,
    stagger: 0.5,
    // display: none,
  });
  // Animation to fade out the images
  tl.to(".first-page .last", {
    opacity: 0,
    duration: 1,
  });
  tl.to(".first-page h2 span", {
    opacity: 0,
    duration: 1,
  });
  // Black screen animation
  tl.to(
    "#preloader",
    {
      backgroundColor: "#FF0100", // Change background color to mehroom
      duration: 0.5,
    },
    "-=0.5"
  ); // Overlap with the end of the h2 animation
  tl.to(
    "h1 .front",
    {
      opacity: 1,
      y: -30,
      duration: 1,
      stagger: 0.4,
      // color: yellow,
    },
    "same"
  ).to(
    "h1 .back",
    {
      opacity: 1,
      y: -30,
      duration: 1,
      stagger: -0.4,
      // color: yellow,
    },
    "same"
  );
  // Hide the preloader and show the main content

  tl.to("#preloader", {
    x: "-100%",
    onComplete: () => {
      document.body.classList.remove("loading");
      document.getElementById("preloader").style.display = "none";
      document.getElementById("main").style.display = "block";
    },
  });
  tl.from("#logo h1", {
    opacity: 0,
    y: 80,
    duration: 1,
  });
  tl.from(
    ".nav-wrapper span",
    {
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    },
    "same"
  );
  tl.from(
    "#tag-line h1",
    {
      x: "200%",
      duration: 1,
    },
    "same"
  );
  tl.from(".text h1", {
    x: "-100%",
    duration: 1,
  });
  tl.from(".text h2", {
    opacity: 0,
    duration: 1.5,
  });
  tl.from(
    "#name button",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.5"
  );
};
window.addEventListener("load", preloaderFunction);

// window.addEventListener("load", preloaderFunction);

// function myFunction(x) {
//   x.classList.toggle("change");
// }
// var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#blur");
// var blur2 = document.querySelector("#blur2");
// var blur3 = document.querySelector("#blur3");
// var blur4 = document.querySelector("#blur4");
// var blur5 = document.querySelector("#blur5");

document.addEventListener("mousemove", function (dets) {
  //     crsr.style.left = dets.x + "px";
  //     crsr.style.top = dets.y + "px";

  blur.style.left = dets.x - 100 + "px";
  blur.style.top = dets.y - 100 + "px";

  //     blur2.style.left = dets.x - 150 + "px";
  //     blur2.style.top = dets.y - 150 + "px";

  //     blur3.style.left = dets.x - 250 + "px";
  //     blur3.style.top = dets.y - 250 + "px";

  //     blur4.style.left = dets.x - 350 + "px";
  //     blur4.style.top = dets.y - 350 + "px";

  //     // blur5.style.left = dets.x - 50vh + "vh";
  //     // blur5.style.top = dets.y - 50vw + "vw";
  //     // blur5.style.left = `calc(${dets.x}vw - 50vw)`;
  //     // blur5.style.top = `calc(${dets.y}vh - 50vh)`;
  //     blur5.style.left = `calc(${dets.clientX}px - 50vw)`;
  //     blur5.style.top = `calc(${dets.clientY}px - 50vh)`;
});

// gsap.to(".promo-container", {
//   opacity: 1,
//   // backgroundColor: "#95c11e",
//   scrollTrigger: {
//     trigger: ".promo-container",
//     scroller: ".promo-container",
//     markers: true,
//     start: "top 50%",
//     end: "top 85%",
//     scrub: 2,
//   },
// });
gsap.from(".promo-container", {
  opacity: 0,
  scrollTrigger: {
      trigger: ".promo-container",
      scroller: window, 
      // markers: true,
      start: "top -8300px",
      end: "top -8900px",
      scrub: 2,
  }
});

(function () {
  const link = document.querySelectorAll("nav > .hover-this");
  const cursor = document.querySelector(".cursor");

  const animateit = function (e) {
    const span = this.querySelector("span");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") span.style.transform = "";
  };

  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };

  link.forEach((b) => b.addEventListener("mousemove", animateit));
  link.forEach((b) => b.addEventListener("mouseleave", animateit));
  window.addEventListener("mousemove", editCursor);
})();
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#popup h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#popup h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const logoH1 = document.querySelector("#logo h1");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // Change this value to control when the color change happens
      logoH1.style.color = "#ffbb0e"; // New color when scrolled
    } else {
      logoH1.style.color = "black"; // Original color
    }
  });
});
var h4all = document.querySelectorAll("#nav");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  // height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

// Scroll Pinned Image
// gsap.registerPlugin(ScrollTrigger);

// const sections = document.querySelectorAll(".section");
// const mainImage = document.getElementById("main-image");

// sections.forEach((section, index) => {
//   ScrollTrigger.create({
//     trigger: section,
//     start: "top center",
//     end: "bottom center",
//     onEnter: () => {
//       const newImage = section.getAttribute("data-image");
//       if (mainImage.src !== newImage) {
//         gsap.to(mainImage, {
//           opacity: 0,
//           duration: 0.5,
//           onComplete: () => {
//             mainImage.src = newImage;
//             gsap.to(mainImage, { opacity: 1, duration: 0.5 });
//           },
//         });
//       }
//     },
//   });
// });

// gsap.registerPlugin(ScrollTrigger);

// const sections = document.querySelectorAll(".section");
// const mainImage = document.getElementById("main-image");

// sections.forEach((section, index) => {
//   ScrollTrigger.create({
//     trigger: section,
//     start: "top center",
//     end: "bottom center",
//     onEnter: () => {
//       const newImage = section.getAttribute("data-image");
//       if (mainImage.src !== newImage) {
//         gsap.to(mainImage, {
//           opacity: 0,
//           duration: 0.5,
//           onComplete: () => {
//             mainImage.src = newImage;
//             gsap.to(mainImage, { opacity: 1, duration: 0.5 });
//           },
//         });
//       }
//     },
//   });
// });

gsap.from(".card-box .card", {
  opacity: 0,
  duration: 2,
  delay: 1,
  stagger: 0.6,
});



const sections = document.querySelectorAll(".section");

sections.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "bottom top",
    onEnter: () => {
      gsap.to(section, { backgroundPosition: "center 0%", ease: "none" });
    },
    onLeave: () => {
      gsap.to(section, { backgroundPosition: "center -50%", ease: "none" });
    },
    onEnterBack: () => {
      gsap.to(section, { backgroundPosition: "center 0%", ease: "none" });
    },
    onLeaveBack: () => {
      gsap.to(section, { backgroundPosition: "center 50%", ease: "none" });
    },
  });
});
// const scrollContainer = document.querySelector(".scroll-container");
// const scrollContent = document.querySelector(".scroll-content");
// const contentWidth = scrollContent.scrollWidth;
// const viewportWidth = window.innerWidth;

// gsap.to(scrollContent, {
//   x: () => `-${contentWidth - viewportWidth}px`,
//   ease: "none",
//   scrollTrigger: {
//     trigger: scrollContainer,
//     start: "top",
//     // end: () => `+=${contentWidth - viewportWidth}`,
//     end: "bottom",
//     pin: true,
//     scrub: true,
//     markers: true,
//   },
// });

// Swiper
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
});

let sections1 = document.querySelectorAll(".wodka");
let navLinks = document.querySelectorAll("nav li a");
console.log(sections);
console.log(navLinks);

window.onscroll = () => {
  sections1.forEach((sec) => {
    let top = window.scrolly;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChangeTransitionEnd: function () {
        const slides = document.querySelectorAll(".swiper-slide img");
        gsap.to(slides, {
          rotation: 0,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(this.slides[this.activeIndex].querySelector("img"), {
          rotation: 10,
          duration: 0.5,
          ease: "power2.out",
        });
      },
      slideChangeTransitionStart: function () {
        gsap.to(this.slides[this.previousIndex].querySelector("img"), {
          rotation: -10,
          duration: 0.5,
          ease: "power2.out",
        });
      },
    },
  });
});


