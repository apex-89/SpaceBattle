let myShip = document.getElementById('my-ship');
let enemy1 = document.getElementById('borg0');


let shipHullElement = document.getElementById('my-ship-hull');
// let borgHullElement = document.getElementById('hull');
// let borgFirepowerElement = document.getElementById('firepower');
// let borgAccuracyElement = document.getElementById('accuracy');


// let currentHull = +shipHullElement.innerText;// dont need?
// let currentEnemyHUll =  +borgHullElement.innerText;// dont need?

myShip.addEventListener('click', () => {    
    spaceBattle()
})

class Ship {
    constructor(hull, firepower, accuracy){
        this.hull = hull;// if reaches 0 or less, ship is destroyed
        this.firepower = firepower;// amount of damage done to the hull of the target with successful hit
        this.accuracy = accuracy;// chance between 0 and 1 that the ship will hit its target
    }
    attack(alien){ // can I update the html of enemy hull here?
        if(Math.random() < alien.accuracy){
            alien.hull = alien.hull - this.firepower;
            // borgHullElement.innerText = alien.hull
            // console.log(borgHullElement.innerText)
            console.log("ON TARGET!");
        }else{
            console.log("miss")
        }
    }
    defend(self){// can I update html of my ship hull here
        if(Math.random() < self.accuracy){
            self.hull = self.hull - this.firepower;
            shipHullElement.innerText = ussHelloWorld.hull;
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
    addToFleet(){ 
        let cubeHull = Math.floor(Math.random()*(7 - 3)) + 3;
        let cubeFirepower = Math.floor(Math.random()*(5 - 2)) + 2;
        let cubeAccuracy = Number(((Math.random()*(.9 - .6)) + .55).toFixed(1));
        this.fleet.push(new Ship(cubeHull, cubeFirepower, cubeAccuracy));
    }
};

let ussHelloWorld = new Ship(20, 5, .7);

let borg = new AlienShip();


borg.addToFleet();
borg.addToFleet();
borg.addToFleet();
borg.addToFleet();
borg.addToFleet();
borg.addToFleet();

for (let i=0; i<6; i++){
    let borgHullElement = document.querySelector(`#id-${i} .hull`)
    let borgFireowerElement = document.querySelector(`#id-${i} .firepower`)
    let borgAccuracyElement = document.querySelector(`#id-${i} .accuracy`)
    borgHullElement.innerText = borg.fleet[i].hull
    borgFireowerElement.innerText = borg.fleet[i].firepower
    borgAccuracyElement.innerText = borg.fleet[i].accuracy
    console.log(borgHullElement, borgFireowerElement, borgAccuracyElement)
}

const spaceBattle = () => {
    let fleet = borg.fleet;
    for(let i=0; i<fleet.length; i++){
        // borgHullElement.innerText = fleet[i].hull
        if(ussHelloWorld.hull <= 0){
            break;
        }
        console.log(fleet[i])
        while(true) {            
            ussHelloWorld.attack(fleet[i])            
            if (fleet[i].hull <= 0){
                document.querySelector(`#id-${i} .hull`).innerText = fleet[i].hull
                console.log("ship destroyed") 
                    break;
            }            
            fleet[i].defend(ussHelloWorld)            
            if (ussHelloWorld.hull <= 0){
                console.log("ALL. YOUR. BASE. ARE BELONG. TO US.")
                break;
            }
        }        
    }
    // let actionPlan = window.prompt("Would you like to start and try again?", "YES")
    // if(actionPlan.toLowerCase() === "yes"){
    //     document.location.reload()
    // }else{
    //     shipHullElement.innerText = "GAMEOVER"
    // }
    // loop
    // check if hull = 0 
    // attack
    // once borg ship destroyed ask to continue or retreat
};







// for (i=0; i<20; i++){
//     console.log(Number(((Math.random()*(.9 - .6)) + .55).toFixed(1)))
// }
