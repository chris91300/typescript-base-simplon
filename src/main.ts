import { ClothingSize } from "./enums/ClothingSize.js";
import { Clothing } from "./models/Clothing.js";
import { Customer } from "./models/Customer.js";
import { Order } from "./models/Order.js";
import { Shoes } from "./models/Shoes.js";

const christophe = new Customer("Christophe", "mchristophe@gmail.com");
const bastien = new Customer("Bastien", "bastienSimplon@gmail.com");
const radin = new Customer("Radin", "radin@gmail.com");

const pull = new Clothing("pull", 200, 30, ClothingSize.L);
const pantalon = new Clothing("pantalon", 400, 40, ClothingSize.XL);
const chaussette = new Clothing("chaussette", 50, 5, ClothingSize.S);

const nike = new Shoes("nike", 350, 150, 45);
const puma = new Shoes("puma", 280, 200, 43);
const adidas = new Shoes("adidas", 210, 110.5, 40);

const christopheOrder: Order = new Order(christophe);
christopheOrder.addProduct(pull);
christopheOrder.addProduct(chaussette);
christopheOrder.addProduct(puma);

const bastienOrder: Order = new Order(bastien);
bastienOrder.addProduct(pull);
bastienOrder.addProduct(pantalon);
bastienOrder.addProduct(chaussette);
bastienOrder.addProduct(nike);
bastienOrder.addProduct(adidas);

const radinOrder: Order = new Order(radin);

christopheOrder.displayOrder();
bastienOrder.displayOrder();
radinOrder.displayOrder();

