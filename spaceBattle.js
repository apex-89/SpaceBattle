class Ship {
    constructor(hull, firepower, accuracy){
        this.hull = hull;// if reaches 0 or less, ship is destroyed
        this.firepower = firepower;// amount of damage done to the hull of the target with successful hit
        this.accuracy = accuracy;// chance between 0 and 1 that the ship will hit its target
    }
    attack(alien){
        if(Math.random() < alien.accuracy){
            alien.hull -= this.firepower;
            console.log("ON TARGET!");
        }else{
            console.log("miss")
        }
    }
    defend(self){
        if(Math.random() < self.accuracy){
            self.hull -= this.firepower;
            console.log("WE'VE BEEN HIT!!", this.firepower, ussHelloWorld.hull)
        }else{
            console.log("deflected")
        }
        // accuracy check
        // if true:
        // self.hull - alien.firepower
    }
};
// EXAMPLE USE OF accuracy TO DETERMINE A HIT:
// if(Math.random() < alien[0].accuracy){
//     console.log("You have been hit")
// }

// hull- between 3 and 6
// firepower between 2 and 4
// accuracy between .6 and .8
class AlienShip {
    constructor(){
        this.fleet = [];
    }
    addToFleet(hull, firepower, accuracy){ 
        this.hull = Math.floor(Math.random()*(7 -3 )) + 3;
        this.firepower = Math.floor(Math.random()*(5 - 2)) + 2;
        this.accuracy = Number(((Math.random()*(.9 - .6)) + .55).toFixed(1));
        this.fleet.push(new Ship(this.hull, this.firepower, this.accuracy));
        // this.fleet.push(new Ship(hull, firepower, accuracy));
    }
};

let ussHelloWorld = new Ship(20, 5, .7);

let borg = new AlienShip();

// borg.addToFleet(Math.floor(Math.random()*(7 -3 )) + 3, Math.floor(Math.random()*(5 - 2)) + 2, Number(((Math.random()*(.9 - .6)) + .55).toFixed(1)))
// borg.addToFleet(Math.floor(Math.random()*(7 -3 )) + 3, Math.floor(Math.random()*(5 - 2)) + 2, Number(((Math.random()*(.9 - .6)) + .55).toFixed(1)))
// borg.addToFleet(Math.floor(Math.random()*(7 -3 )) + 3, Math.floor(Math.random()*(5 - 2)) + 2, Number(((Math.random()*(.9 - .6)) + .55).toFixed(1)))
// borg.addToFleet(Math.floor(Math.random()*(7 -3 )) + 3, Math.floor(Math.random()*(5 - 2)) + 2, Number(((Math.random()*(.9 - .6)) + .55).toFixed(1)))
// borg.addToFleet(Math.floor(Math.random()*(7 -3 )) + 3, Math.floor(Math.random()*(5 - 2)) + 2, Number(((Math.random()*(.9 - .6)) + .55).toFixed(1)))
// borg.addToFleet(Math.floor(Math.random()*(7 -3 )) + 3, Math.floor(Math.random()*(5 - 2)) + 2, Number(((Math.random()*(.9 - .6)) + .55).toFixed(1)))
borg.addToFleet();
borg.addToFleet();
borg.addToFleet();
borg.addToFleet();
borg.addToFleet();
borg.addToFleet();

console.log(borg.hull)

const spaceBattle = () => {
    let fleet = borg.fleet;
    for(let i=0; i<fleet.length; i++){
        console.log(fleet[i])
        if(ussHelloWorld.hull <= 0){
            console.log("ALL. YOUR. BASE. ARE BELONG. TO US.")
            break;
        }
        
        while(true) {            
            ussHelloWorld.attack(fleet[i])            
            if (fleet[i].hull <= 0){
                break;
            }            
            fleet[i].defend(ussHelloWorld)            
            if (ussHelloWorld.hull <= 0){
                break;
            }
        }
        
    }
    // loop
    // check if hull = 0 
    // attack
    // once borg ship destroyed ask to continue or retreat
};


// spaceBattle()
console.log(borg)

// for (i=0; i<20; i++){
//     console.log(Number(((Math.random()*(.9 - .6)) + .55).toFixed(1)))
// }
