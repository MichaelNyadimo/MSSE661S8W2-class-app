var object = {
    name: 'Bob',
    age: 50
};

class Bob {
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getLegalAge(){
    return this.age > 18;   
    }
}

console.log(new personal('Bob', 50));