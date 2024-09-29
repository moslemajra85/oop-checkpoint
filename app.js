class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCartItem {
  constructor(product) {
    this.product = product;
    this.quantity = 0;
  }

  totalPrice() {
    return this.product.prince * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.shoppingCartItems = [];
  }

  add(item) {
    //     let result = false;
    //     for (let element of this.shoppingCartItems) {
    //       if (element.id === item.id) {
    //         result = true;
    //       }
    //     }

    //     if (!result) {
    //       this.quantity = 1;
    //       this.shoppingCartItems.push(item);
    //     } else {
    //       this.quantity++;
    //     }
    //   }

    const result = this.shoppingCartItems.find(function (chartItem) {
      return chartItem.product.id === item.product.id;
    });

    if (!result) {
      item.quantity = 1;
      this.shoppingCartItems.push(item);
    } else {
      item.quantity++;
    }
  }

  remove(item) {
    // if item does not exist we return

    if (!this.shoppingCartItems.includes(item)) {
      return;
    }

    // if elemen exist we remove it
    const index = this.shoppingCartItems.indexOf(item);
    this.shoppingCartItems.splice(index, 1);
  }

  displayChart() {
     console.log(this.shoppingCartItems);
  }
}

const p = new Product(1, 'PC', 1500);
const p2 = new Product(2, 'Telephone', 800);
const chartItem = new ShoppingCartItem(p);
const chartItem2 = new ShoppingCartItem(p2);
const chart = new ShoppingCart();

chart.add(chartItem);
chart.add(chartItem2);

// console.log(chart);

// chart.remove(chartItem);
// console.log(chart);
chart.displayChart()
