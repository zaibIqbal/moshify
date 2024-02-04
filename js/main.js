let collapsibles = document.getElementsByClassName("collapsible");
console.log(collapsibles);
collapsibles = Array.from(collapsibles);
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

console.log(collapsibles);
