export class Product {
    constructor( public id: number, public title: string, public description: string, public price: number, public category: string, public avatar: string, public onSale: boolean ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.category = category;
        this.avatar = avatar;
        this.onSale = onSale;
    }
}