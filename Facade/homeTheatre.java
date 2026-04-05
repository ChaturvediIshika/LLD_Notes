package Facade;
class dvdPlayer{ //Sub systems
    public void turnOn(){
        System.out.println("dvd player turned on");
    }
    public void turnOff(){
        System.out.println("dvd player turned off");
    }
}
class projector{
    public void turnOn(){
        System.out.println("projector turned on");
    }
    public void turnOff(){
        System.out.println("projector turned off");
    }
}
class musicPlayer{
    public void turnOn(){
        System.out.println("music player turned on");
    }
    public void turnOff(){
        System.out.println("music player turned off");
    }
}
class Facade{ //facade
    private dvdPlayer dp;
    private projector p;
    private musicPlayer mp;
    Facade(){
        this.dp = new dvdPlayer();
        this.p = new projector();
        this.mp = new musicPlayer();
    }
    public void turnOn(){
        dp.turnOn();
        p.turnOn();
        mp.turnOn();
    }
    public void turnOff(){
        dp.turnOff();
        p.turnOff();
        mp.turnOff();
    }
}
public class homeTheatre {
    public static void main(String[] args) {
        Facade client =new Facade(); //Client
        client.turnOn();
        client.turnOff();
    }
}
