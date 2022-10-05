const products = [
  {
    id: 1,
    name: "Língua de Gato Tablete ao Leite 100G",
    price: "R$ 26,90",
    image: "/images/products/kopenhagen-produto-1.png",
  },
  {
    id:2,
    name:"Língua de Gato Duas Unidades 170G",
    price: "R$56,90",
    image:"/images/products/kopenhagen-produto-2.png"
  },
  {
    id:3,
    name:"Língua de Gato Duas Unidades 170G",
    price: "R$59,90",
    image:"/images/products/kopenhagen-produto-3.png"
  }
];

const homeController = {
  index: (req, res) => {
    return res.render("home", { products: products });
  },
};

module.exports = homeController;
