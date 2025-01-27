var products = document.querySelectorAll(".product");
var confirmation = document.querySelector(".confirmation");

function addToCart() {
  confirmation.classList.add("is-active");

  setTimeout(function () {
    confirmation.classList.remove("is-active");
  }, 2000);
}

products.forEach(function (product) {
  product.addEventListener("click", addToCart);
});
