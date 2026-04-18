class stockMarket{ //Subject
    constructor(){
        this.subscribers = [];
    }

    subscribe(observer){
        this.subscribers.push(observer);
        console.log("subscribed!!");
    }

    unsubscribe(observer){
        this.subscribers = this.subscribers.filter((obs)=> obs!==observer);
        console.log("unsubscribed!!");
    }

    notify(obj){
        this.subscribers.forEach((obs)=> obs.update(obj));
    }
}

class services{ //Observer
    update(obj){
        throw new Error("update() needs to be implemented");
    }
}

class mobileApp extends services{ //Concrete Observer
    update(obj){
        console.log(`mobile App => ${obj.stock} at ${obj.price}`);
    }
}

class webApp extends services{
    update(obj){
        console.log(`web App => ${obj.stock} at ${obj.price}`);
    }
}

class emailApp extends services{
    update(obj){
        console.log(`email App => ${obj.stock} at ${obj.price}`);
    }
}

class concreteSubject extends stockMarket{ //concrete subject
    alertServices(obj){
        this.notify(obj);
    }
}

const client = new concreteSubject();
const mobileAppService =new mobileApp();
const emailService =new emailApp();

client.subscribe(mobileAppService);
client.subscribe(emailService);

client.alertServices({"stock":"A1","price":150});

client.unsubscribe(emailService);

const webService= new webApp();
client.alertServices({"stock":"A2","price":100});

client.subscribe(webService);
client.alertServices({"stock":"A3","price":50})