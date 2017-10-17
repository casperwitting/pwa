export class Person {
    public id: number;
    public name: string;
    public description: string;
    public age: number;
    public country: string;
    public avatar: string;

    constructor(id: number, name: string, desc: string, age: number, country: string, avatar: string) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.age = age;
        this.country = country;
        this.avatar = avatar;
    }
}