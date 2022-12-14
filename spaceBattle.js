class Ship {
    constructor(hull, firepower, accuracy){
        this.hull = hull;// if reaches 0 or less, ship is destroyed
        this.firepower = firepower;// amount of damage done to the hull of the target with successful hit
        this.accuracy = accuracy;// chance between 0 and 1 that the ship will hit its target
    }
    attack(alien){
        // accuracy check
        // if true:
        // alien.hull - this.firepower
    }
    defend(self){
        // accuracy check
        // if true:
        // self.hull - alien.firepower
    }
}
// EXAMPLE USE OF accuracy TO DETERMINE A HIT:
// if(Math.random() < alien[0].accuracy){
//     console.log("You have been hit")
// }

// hull- between 3 and 6
// firepower between 2 and 4
// accuracy between .6 and .8
class AlienShip {
    constructor(){
        this.fleet = []
    }
    addFleet(){ 
        this.hull = Math.floor(Math.random()*(7 -3 )) + 3
        this.firepower = Math.floor(Math.random()*(5 - 2)) + 2
        this.accuracy = Number(((Math.random()*(.9 - .6)) + .55).toFixed(1))
        this.fleet.push(new Ship(this.hull, this.firepower, this.accuracy))
    }
}

let ussHelloWorld = new Ship(20, 5, .7)

let borg = new AlienShip();

borg.addFleet();
borg.addFleet();
borg.addFleet();
borg.addFleet();
borg.addFleet();
borg.addFleet();


console.log(borg.fleet)


// for (i=0; i<20; i++){
//     console.log(Number(((Math.random()*(.9 - .6)) + .55).toFixed(1)))
// }
