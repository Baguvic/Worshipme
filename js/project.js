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

// search
function search() {
  let filter = document.getElementById("search-input").value.toUpperCase();
  let item = document.querySelectorAll(".card-project");
  let h3Elements = document.getElementsByTagName("h3");
  let spanElements = document.querySelectorAll(".role");

  for (let i = 0; i < item.length; i++) {
    let h3Text = h3Elements[i].innerHTML || h3Elements[i].textContent;
    let spanText = spanElements[i].innerHTML || spanElements[i].textContent;
    let value = h3Text + spanText;

    if (value.toUpperCase().indexOf(filter) !== -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}
