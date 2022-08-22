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
modalWindow.addEventListener("click", function (e) {
  if (e.target === modalWindow) {
    closeModal();
  }
});

// Show Modal Window by scroll

function showModalByScroll() {
  if (window.pageYOffset > document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);

//slider init

$(".slider_block").slick({
  autoplay: true,
  dots: true,
});

//product quantity input change

let decrementButtons = document.querySelectorAll(".decr_btn");
let incrementButtons = document.querySelectorAll(".incr_btn");
let quantityInput = document.querySelectorAll(".quantity_input");

function Counter(incBtn, decBtn, inpValue, minCount = 1, maxCount = 5) {
  this.domRefs = {
    incBtn,
    decBtn,
    inpValue,
  };
  this.toggleButtonState = function () {
    let count = this.domRefs.inpValue.value;
    this.domRefs.decBtn.disabled = count <= minCount;
    this.domRefs.incBtn.disabled = count >= maxCount;
  };
  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inpValue.value = +this.domRefs.inpValue.value + 1;
    this.toggleButtonState();
  };

  this.decrement = function () {
    this.domRefs.inpValue.value = +this.domRefs.inpValue.value - 1;
    this.toggleButtonState();
  };
  this.domRefs.incBtn.addEventListener("click", this.increment.bind(this));
  this.domRefs.decBtn.addEventListener("click", this.decrement.bind(this));
}
let counters = [];

quantityInput.forEach((item, i) => {
  counters[i] = new Counter(
    incrementButtons[i],
    decrementButtons[i],
    quantityInput[i]
  );
});

// let counter1 = new Counter(
//   incrementButtons[i],
//   decrementButtons[i],
//   quantityInput[i]
// );
// console.log(counter1);
