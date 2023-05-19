import dataFood from "./dataFood.js";
console.log(dataFood);

const dataFoodContainerEl = document.querySelector(".js-products");
console.log(dataFoodContainerEl);

const makeProductCard = ({ description, image, price, quantity }) => {
  const dataFoodEl = document.createElement("article");
  dataFoodEl.classList.add("product");

  const descrEl = document.createElement("p");
  descrEl.textContent = description;
  descrEl.classList.add("product__descr");

  const imageEl = document.createElement("img");
  imageEl.src = image;
  imageEl.classList.add("product__image");

  const priceEl = document.createElement("p");
  priceEl.textContent = price;
  priceEl.classList.add("product__price");

  const quantityEl = document.createElement("p");
  quantityEl.textContent = quantity;
  quantityEl.classList.add("product__quantity");

  dataFoodEl.append(imageEl, descrEl, priceEl, quantityEl);

  return dataFoodEl;
};

const elements = dataFood.map(makeProductCard);

console.log(elements);

dataFoodContainerEl.append(...elements);