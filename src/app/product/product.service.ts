import { Product } from "./product.model";
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    private shoppingCartCookie: string = 'shoppingCart';
    private products: Product[] = [
        new Product( 1,
            'Selectie Ribera del Duero Roble',
            'Roble geeft aan dat de wijn een paar maanden in eikenhouten vaten heeft gerijpt waardoor hij behalve fruitig ook lekker pittig smaakt. Dat past goed bij gegrild vlees.',
            8.99,
            'wijn',
            'https://static.ahold.com/cmgtcontent/media//001066700/000/001066714_002_139795_200.jpg',
            true ),
        new Product( 2,
            'Thierry Vaute Muscat de Beaumes de Venise',
            'Klassieke, velourszachte dessertwijn uit de Rhônevallei. Gemaakt van zoete muskaatdruiven. Die proef je duidelijk. Heerlijk bij ijs en andere nagerechten.',
            2.99,
            'wijn',
            'https://static.ah.nl/static/product/AHI_434d50303236383030_3_200x200_JPG.JPG',
            false ),
        new Product( 3,
            'Ser­vi­ce Com­prix Kaas­pla­teau ',
            'Een proeverijtje van Franse AOP kazen: Een friszure, verse geitenkaas, een gerijpte Cantal, een romige, lichtpittige Morbier en een rijke, pittige Fourme.',
            4.99,
            'kaas',
            'https://static.ahold.com/cmgtcontent/media//001595900/000/001595976_001_398269_200.jpg',
            false ),
        new Product( 4,
            'Valdivieso Merlot',
            'Deze Merlot heeft de geur van pruimen, een beetje tabac en kersen. De smaak is zacht en soepel met rijpe tannines, veel fruit van zeer rijpe pruimen, zoete kruiden, koffie, chocolade en hij is een beetje rokerig.',
            9.99,
            'wijn',
            'https://static.ahold.com/cmgtcontent/media//000433400/000/000433484_004_132165_200.jpg',
            true ),
        new Product( 5,
            'Ogio Primitivo',
            'Deze rode wijn komt uit uit Puglia, in de hak van de laars van Italië. De Primitivo is hier de lokale druif die heerlijke ronde, soepele wijnen geeft vol met rijp bramenfruit.',
            7.99,
            'wijn',
            'https://static.ah.nl/static/product/AHI_434d50313731333933_1_200x200_JPG.JPG',
            false ),
        new Product( 6,
            'Valdivieso Merlot winemaker reserva',
            'De smaak van deze rode merlot wijn is zacht en soepel met rijpe tanninnes, veel fruit van zeer rijpe pruimen, zoete kruiden, koffie, chocolade en iets rokerige tonen.',
            6.99,
            'wijn',
            'https://static.ah.nl/static/product/AHI_434d50313731353437_1_200x200_JPG.JPG',
            false ),
        new Product( 7,
            'Erwtensoepgroente',
            'Maak in een handomdraai je eigen erwtensoep met deze panklare groentemix van prei, ui, wortel, knolselderij, selderij.',
            6.99,
            'groenten',
            'https://static.ah.nl/static/product/AHI_434d50313736353131_2_200x200_JPG.JPG',
            false ),
        new Product( 8,
            'Fijne soepgroente',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
            5.99,
            'groenten',
            'https://static.ah.nl/static/product/AHI_434d50323539373231_1_200x200_JPG.JPG',
            false ),
        new Product( 9,
            'Fijngesneden andijvie',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
            6.99,
            'groenten',
            'https://static.ah.nl/static/product/AHI_434d50323633343339_1_200x200_JPG.JPG',
            false ),
        new Product( 10,
            'Paddestoelen melange',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
            6.99,
            'groenten',
            'https://static.ah.nl/static/product/AHI_434d50313739313533_4_200x200_JPG.JPG',
            false ),
        new Product( 11,
            'Biologisch Pastinaak',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
            6.99,
            'groenten',
            'https://static.ah.nl/static/product/AHI_434d50303135323238_3_200x200_JPG.JPG',
            true ),
        new Product( 12,
            'Regenboog wortelmix',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cum cumque, dicta dolores eos esse eum, harum inventore iste magnam modi odio perferendis quos.',
            6.99,
            'groenten',
            'https://static.ah.nl/static/product/AHI_434d50313739313737_3_200x200_JPG.JPG',
            false ),
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
    private shoppingCart: { productId: number, quantity: number }[] = (this.cookieService.get( this.shoppingCartCookie ) ? JSON.parse( this.cookieService.get( this.shoppingCartCookie ) ) : []);

    constructor( private cookieService: CookieService ) {
    }


    getProducts() {
        return this.products;
    }

    getProductsByCategory( categoryName: string ) {
        let products = this.getProducts();
        let productsInCategory = [];

        for ( let product of products ) {
            if ( product.category == categoryName ) {
                productsInCategory.push( product );
            }
        }

        return productsInCategory;
    }

    getProduct( id ) {
        const product = this.products.find(
            ( s ) => {
                return s.id === id;
            }
        );
        return product;
    }

    addProduct( product: Product ) {
        let last: any = this.products[ this.products.length - 1 ];
        product.id = last.id + 1;
        this.products.push( product );
    }

    getProductsInShoppingCart() {
        let products = [];

        for ( let cartProduct of this.shoppingCart ) {
            let product = this.getProduct( cartProduct.productId );
            product[ 'quantity' ] = cartProduct.quantity;
            product[ 'cartPrice' ] = this.roundPrice(cartProduct.quantity * product.price);
            products.push( product );
        }
        return products;
    }

    addProductToShoppingCart( productId: number ) {
        let newProduct = {
            'productId': productId,
            'quantity': 1
        };

        if ( this.productInShoppingCart( productId ) ) {
            for ( let product of this.shoppingCart ) {
                if ( productId === product.productId ) {
                    product.quantity += 1;
                    break;
                }
            }
        }
        else {
            this.shoppingCart.push( newProduct );
        }

        this.cookieService.set( this.shoppingCartCookie, JSON.stringify( this.shoppingCart ) );
    }

    productInShoppingCart( productId ) {
        if ( this.shoppingCart.filter( e => e.productId == productId ).length > 0 ) {
            return true;
        }
        else {
            return false;
        }
    }

    inShoppingCartCount() {
        let quantity: number = 0;

        for ( let product of this.shoppingCart ) {
            quantity += product.quantity;
        }
        return quantity;
    }

    getShoppingCartPriceTotal() {
        let priceTotal: number = 0;
        let products = this.getProductsInShoppingCart();

        for ( let product of products ) {
            priceTotal += product.cartPrice;
        }
        return this.roundPrice(priceTotal);
    }

    roundPrice( price: number ) {
        return +price.toFixed( 2 );
    }
}