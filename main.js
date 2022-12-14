let burgerIcon = document.getElementById("burger");
let dropDown = document.querySelector(".drop-down");
console.log(dropDown);
burgerIcon.onclick = function () {
  console.log("clickd");
  console.log(dropDown);
  if (dropDown.style.display == "none") {
    dropDown.style.display = "block";
  } else {
    dropDown.style.display = "none";
  }
};
