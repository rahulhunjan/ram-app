class Person{
    constructor(name = 'Ramdeep', Age = 0){
        this.name = name;
        this.Age = Age;
   }

   getGreetings(){
    return `My name is ${this.name} `;
}
   getdescription(){
       return `${this.name} is ${this.Age} years old`;
   }
}

class Students extends Person{
    
    constructor(name, Age, major){
        super(name, Age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getdescription(){
        let description = super.getdescription();

        if(this.hasMajor()){
            description = description + ` This is ${this.major} the main subject`;
        }else{
            description = description + `Sorry no any text`;
        }

        return description;
    }
}

class Traveler extends Students{

    constructor(name, Age, major, myLocation){
        super(name, Age);
        this.myLocation = myLocation;
    }
    getGreetings(){
       let greeting = super.getGreetings();

       if(this.myLocation){
        greeting = greeting + `I am visiting from ${this.myLocation}`
    }

       return greeting;
    }
}

const me = new Traveler('Andrew Mead' , '25' , 'Computer Science' , 'Philadelphia');
console.log(me.getGreetings());

const other = new Traveler();
console.log(other.getGreetings());