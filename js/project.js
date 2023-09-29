const filterButtons = document.querySelectorAll(".list-project button");
const filterableCards = document.querySelectorAll(".filter-card .card-project");

// define the filterCard function
const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  //   filterableCards
  filterableCards.forEach((card) => {
    card.classList.add("hide");
    //   filter all
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

// add click eventlsitener to each filter button
filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);

function search() {
  let input, filter, filterCard, span, h3;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  filterCard = document.getElementById("filter-card");
  h3 = filterCard.getElementsByTagName("h3");
  for (i = 0; i < h3.length; i++) {
    a = h3[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      h3[i].style.display = "";
    } else {
      h3[i].style.display = "none";
    }
  }
}
