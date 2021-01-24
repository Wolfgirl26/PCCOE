const container = document.querySelectorAll(".container .card");

container.forEach((el) => {
 el.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
  let yAxis = (window.innerHeight / 3 - e.pageY) / 100;
  el.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
 });
});
//in
container.forEach((el) => {
 el.addEventListener("mouseenter", (e) => {
  el.style.transition = `all 0.5s ease`;
  el.style.animation = `animacion 1.5s forwards`;
  el.querySelector(".title").style.transform = "translateZ(100px)";
 });
});
//out
container.forEach((el) => {
 el.addEventListener("mouseleave", (e) => {
  el.style.transition = `all 1.5s ease`;
  el.style.animation = `none`;
  el.style.transform = `rotateY(0deg) rotateX(0deg)`;
  el.querySelector(".title").style.transform = "translateZ(0px)";
 });
});

const container1 = document.querySelectorAll(".container .card2");

container1.forEach((el) => {
 el.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
  let yAxis = (window.innerHeight / 3 - e.pageY) / 100;
  el.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
 });
});
//in
container1.forEach((el) => {
 el.addEventListener("mouseenter", (e) => {
  el.style.transition = `all 0.5s ease`;
  el.style.animation = `animacion1 1.5s forwards`;
  el.querySelector(".title1").style.transform = "translateZ(150px)";
 });
});
//out
container1.forEach((el) => {
 el.addEventListener("mouseleave", (e) => {
  el.style.transition = `all 1.5s ease`;
  el.style.animation = `none`;
  el.style.transform = `rotateY(0deg) rotateX(0deg)`;
  el.querySelector(".title1").style.transform = "translateZ(0px)";
 });
});
