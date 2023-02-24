const fs = require("fs");
const crypto = require("crypto");

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

  crearHash(datos) {
    let secretKey = "MiClaveSecreta";
    return crypto.createHmac("sha256", secretKey).update(datos).digest("hex");
  }

  async agregarProductos(producto) {
    let productos = await this.consultaProductos();

    let indice = productos.findIndex((us) => us.username === producto.username);
    if (indice === -1) {
      producto.id = productos.length + 1;

      if (producto.password) {
        producto.password = this.crearHash(producto.password);
      } else {
        console.log(`El producto ${producto.password} no tiene un password `);
        return;
      }

      productos.push(producto);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(productos, null, 5)
      );
    } else {
      console.log(`El producto ${producto.username} ya existe en ${this.path}`);
    }
  }

  async validaProductos(username, password) {
    let productos = await this.consultaProductos();

    let indice = productos.findIndex((us) => us.username === username);
    if (indice === -1) {
      console.log(`El producto ${producto.username} no existe ${this.path}`);
    } else {
      if (productos[indice].password == this.crearHash(password)) {
        console.log(`El producto ${username} esta conectado...!!`);
      } else {
        console.log(`El producto ${username} es incorrecto...!!`);
      }
    }
  }
}

module.exports = managerProductos;
