export class User {
    name: string;
    firstName: string;
    age: number;
    quote: string = "";
    photo: string;
    displayAge: boolean = false;

    constructor(name:string, firstName: string, age: number, photo: string) {
        this.name = name
        this.firstName = firstName
        this.age = age
        this.photo = photo
    }

    showUserAge() {
        this.displayAge = !this.displayAge;
      }
    
}