let a = document.querySelectorAll(".elem");
let b = document.querySelectorAll(".img");

a.forEach(function (val) {
  // console.log(val.childNodes[3])
  val.addEventListener("mouseenter", (e) => {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", (e) => {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", (e) => {
    val.childNodes[3].style.left = e.x + "px";
  });
});
