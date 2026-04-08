// Building a project using Object-Oriented Programming (OOP) is like building with LEGO:
// you define the "molds" (Classes) and then snap together the "bricks" (Objects).

// We’ll build a Virtual Zoo starting from a simple object and evolving into
// a full implementation using Encapsulation, Inheritance, and Polymorphism.



class Family{
constructor(family_name){
        
        this.family_name=family_name;
    }
makesound(){ 
    switch (this.family_name) {
        case "feline" : return  console.log(`${this.name} the ${this.species} says: MEOOW!!`);
            
            break;
        case "canine" : return  console.log(`${this.name} the ${this.species} says: howl!!`);
            break;
        case "bird" : return  console.log(`${this.name} the ${this.species} says: Tweet!!`);
            break;
        default: return  console.log("AHHHHHHH");
            break;
    }


};
}

class Animal extends Family{
    constructor(family_name,name,species,sound){
        
        super(family_name);
        this.name = name;
        this.species=species;
        this._hunger=50;
        this.sound=sound;
    }

    changename(name){
        console.log(`my name ${this.name} change to ${name}`)
        this.name=name;
    }

     makesound(byFamily=false){
        if(byFamily){
        return super.makesound();
     }else{
        return  console.log(`${this.name} the ${this.species} says:${this.sound}!!`);
     };

    }

    eat(){
        this._hunger -=10;
       return console.log(`${this.name} the ${this.species} in${super.name} ate. Hunger is now ${this._hunger}`);};
}



const lion=new Animal("feline","simba","lion","ROAR!!");
const bird=new Animal("columbidae","blue","bird","tweet");
const wolf=new Animal("canine","wol","wolf","howl");
const tiger=new Animal("feline","Bigcat","tiger","wool");
const fox=new Animal("canine","what does","fox","????");

console.log(lion.family_name);

let zoo=[lion,bird,wolf,tiger,fox];
lion.changename("HAHA");
for(i=0;i<zoo.length;i++){
 zoo[i].makesound(1);
 zoo[i].eat();
}
