const managerProductos = require("./backend");

let mu = new managerProductos("./productos.json");

/*mu.consultaProductos().then((productos) => {
  console.log(productos);
});
/* se puede agregar mas productos siempre y cuando lo agregemos aca */

const env = async () => {
  //let productos = await mu.consultaProductos();
  //console.log(productos);

  let producto = {
    nombre: "bracelet for party",
    username: "silver3",
    precio: "400",
    password: "2023",
    stock: 5,
  };

  await mu.agregarProductos(producto);

  //await mu.consultaProductos("silver3");

  await mu.validaProductos("silver3", "2023");
};

env();
