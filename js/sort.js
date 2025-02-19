import { fixedPATH } from "./path";
import { showProducts } from "./product";

var select = document.querySelector("select");
select.addEventListener("change", () => {
  let pathNOW;
  switch (select.value) {
    case "default":
      pathNOW = fixedPATH;
      showProducts(pathNOW);
      break;
    case "price-up":
      pathNOW = fixedPATH + `?_sort=price&_order=asc`;
      showProducts(pathNOW);
      break;
    case "price-down":
      pathNOW = fixedPATH + `?_sort=price&_order=desc`;
      showProducts(pathNOW);
      break;
    case "discount-down":
      pathNOW = fixedPATH + `?_sort=discountPercentage&_order=desc`;
      showProducts(pathNOW);
      break;
  }
});
