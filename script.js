// add counter "Add to Cart"

let productsCountEl = document.getElementById("cart_count");
let addToCartButtons = document.querySelectorAll(".btn_add_to_cart");

// for (i = 0; i < addToCartButtons.length; i++) {
//   addToCartButtons[i].addEventListener("click", function () {
//     console.log("&&&&&&&&&&&&&&&&");
//   });
// }

addToCartButtons.forEach((item) =>
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

// change of 'like button'

let itemLike = document.querySelectorAll(".product_like");
let itemLikeState = itemLike.get;

// itemLike.forEach((item) =>
//   item.addEventListener("click", function (e) {
//     e.target.style.backgroundColor = "blue";
//   })
// );
itemLike.forEach((item) =>
  item.addEventListener("click", function () {
    // if (item.classList.contains("liked")) {
    //   item.classList.remove("liked");
    // } else {
    //   item.classList.add("liked");
    // }
    item.classList.toggle("liked");
  })
);
// show 'modal window'

let moreDetailsBtn = document.querySelectorAll(".btn_more_details");
let modalWindow = document.querySelector(".modal");
let modalBtnClose = document.querySelector(".close_btn");
console.log(modalBtnClose);

function closeModal() {
  modalWindow.classList.remove("show");
  modalWindow.classList.add("hide");
}

function openModal() {
  modalWindow.classList.remove("hide");
  modalWindow.classList.add("show");
}

moreDetailsBtn.forEach((item) => item.addEventListener("click", openModal));
modalBtnClose.addEventListener("click", closeModal);
modalWindow.addEventListener("click", closeModal);

//slider

$(".slider_block").slick({
  autoplay: true,
  dots: true,
});
