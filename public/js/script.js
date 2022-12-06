
const body = document.querySelector("body");
// body.addEventListener("click", ()=> {
//      // console.log("Hello")
//      body.innerHTML = "Hello"
// })

const orb = document.getElementById("main-page-orb");
const triangle = document.getElementById("triangle");
console.log(triangle)


function zoomOrb(event) {
     event.preventDefault();

     scale += event.deltaY * -0.001;

     // Restrict scale
     scale = Math.min(Math.max(.125, scale), 4);

     // Apply scale transform
     orb.style.transform = `scale(${scale}) skewY(10deg)`;
}

let scale = 1;
orb.onwheel = zoomOrb;

function zoomTriangle(event) {
     // event.preventDefault();

     scaleTriangle += event.deltaY * -0.001;

     // Restrict scale
     scaleTriangle = Math.min(Math.max(.125, scaleTriangle), 4);

     // Apply scale transform
     triangle.style.transform = `scale(${scaleTriangle}) scale3d(1.5, 1.5, 1.5)`;
     // triangle.style.transform = `translateX(50%)`;
}

let scaleTriangle = 1;
window.onwheel = zoomTriangle;
// const el = document.querySelector('div');