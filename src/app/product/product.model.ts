export class Product {
    constructor(public id: number, public title: string, public description: string, public price: number, public category: string, public avatar: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.category = category;
        this.avatar = avatar;
    }
}