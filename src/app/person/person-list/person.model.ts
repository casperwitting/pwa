export class Person {
    public id: number;
    public full_name: string;
    public description: string;
    public age: number;
    public country: string;
    public avatar: string;

    constructor(id: number, full_name: string, desc: string, age: number, country: string, avatar: string) {
        this.id = id;
        this.full_name = full_name;
        this.description = desc;
        this.age = age;
        this.country = country;
        this.avatar = avatar;
    }
}