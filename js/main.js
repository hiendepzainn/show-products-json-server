import { showAllCategory } from "./category.js";
import { fixedPATH } from "./path.js";
import { showProducts } from "./product.js";

showProducts(fixedPATH);
showAllCategory();

var select = document.querySelector("select");
select.addEventListener("change", () => {
  let pathNOW;
  switch (select.value) {
    case "default":
      pathNOW = fixedPATH;
      showProducts(pathNOW);
      console.log(pathNOW);
      break;
    case "price-up":
      pathNOW = fixedPATH + `?_sort=price&_order=asc`;
      showProducts(pathNOW);
      console.log(pathNOW);
      break;
    case "price-down":
      pathNOW = fixedPATH + `?_sort=price&_order=desc`;
      showProducts(pathNOW);
      console.log(pathNOW);
      break;
    case "discount-down":
      pathNOW = fixedPATH + `?_sort=discountPercentage&_order=desc`;
      showProducts(pathNOW);
      console.log(pathNOW);
      break;
    default:
      pathNOW = fixedPATH; // Xử lý trường hợp không có lựa chọn hợp lệ
      break;
  }
});
