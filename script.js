const box = document.querySelector("#box");
const upperLeft = document.querySelector("#upper-left");
const upperRight = document.querySelector("#upper-right");
const lowerLeft = document.querySelector("#lower-left");
const lowerRight = document.querySelector("#lower-right");
const apply = document.querySelector("#apply-btn");

apply.addEventListener('click', () => {
   box.style.borderTopLeftRadius = upperLeft.value;
   box.style.borderTopRightRadius = upperRight.value;
   box.style.borderBottomRightRadius = lowerRight.value;
   box.style.borderBottomLeftRadius = lowerLeft.value;
});


