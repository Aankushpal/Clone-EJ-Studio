function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

init()

var loadTL = gsap.timeline()

loadTL.to("#in1 h5", {
  y: -100,
  duration: 2,
  delay: 0.8,
})

loadTL.to("#text", {
  y: -30,
  rotateX: -90,
  opacity: 0,
  duration: 0.5,
  delay: -1.5
})

loadTL.to("#load1", {
  height: 0,
  duration: 0.6,
  delay: -0.7
})

loadTL.to("#load2", {
  height: 0,
  duration: 0.6,
  delay: -0.4
},)

loadTL.to("#load3", {
  height: 0,
  duration: 0.6,
  delay: -0.8
})

loadTL.to("#load4", {
  height: 0,
  duration: 0.6,
  delay: -0.5
})

loadTL.to("#loader", {
  top: "-100vh",
  duration: 0.6,
  delay: -0.7
})

var tl = gsap.timeline()

tl.to("#page2 #img", {
  width: "100%",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 5%",
    end: "top -40%",
    scrub: true,
    pin: true
  }
})

tl.to("#page3 h5", {
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: "#page3 h5",
    scroller: "#main",
    start: "top 80%",
    end: "top 70%",
    scrub: 3,
  },
  onStart: function () {
    $("#page3 h5").textillate({ in: { effect: 'fadeInUp' } });
  }
})


tl.to("#page3 h1", {
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "#main",
    start: "top 70%",
    end: "top 60%",
    scrub: 3,
  },
  onStart: function () {
    $("#page3 h1").textillate({ in: { effect: 'fadeInUp' } });
  }
})

var crsr = document.querySelector("#cursor")
var menu = document.querySelector("#nav #menu")
var ej = document.querySelector("#nav h1")


document.addEventListener("mousemove", function (dets) {
  crsr.style.top = `${dets.y}px`
  crsr.style.left = `${dets.x}px`
})

ej.addEventListener("mouseenter", function () {
  crsr.style.scale = 2
})

ej.addEventListener("mouseout", function () {
  crsr.style.scale = 1
})

menu.addEventListener("mouseenter", function () {
  crsr.style.scale = 2
})

menu.addEventListener("mouseout", function () {
  crsr.style.scale = 1
})

var menu = document.querySelector("#menu")
var line1 = document.querySelector("#line1")
var line2 = document.querySelector("#line2")
var fullscr = document.querySelector("#full-scr")
var flag = 0

menu.addEventListener("click", function () {
  if (flag === 0) {
    fullscr.style.bottom = 0
    menu.style.height = "25px"
    line1.style.rotate = "44deg"
    line2.style.rotate = "-45deg"
    flag = 1
  }
  else {
    fullscr.style.bottom = "-100%"
    menu.style.height = "12px"
    line1.style.rotate = "0deg"
    line2.style.rotate = "0deg"
    flag = 0
  }
})

gsap.to("#page4", {
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top -5%",
    end: "top -15%",
    scrub: 3,
    pin: true,
  }
},)

gsap.to("#page4 h1", {
  scale: 0.55,
  lineHeight: "36vw",
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top -7%",
    end: "top -40%",
    scrub: 3,
    pin: true,
  }
},)

gsap.to("#page4 h2", {
  scale: 0.85,
  delay: -1.5,
  lineHeight: "30vw",
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top -6%",
    end: "top -20%",
    scrub: 3,
    pin: true,
  }
},)

gsap.to("#page5", {
  top: "-100vh",
  scrollTrigger: {
    trigger: "#page5",
    scroller: "#main",
    start: "top 115%",
    end: "top 80%",
    scrub: 3,
  }
})


var all = document.querySelectorAll(".box")

all.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    crsr.innerHTML = "More"
    crsr.style.backgroundColor = "white"
    crsr.style.borderColor = "white"
    crsr.style.Color = "black"
    crsr.style.scale = 4
  })

  e.addEventListener("mouseleave", function () {
    crsr.innerHTML = ""
    crsr.style.backgroundColor = "transparent"
    crsr.style.borderColor = ""
    crsr.style.Color = "black"
    crsr.style.scale = 1
  })
});


var glry = document.querySelector("#gallery")

glry.addEventListener("mouseenter", function () {
  crsr.style.scale = 2
  glry.style.backgroundColor = "#fff"
  glry.style.color = "#000"
  glry.style.cursor = "pointer"
})

glry.addEventListener("mouseleave", function () {
  crsr.style.scale = 1
  glry.style.backgroundColor = "#000"
  glry.style.color = "#fff"
})


var page6TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    scrub: 2,
    pin: true
  }
})

page6TL.to("#page6 h1", {
  scale: 4,
  filter: "blur(20px)",
  opacity: 0,
}, "load")

page6TL.to("#page6 p", {
  scale: 8,
  filter: "blur(20px)",
  opacity: 0,
}, "load")

page6TL.to("#page6 #para", {
  opacity: 1,
})

