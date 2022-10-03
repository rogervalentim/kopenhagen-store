const express = require("express");
const app = express();
const port = 3000;
const path =require('path')
const homeRoute = require("./src/routes/homeRoute");

// Configura pasta estática para acesso externo
app.use(express.static(path.join(__dirname,"./src/public")));
// Configura o template engine
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
// Configura o caminho para os views
app.set("views",(path.join(__dirname,"./src/views")));
app.use(express.json());

app.use(homeRoute);

app.listen(port, () => {
  console.log("Estamos rodando na porta: " + port);
});
