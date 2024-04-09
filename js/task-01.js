const categoriesList = document.querySelector("#categories");
const categoriesItems = document.querySelectorAll(".item");
console.log("Number of categories", categoriesItems.length);

categoriesItems.forEach((item) => {
  const categoriesTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("ul > li");
  console.log("Category:", categoriesTitle);
  console.log("Elements:", categoryElements.length);
});
