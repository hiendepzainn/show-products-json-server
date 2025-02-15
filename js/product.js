//Hiển thị sản phẩm từ url:queryPath
export var showProducts = (queryPath) => {
  fetch(queryPath)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      let htmlProductList = "";
      data.forEach((element) => {
        htmlProductList += `<div class="outer-product col-sm-2 col-2">
          <div class="product">
            <div class="image">
              <img
                src=${element.thumbnail}
                alt="image"
              />
            </div>

            <div class="infor">
              <h5>${element.title}</h5>
              <div class="details">
                <div class="price">$${element.price}</div>
                <div class="stock">Còn lại: ${element.stock} sp</div>
              </div>
            </div>

            <div class="discount">-${Math.ceil(
              element.discountPercentage
            )}%</div>
          </div>
        </div>`;
      });

      let products = document.querySelector(".products-block .row");
      products.innerHTML = htmlProductList;
    });
};
