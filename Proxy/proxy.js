class apiSystem{
    get(){
        throw new Error("api call not implemented");
    }
}

class realAPISystem extends apiSystem{
    get(endpoint){
        return "api call result";
    }
}

class proxyAPISystem extends apiSystem{
    constructor(userId){
        super();
        this.apiObj=new realAPISystem();
        this.user = userId;
        this.cache = new Map();
    }

    get(endpoint){
        if(this.user !== 'admin'){
            return "user not allowed to make call";
        }

        console.log("req -> ",endpoint);

        if(this.cache.has(endpoint)){
            return `map res-> ${this.cache.get(endpoint)}`;
        }

        const res =this.apiObj.get(endpoint);
        
        this.cache.set(endpoint,res);
        return res;
    }
}

const client = new proxyAPISystem('user');
console.log(client.get('/user'));

const client2 = new proxyAPISystem('admin');
console.log(client2.get('/user'));
console.log(client2.get('/user'));