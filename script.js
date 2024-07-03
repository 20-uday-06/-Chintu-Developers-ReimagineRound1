function myFunction(x) {
  x.classList.toggle("change");
}
// var crsr = document.querySelector("#cursor");
// var blur1 = document.querySelector("#blur1");
// var blur2 = document.querySelector("#blur2");
// var blur3 = document.querySelector("#blur3");
// var blur4 = document.querySelector("#blur4");
// var blur5 = document.querySelector("#blur5");

// document.addEventListener("mousemove", function (dets) {
//     crsr.style.left = dets.x + "px";
//     crsr.style.top = dets.y + "px";

//     blur1.style.left = dets.x - 100 + "px";
//     blur1.style.top = dets.y - 100 + "px";

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
// });

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
  height: "110px",
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

gsap.registerPlugin(ScrollTrigger);

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
