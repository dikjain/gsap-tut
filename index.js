let inpath = `M 100 30 Q 500 30 900 30`

let dhaga = document.querySelector("#strng");
let newpg = document.querySelector("#newpg");
let xPosition = 0;
let yPosition = 0;

function newpgchng() {
  setTimeout(()=>{
    newpg.style.backgroundColor = "green"
  },1000)
}

let ui;
dhaga.addEventListener("mousemove", (dets) => {
  dist = newpg.clientHeight / 2;
  if (dets.y < dist) {
    ui = Number(dets.y) - dist - 10;
  } else if (dets.y > dist) {
    ui = Number(dets.y) - dist + 50;
    
  }
  if (ui <= 350 && ui >= -300) {
    inpath = `M 100 30 Q ${dets.x - 500} ${ui * 2} 900 30`;
    dhaga.addEventListener("mouseleave", () => {
      document.querySelector("#phrd").style.right = "30px";
    });
    setTimeout(function () {
      document.querySelector("#phrd").style.right = "-400px";
    }, 3000);
    document.querySelector("#phrd").style.right = "-400px";
  } else {
    dhaga.addEventListener("mouseleave", (dets) => {
      document.querySelector("#phrd").style.display = "none";
      newpgchng()
    });
    inpath = `M 100 30 Q 500 30 900 30`;
    setTimeout(()=>{
      dhaga.style.opacity = 0
      dndn()
    },300)
  }
  gsap.to("svg path", {
    attr: { d: inpath },
    duration: 0.3,
    ease: "power3.out",
  });
});

dhaga.addEventListener("mouseleave", (dets) => {
  gsap.to("svg path", {
    attr: { d: `M 100 30 Q 500 30 900 30` },
    duration: 0.5,
    ease: "elastic.out(2,0.3)",
  });
});

var qq = gsap.timeline();


qq.to("#sldcont", {
  scrollTrigger: {
    scrub: 1,
    trigger: "#sldcont",
    start: "top top",
    end: "bottom bottom",
  },
  x: -200 + "vw",
});
qq.from("#blnr", {
  scrollTrigger: {
    trigger: "#sldcont",
    start: "top top",
    end: "50% bottom",
    scrub:0.4,
  },
  ease: "power2.out",
  stagger: 0.15,
  y:400,
  opacity:0,
});
qq.from("#blnr2", {
  scrollTrigger: {
    trigger: "#sldcont",
    start: "12% top",
    end: "bottom bottom",
    scrub:0.4,
  },
  ease: "power2.out",
  stagger: 0.15,
  y:400,
  opacity:0
});


gsap.to("#newpg",{
  scrollTrigger:{
    start:"-16.5% top",
    trigger: "#newpg",
    end: "bottom 40%",
    toggleActions: "play reverse play reverse",
  },
  backgroundColor:"white"
})

function mnn(){
    Shery.imageEffect("#pg1cont", {
      style: 4,
      config: {
        a: { value: 0, range: [0, 30] },
        b: { value: -1, range: [-1, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 1.7777777777777777 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: false },
        maskVal: { value: 1, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
      },
      gooey: true,
    });
  }

  mnn()

let unq = gsap.timeline({
  scrollTrigger: {
    trigger: "#sldcont",
    start: "-23% top",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse",
  },
});
unq.to("#sldcont", {
  overflow: "visible",
  width: 300 + "vw",
  duration: 0.01,
  ease: "power3.out",
});
unq.to("#cont", {
  duration: 1,
  ease: "power3.out",
  backgroundColor: "black",
});


let smimg = document.querySelector(".oop");

let index = -1;

var unon = false;
document.querySelector("#pg1").addEventListener("click", () => {
  if (unon == false) {
    unon = true;
    index += 1;
    // alert(index)
    if (index <= 2) {
      document.querySelectorAll(".sctn").forEach((e) => {
        setTimeout(function () {
          e.children[index + 1].style.top = "40%";
        }, 300);
        setTimeout(function () {
          unon = false;
        }, 1000);
        let smimg = document.querySelector(".oop");
        smimg.children[index].style.top = "200%";
        setTimeout(function () {
          smimg.children[index + 1].style.top = "-168%";
          smimg.children[index + 1].style.opacity = "1";
        }, 300);
        e.children[index].style.top = "-70%";
      });
    } else {
      setTimeout(function () {
        unon = false;
      }, 1000);
      index = 0;
      for (let k = 0; k < 4; k++) {
        smimg.children[k].style.top = "200%";
      }
      smimg.children[index].style.top = "0%";
      document.querySelectorAll(".sctn").forEach((e) => {
        for (let j = 0; j < 4; j++) {
          e.children[j].style.top = "140%";
        }
        e.children[index].style.top = "40%";
      });
      index = -1;
    }
  }
});

qq.from("#blns", {
  scrollTrigger: {
    trigger: "#sldcont",
    start: "2% top",
    end: "50% bottom",
    scrub:0.4,
  },
  ease: "power2.out",
  stagger: 0.15,
  opacity:0,
  rotate:0,
  boxShadow:"5px 5px 15px red"
});
qq.to("#blnimg", {
  scrollTrigger: {
    trigger: "#sldcont",
    start: "4% top",
    end: "50% bottom",
    scrub:0.4,
  },
  ease: "power2.out",
  stagger: 0.5,
  opacity:1,
});
qq.to("#blnimg2", {
  scrollTrigger: {
    trigger: "#sldcont",
    start: "12% top",
    end: "bottom bottom",
    scrub:0.4,
  },
  ease: "power2.out",
  stagger: 0.5,
  opacity:1,
});
qq.from("#blns2", {
  scrollTrigger: {
    trigger: "#sldcont",
    start: "12% top",
    end: "bottom bottom",
    scrub:0.4,
  },
  ease: "power2.out",
  stagger: 0.15,
  opacity:0,
  rotate:0,
  boxShadow:"2px 2px 5px black",
});



