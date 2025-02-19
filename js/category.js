import { fixedPATH } from "./path.js";
import { showProducts } from "./product.js";

//show tất cả Danh mục sản phẩm
export var showAllCategory = () => {
  fetch(fixedPATH)
    .then((result) => {
      return result.json();
    })

    .then((data) => {
      let categoryList = [...new Set(data.map((item) => item.category))];
      let categoryHTML = "";

      categoryList.forEach((item) => {
        categoryHTML += `<div class="col-sm-2 col-2">
          <div class="category">${item}</div>
        </div>`;
      });

      let categories = document.querySelector(".categories-block .row");
      categories.innerHTML = categoryHTML;

      //Event: hiển thị sản phẩm theo Danh mục
      let categoryItemButton = document.querySelectorAll(
        ".categories-block .row .category"
      );
      console.log(categoryItemButton);
      categoryItemButton.forEach((element) => {
        element.addEventListener("click", () => {
          let pathNOW = fixedPATH + `?category=${element.innerHTML}`;
          showProducts(pathNOW);
        });
      });
    });
};
