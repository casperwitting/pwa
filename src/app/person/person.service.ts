import { Person } from "./person-list/person.model";

export class PersonService {

    private people: Person[] = [
        new Person(1, 'John doe', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum magni modi mollitia nihil repudiandae sint veritatis. A architecto cupiditate dolorum, fugit illo impedit laudantium magni maiores neque nobis quos?', 28, 'Netherlands', 'https://randomuser.me/api/portraits/men/62.jpg'),
        new Person(2, 'Casper Witting', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum magni modi mollitia nihil repudiandae sint veritatis. A architecto cupiditate dolorum, fugit illo impedit laudantium magni maiores neque nobis quos?', 22, 'Netherlands', 'https://randomuser.me/api/portraits/men/41.jpg'),
        new Person(3, 'Carmen Huibers', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum magni modi mollitia nihil repudiandae sint veritatis. A architecto cupiditate dolorum, fugit illo impedit laudantium magni maiores neque nobis quos?', 22, 'Netherlands', 'https://randomuser.me/api/portraits/women/58.jpg')
    ];

    getPeople() {
        return this.people;
    }

    getPerson(id) {
        const person = this.people.find(
            (s) => {
                return s.id === id;
            }
        );
        return person;
    }

    addPerson(person: Person) {
        let last:any = this.people[this.people.length-1];
        person.id = last.id + 1;
        this.people.push(person);
    }


}