class dvdPlayer{
    turnOn(){
        console.log("dvd player turned on");
        return true;
    }
    turnOff(){
        console.log("dvd player turned off");
    }
}

class projectorPlayer{
    turnOn(){
        console.log("projector turned on");
        return true;
    }
    turnOff(){
        console.log("projector turned off");
    }
}

class soundSystemPlayer{
    turnOn(){
        console.log("sound system turned on");
        return true;
    }
    turnOff(){
        console.log("sound system turned off");
    }
}

class facadeTheatre{
    constructor(){
        this.dvd = new dvdPlayer();
        this.projector = new projectorPlayer();
        this.soundSystem = new soundSystemPlayer();
    }
    turnMovieOn(){
        if(!this.dvd.turnOn()){
            throw new Error("turn on dvd");
        }
        if(!this.projector.turnOn()){
            throw new Error("turn on projector");
        }
        this.soundSystem.turnOn();
    }

    turnMovieOff(){
        this.dvd.turnOff();
        this.projector.turnOff();
        this.soundSystem.turnOff();
    }

}

const client = new facadeTheatre();
client.turnMovieOn();
client.turnMovieOff();