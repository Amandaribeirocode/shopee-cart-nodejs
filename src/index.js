import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";


const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");


//criando itens do carrinho
const item1 = await createItem("calça", 59.99, 1);
const item2 = await createItem("blusa", 29.99, 3);
const item3 = await createItem("sapato", 44.99, 1);



//adicionado 2 itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);


//remove item do carrinho
await cartService.removeItem(myCart, 1);

//exibe lista do carrinho 
await cartService.displayCart(myCart);


//calcula o valor total da lista do carrinho
await cartService.calculateTotal(myCart);