"use strict";

var faker = require("faker");
const { name, datatype, commerce } = faker;

function getPizzas() {
  return {
    pizzas: generatePizzas(),
  };
}

function generatePizzas() {
  var pizzas = [];

  for (var i = 1; i <= 20; i++) {
    pizzas.push(generatePizzaDate());
  }

  return pizzas;
}

function generatePizzaDate() {
  const result = {
    id: datatype.uuid(),
    name: name.findName(),
    description: commerce.productDescription(),
    price: commerce.price(100, 200),
    images: generateImages(),
  };

  return result;
}

function generateImages() {
  return new Array(5)
    .fill(0)
    .map(
      () => `${faker.image.food()}?random=${Math.round(Math.random() * 1000)}`
    );
}

module.exports = getPizzas;
