const fs = require("fs");

class managerProductos {
  constructor(archivo) {
    this.path = archivo;
  }

  async consultaProductos() {
    if (fs.existsSync(this.path)) {
      let lectura = await fs.promises.readFile(this.path, "utf-8");
      return JSON.parse(lectura);
    } else {
      return [];
    }
  }

  async agregarProductos(producto) {
    let productos = await this.consultaProductos();

    let indice = productos.findIndex((us) => us.username === producto.username);
    if (indice === -1) {
      producto.id = productos.length + 1;

      productos.push(producto);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(productos, null, 5)
      );
    } else {
      console.log(`El producto ${producto.username} ya existe en ${this.path}`);
    }
  }
  /*getById(id) {
    const foundProduct = this.products.find((product) => product.id === id);

    if (foundProduct) {
      return foundProduct;
    }

    return "No se encontro el producto";
  }*/
}

module.exports = managerProductos;
