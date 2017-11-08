import { Product } from "./product.model";

export class ProductService {

    private products: Product[] = [
        new Product(1,
            'Selectie Ribera del Duero Roble',
            'Roble geeft aan dat de wijn een paar maanden in eikenhouten vaten heeft gerijpt waardoor hij behalve fruitig ook lekker pittig smaakt. Dat past goed bij gegrild vlees.',
            8.99,
            'Wijnen',
            'https://static.ahold.com/cmgtcontent/media//001066700/000/001066714_002_139795_200.jpg'),
        new Product(2,
            'Thierry Vaute Muscat de Beaumes de Venise',
            'Klassieke, velourszachte dessertwijn uit de Rhônevallei. Gemaakt van zoete muskaatdruiven. Die proef je duidelijk. Heerlijk bij ijs en andere nagerechten.',
            16.99,
            'Wijnen',
            'https://static.ah.nl/static/product/AHI_434d50303236383030_3_200x200_JPG.JPG'),
        new Product(3,
            'Ser­vi­ce Com­prix Kaas­pla­teau ',
            'Een proeverijtje van Franse AOP kazen: Een friszure, verse geitenkaas, een gerijpte Cantal, een romige, lichtpittige Morbier en een rijke, pittige Fourme.',
            6.99,
            'Kazen',
            'https://static.ahold.com/cmgtcontent/media//001595900/000/001595976_001_398269_200.jpg'),
    ];

    private shoppingCart: number[] = [];

    getProducts() {
        return this.products;
    }

    getProduct(id) {
        const product = this.products.find(
            (s) => {
                return s.id === id;
            }
        );
        return product;
    }

    addProduct(product: Product) {
        let last:any = this.products[this.products.length-1];
        product.id = last.id + 1;
        this.products.push(product);
    }

    getProductsInShoppingCart() {
        let products = [];

        for (let product_id of this.shoppingCart) {
            let product = this.getProduct(product_id);
            products.push(product);
        }
        return products;
    }

    addProductToShoppingCart(product_id: number) {
        this.shoppingCart.push(product_id);
    }

    inShoppingCartCount() {
        return this.shoppingCart.length;
    }

    getShoppingCartPriceTotal() {
        let priceTotal = 0;
        let products = this.getProductsInShoppingCart();
        for (let product of products) {
            priceTotal += product.price;
        }
        return priceTotal;
    }


}