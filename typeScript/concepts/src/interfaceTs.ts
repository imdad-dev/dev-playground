// interface object ka structure provide krta h bss--

interface Chai{
    flavaour : string;
    price : number;
    milk?:boolean
};

const masalaChai : Chai = {
    flavaour : "masala Chai",
    price:50
};

// readonly 

interface Shop {
    readonly id : number;
      shopName : string;
}

const s : Shop = {id :1 , shopName : "ImdadSho Caffe"};
// s.id=3


interface DiscountCalculater{
        (price : number) : number;
};


const apply50 : DiscountCalculater =(price)=>price * 0.5;


interface  TeaMachine{
    start():void;
    stop():void;
};

const machine : TeaMachine ={
    start(){
        console.log("start")
    },

    stop(){ console.log("stop");
    }
}

machine.start();


// Index signature 

interface ChaiRatings {
    [ key : string ] : number
}

const ratings : ChaiRatings ={
      masala : 4.5,
       ginger : 4,
}


interface User {
    name : string;
};

interface User {
    age : number;
}

// merge 
const user : User ={
    name : "Imdad", 
    age: 23
}


// extends interface 

interface A { a : string }
interface B {b : string}

interface C extends A , B { }