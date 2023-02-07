class productManager {
  #priceBaseEarning = 0.25;

  constructor() {
    this.products = [];
  }
  getProducts() {
    return this.products;
  }
  newProduct(title, description, price, thumbnail, code, stock = 5) {
    const existCodeProduct = this.products.find(
      (product) => product.code === code
    );
    if (existCodeProduct) {
      console.log("Code entered is repeated, please try a new code");

      return "Code repeat, cannot be added";
    }

    let newProduct = {
      title: title,
      description: description,
      price: price + price + this.#priceBaseEarning,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
      names: [],
    };
    if (this.products.length === 0) {
      newProduct.id = 1;
    } else {
      newProduct.id = this.products.length + 1;
    }
    this.products.push(newProduct);
  }

  getById(id) {
    const foundProduct = this.products.find((product) => product.id === id);

    if (foundProduct) {
      return foundProduct;
    }

    return "No se encontro el producto";
  }
}

let tm = new productManager();
tm.newProduct(
  "Earring",
  "silver 925 for party",
  "100",
  "not image",
  "earring1"
);
tm.newProduct(
  "Bracelet",
  "silver 925 for weeding",
  "200",
  "not image",
  "bracelet1"
);
tm.newProduct(
  "necklace",
  "silver 925 for all situation",
  "300",
  "not image",
  "necklace1"
);
/* tm.newProduct(
  "necklace",
  "silver 925 for all situation",
  "300",
  "not image",
  "necklace1"
);    >>    si activa esta casilla vera que se cumple la funcion de rechazar el  agregar y te solicita que coloques nuevo codigo*/
console.log(
  tm.getById(5)
); /*<<  si colocan un id les reflejara arriba de todos, si colocamos uno que no esta reflejara que no esta. */
console.log(tm.getProducts());
