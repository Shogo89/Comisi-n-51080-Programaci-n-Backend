const managerProductos = require("./backend");

let mu = new managerProductos("./productos.json");

mu.consultaProductos().then((productos) => {
  console.log(productos);
});
/* se puede agregar mas productos siempre y cuando lo agregemos aca */
let producto = {
  nombre: "bracelet for party",
  username: "silver3",
  precio: "400",
  stock: 5,
};

mu.agregarProductos(producto).then((res) => {});
