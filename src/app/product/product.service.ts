import { Product } from "./product.model";

export class ProductService {

    private products: Product[] = [
        new Product(1,
            'Selectie Ribera del Duero Roble',
            'Roble geeft aan dat de wijn een paar maanden in eikenhouten vaten heeft gerijpt waardoor hij behalve fruitig ook lekker pittig smaakt. Dat past goed bij gegrild vlees.',
            8.99,
            'wijn',
            'https://static.ahold.com/cmgtcontent/media//001066700/000/001066714_002_139795_200.jpg'),
        new Product(2,
            'Thierry Vaute Muscat de Beaumes de Venise',
            'Klassieke, velourszachte dessertwijn uit de Rhônevallei. Gemaakt van zoete muskaatdruiven. Die proef je duidelijk. Heerlijk bij ijs en andere nagerechten.',
            16.99,
            'wijn',
            'https://static.ah.nl/static/product/AHI_434d50303236383030_3_200x200_JPG.JPG'),
        new Product(3,
            'Ser­vi­ce Com­prix Kaas­pla­teau ',
            'Een proeverijtje van Franse AOP kazen: Een friszure, verse geitenkaas, een gerijpte Cantal, een romige, lichtpittige Morbier en een rijke, pittige Fourme.',
            6.99,
            'kaas',
            'https://static.ahold.com/cmgtcontent/media//001595900/000/001595976_001_398269_200.jpg'),
        new Product(4,
            'Valdivieso Merlot',
            'Deze Merlot heeft de geur van pruimen, een beetje tabac en kersen. De smaak is zacht en soepel met rijpe tannines, veel fruit van zeer rijpe pruimen, zoete kruiden, koffie, chocolade en hij is een beetje rokerig.',
            9.99,
            'wijn',
            'https://static.ahold.com/cmgtcontent/media//000433400/000/000433484_004_132165_200.jpg'),
        new Product(5,
            'Ogio Primitivo',
            'Deze rode wijn komt uit uit Puglia, in de hak van de laars van Italië. De Primitivo is hier de lokale druif die heerlijke ronde, soepele wijnen geeft vol met rijp bramenfruit.',
            12.99,
            'wijn',
            'https://static.ah.nl/static/product/AHI_434d50313731333933_1_200x200_JPG.JPG'),
        new Product(6,
            'Valdivieso Merlot winemaker reserva',
            'De smaak van deze rode merlot wijn is zacht en soepel met rijpe tanninnes, veel fruit van zeer rijpe pruimen, zoete kruiden, koffie, chocolade en iets rokerige tonen.',
            6.99,
            'wijn',
            'https://static.ah.nl/static/product/AHI_434d50313731353437_1_200x200_JPG.JPG'),
        new Product(7,
            'Erwtensoepgroente',
            'Maak in een handomdraai je eigen erwtensoep met deze panklare groentemix van prei, ui, wortel, knolselderij, selderij.',
            6.99,
            'groenten',
            'https://static.ah.nl/static/product/AHI_434d50313736353131_2_200x200_JPG.JPG'),
        new Product(8,
            'Fijne soepgroente',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
            6.99,
            'groenten',
            'https://static.ah.nl/static/product/AHI_434d50323539373231_1_200x200_JPG.JPG'),
        new Product(9,
            'Fijngesneden andijvie',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
            6.99,
            'groenten',
            'https://static.ah.nl/static/product/AHI_434d50323633343339_1_200x200_JPG.JPG'),
        new Product(10,
            'Paddestoelen melange',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
            6.99,
            'groenten',
            'https://static.ah.nl/static/product/AHI_434d50313739313533_4_200x200_JPG.JPG'),
        new Product(11,
            'Biologisch Pastinaak',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
            6.99,
            'groenten',
            'https://static.ah.nl/static/product/AHI_434d50303135323238_3_200x200_JPG.JPG'),
        new Product(12,
            'Regenboog wortelmix',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
            6.99,
            'groenten',
            'https://static.ah.nl/static/product/AHI_434d50313739313737_3_200x200_JPG.JPG'),
        // new Product(13,
        //     'Title',
        //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
        //     6.99,
        //     'Categorie',
        //     'Avatar'),
        // new Product(14,
        //     'Title',
        //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
        //     6.99,
        //     'Categorie',
        //     'Avatar'),
        // new Product(15,
        //     'Title',
        //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
        //     6.99,
        //     'Categorie',
        //     'Avatar'),
        // new Product(16,
        //     'Title',
        //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
        //     6.99,
        //     'Categorie',
        //     'Avatar'),
        // new Product(16,
        //     'Title',
        //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
        //     6.99,
        //     'Categorie',
        //     'Avatar'),
        // new Product(17,
        //     'Title',
        //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
        //     6.99,
        //     'Categorie',
        //     'Avatar'),
        // new Product(18,
        //     'Title',
        //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
        //     6.99,
        //     'Categorie',
        //     'Avatar'),
        // new Product(19,
        //     'Title',
        //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
        //     6.99,
        //     'Categorie',
        //     'Avatar'),
        // new Product(20,
        //     'Title',
        //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
        //     6.99,
        //     'Categorie',
        //     'Avatar'),
    ];
    

    private shoppingCart: number[] = [];

    getProducts() {
        return this.products;
    }

    getProductsByCategory(categoryName: string) {
        let products = this.getProducts();
        let productsInCategory = [];

        for (let product of products) {
            if (product.category == categoryName) {
                productsInCategory.push(product);
            }
        }

        return productsInCategory;
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
        let priceTotal: number = 0;
        let products = this.getProductsInShoppingCart();

        for (let product of products) {
            priceTotal += product.price;
        }
        return +priceTotal.toFixed(2);
    }


}