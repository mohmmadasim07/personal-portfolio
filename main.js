const togglebtn = document.querySelector("#tog");
const links = document.querySelector(".link");

togglebtn.addEventListener("click", function () {
  links.classList.toggle("hide");
});
