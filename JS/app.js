'strict';

Product.allProducts = [];
var productNames = [];

function Product(filepath, name) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.timesDisplayed = 0;
  Product.allProducts.push(this);
  productNames.push(this.name);
}

new Product('../img/bag.jpg', 'Bag');
new Product('../img/banana.jpg', 'Banana');
new Product('../img/bathroom.jpg', 'Bathroom');
new Product('../img/boots.jpg', 'Boots');
new Product('../img/breakfast.jpg', 'Breakfast');
new Product('../img/bubblegum.jpg', 'Bubblegum');
new Product('../img/chair.jpg', 'Chair');
new Product('../img/cthulhu.jpg', 'Almighty Cthulhu');
new Product('../img/dog-duck.jpg', 'Dog Duck');
new Product('../img/dragon.jpg', 'Dragon');
new Product('../img/pen.jpg', 'Pen');
new Product('../img/pet-sweep.jpg', 'Pet Sweep');
new Product('../img/scissors.jpg', 'Pizza Scissors');
new Product('../img/shark.jpg', 'Shark');
new Product('../img/sweep.png', 'Sweep');
new Product('../img/tauntaun.jpg', 'Tauntaun Sleeping Bag');
new Product('../img/unicorn.jpg', 'Unicorn');
new Product('../img/usb.gif', 'USB');
new Product('../img/water-can.jpg', 'Water Can');
new Product('../img/wine-glass.jpg', 'Wine Glass');
