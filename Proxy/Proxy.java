package Proxy;

import java.util.HashMap;

class ApiSystem {
    public String get(String endpoint){
        return "implement get()";
    }    
}
class RealApiSystem extends ApiSystem {
    public String get(String endpoint){
        return "api call";
    }
}
class proxyApiSystem extends ApiSystem{
    String user;
    HashMap<String,String> cache;
    ApiSystem obj;
    proxyApiSystem(String user){
        this.obj = new RealApiSystem();
        this.cache = new HashMap<>();
        this.user = user;
    }
    public String get(String endpoint){
        if(!this.user.equals("admin")){
            return "user not allowed to make call";
        }

        System.out.println("req -> "+endpoint);

        if(this.cache.containsKey(endpoint)){
            return cache.get(endpoint);
        }

        String res =this.obj.get(endpoint);
        
        this.cache.put(endpoint,res);
        return res;        
    }
}
public class Proxy {
    public static void main(String[] args) {
        proxyApiSystem client = new proxyApiSystem("user");
        System.out.println(client.get("/call"));
        proxyApiSystem client2 = new proxyApiSystem("admin");
        System.out.println(client2.get("/call"));
    }
}
