import { showAllCategory } from "./category.js";
import { fixedPATH } from "./path.js";
import { showProducts } from "./product.js";

showProducts(fixedPATH);
showAllCategory();

var select = document.querySelector("select");
//Sắp xếp sản phẩm theo Tiêu chí
select.addEventListener("change", () => {
  let pathNOW;
  switch (select.value) {
    case "default":
      pathNOW = fixedPATH;
      showProducts(pathNOW);
      break;
    case "price-up":
      pathNOW = fixedPATH + `?_sort=price`;
      showProducts(pathNOW);
      break;
    case "price-down":
      pathNOW = fixedPATH + `?_sort=-price`;
      showProducts(pathNOW);
      break;
    case "discount-down":
      pathNOW = fixedPATH + `?_sort=-discountPercentage`;
      showProducts(pathNOW);
      break;
  }
});

var searchButton = document.querySelector("button");
var searchInput = document.querySelector(".products-block input");
console.log(searchButton);
console.log(searchInput);
//Tìm kiếm sản phẩm
searchButton.addEventListener("click", () => {
  if (searchInput.value == "") {
    showProducts(fixedPATH);
  } else {
    console.log(2);
    let pathNOW = fixedPATH + `?q=${searchInput.value}`;
    console.log(pathNOW);
    showProducts(pathNOW);
  }
});
