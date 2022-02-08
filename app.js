let btnToggle = document.querySelectorAll(".btn-toggle");
let textHidden = document.querySelector(".hidden-text");

btnToggle.forEach((btns) => {
  btns.addEventListener("click", function (e) {
    const faq = e.currentTarget.parentNode.parentNode.parentNode;
    faq.classList.toggle("show-text");
  });
});
