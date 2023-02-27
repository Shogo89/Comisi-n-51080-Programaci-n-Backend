const express = require("express");
const app = express();
const PORT = 3000;

let sw = [
  {
    id: 1,
    name: "brazalete de plata Ninyuru",
    material: "plata925",
  },
  {
    id: 2,
    name: "Anillo de bodas",
    material: "plata925",
  },
  {
    id: 3,
    name: "collar Japones",
    material: "plata925",
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/Buscar", function (req, res) {
  res.send(sw);
});

app.get("/buscando/:id", function (req, res) {
  let id = req.params.id;
  let bijouterie = sw.find((e) => e.id == id);
  if (bijouterie) {
    res.json(bijouterie);
  } else {
    res.send(`no existe esta prenda con id${id}`);
  }
  res.send("hola,soy  " + nombre + "    " + req.params.apellido);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto${PORT}`);
});
