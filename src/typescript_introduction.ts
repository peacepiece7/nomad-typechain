const name ="Nicolas", age= 24, gender ="male"

const sayHi = (name: string, age : number, gender?: string) => {
    console.log("func sayHi",name, age, gender)
}

sayHi(name, age)

interface HumanInterface{
    name1 : string;
    age1 : number;
    gender1 : string;
}

const person = {
    name1 : "nico",
    age1 : 28,
    gender1 : "female"
}
const sayHi1 = (user : HumanInterface) => {
    console.log("func sayHi1", user.name1, user.age1, user.gender1)
}

sayHi1(person)



class HumanClass {
    public nickname : string;
    private name : string;
    public age : number;
    public gender : string;
    constructor(name : string, age : number, gender : string ){
        this.name = name;
        this.nickname = name;
        this.age = age;
        this.gender = gender
    }
}

const lynnInfomation = new HumanClass("Lynn", 18, "female");

const hello = (person : HumanClass) => {
    // persone.name은 HumanClass내에서만 사용할 수 있음 (ES2022에서 #(private) 문법 추가됨)
    return `Hello ${person.nickname}, you are ${person.age}, you are a ${person.gender} `
}

console.log(hello(lynnInfomation))



export {};