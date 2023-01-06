let myShip = document.getElementById('my-ship');
let shipHullElement = document.getElementById('my-ship-hull');
let button = document.querySelector('button')

button.addEventListener('click', () => {    
    spaceBattle()
})

class Ship {
    constructor(hull, firepower, accuracy){
        this.hull = hull;// if reaches 0 or less, ship is destroyed
        this.firepower = firepower;// amount of damage done to the hull of the target with successful hit
        this.accuracy = accuracy;// chance between 0 and 1 that the ship will hit its target
    }
    attack(alien){
        if(Math.random() < alien.accuracy){
            alien.hull = alien.hull - this.firepower;
            myShip.style.animation = "shake 0.5s"
            console.log("ON TARGET!");
        }else{
            console.log("miss")
        }
    }
    defend(self){
        if(Math.random() < self.accuracy){
            self.hull = self.hull - this.firepower;
            shipHullElement.innerText = `HULL: ${ussHelloWorld.hull}`;
            console.log("WE'VE BEEN HIT!!", this.firepower, ussHelloWorld.hull)
        }else{
            console.log("deflected")
        }
        // accuracy check
        // if true:
        // self.hull - alien.firepower
    }
};

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

// loop through fleet
// add borg properties to html
for (let i=0; i<6; i++){
    let borgHullElement = document.querySelector(`#id-${i} .hull`)
    let borgFireowerElement = document.querySelector(`#id-${i} .firepower`)
    let borgAccuracyElement = document.querySelector(`#id-${i} .accuracy`)
    borgHullElement.innerText = `HULL: ${borg.fleet[i].hull}`
    borgFireowerElement.innerText = `FIREPOWER: ${borg.fleet[i].firepower}`
    borgAccuracyElement.innerText = `ACCURACY: ${borg.fleet[i].accuracy}`
    console.log(borgHullElement, borgFireowerElement, borgAccuracyElement)
};
 // end of game prompt 
const actionEx = () => {
    const actionPlan = prompt("Would you like to start and try again?", "YES")
    if(actionPlan.toLowerCase() === "yes"){
        document.location.reload()
    }else{
        shipHullElement.innerText = "GAMEOVER"
    }
};

const spaceBattle = () => {
    // start loop through fleet
    // hull check for our ship
    let fleet = borg.fleet;
    for(let i=0; i<fleet.length; i++){
        if(ussHelloWorld.hull <= 0){
            break;
        }
        console.log(fleet[i])
        // call attack method
        // update fleet hull and img if destroyed 
        while(true) {       
            ussHelloWorld.attack(fleet[i])            
            if (fleet[i].hull <= 0){
                document.querySelector(`#id-${i} .hull`).innerText = `HULL: ${fleet[i].hull}`;
                document.querySelector(`#img-${i}`).src = `./images/enemy_ship_dead.png`;
                document.querySelector(`#img-${i}`).style.animation = "shake 0.5s";
                console.log("ship destroyed"); 
                    break;
            }
            // call defend method
            // check if our ship is destroyed             
            fleet[i].defend(ussHelloWorld);            
            if (ussHelloWorld.hull <= 0){
                myShip.style.animation = "shake 0.5s";
                console.log("ALL. YOUR. BASE. ARE BELONG. TO US.");
                break;
            }
        }        
    }
    // after game end you can stop or reload the game
    if(ussHelloWorld.hull <= 0 || fleet[fleet.length - 1].hull <= 0){
        setTimeout(actionEx, 250)
    }
    
    // loop
    // check if hull = 0 
    // attack
    // once borg ship destroyed ask to continue or retreat
};

