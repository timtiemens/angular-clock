class Student {
    fullname: string;
    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}
interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = {firstname: "Jane", lastname: "User"};
user = new Student("Jane", "M.", "User");
// compile error: user = [1,2,3];

document.body.innerHTML = greeter(user);

