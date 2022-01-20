// class Car {
//     constructor(){
//         this.name = 'avtoTransport';
//         this.model = 'sedan';
//         this.color = 'white';
//         this.countSid = 4;
//         this.mechanik = true;
//         this.signal = function (){return 'hello'}
//     }
// }

// const car = new Car();

// class Citroen extends Car{
//     constructor (){
//         super();
//         this.model = 'hatchback';
//     }
 
// }
// class Opel extends Car{
//     constructor(){
//         super();
//         this.model = 'buss';
//         this.color = 'black';
//         this.countSid = 25;
//         this.signal = function(){return 'i am moto'};

//     }
// }
// class OpelMoto extends Opel{
//     constructor(){
//         super();
//         this.countSid = 1;
//         this.color = 'blue';
//         this.model = 'moto';
//     }
// }
// const opelMoto = new OpelMoto();
// const opel = new Opel();
// const citroen =  new Citroen();
// console.log(opelMoto.signal());
class Car {
    constructor(){
        this.name = 'avtoTransport';
        this.model = 'sedan';
        this.color = 'white';
        this.countSid = 4;
        this.mechanik = true;
        this.signal = ()=>{return ('hello')};
    }
}

const car = new Car();

class Citroen extends Car{
    constructor (){
        super();
        this.model = 'hatchback';
    }
 
}
class Opel extends Car{
    constructor(){
        super();
        this.model = 'buss';
        this.color = 'black';
        this.countSid = 25;
        this.signal = ()=>{return ('hello2')};

    }
}
class OpelMoto extends Opel{
    constructor(){
        super();
        this.countSid = 1;
        this.color = 'blue';
        this.model = 'moto';
    }
}
const opelMoto = new OpelMoto();
const opel = new Opel();
const citroen =  new Citroen();
console.log(opelMoto.signal());
