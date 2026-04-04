import java.util.*;
class Singleton{ 
    private static Singleton instance;
    private ArrayList<String> logs;
    Singleton(){
        logs = new ArrayList<>();
    }
    public static Singleton getLogger(){
        if(instance == null){
            instance = new Singleton();
        }
        return instance;
    }
    public void setData(String s){
        logs.add(s);
    }
    public List getData(){
        return logs;
    }
}

class Logger{
    public static void main(String args[]){
        Singleton client = Singleton.getLogger();
        client.setData("hello world");
        System.out.println(client.getData());
        client.setData("Singleton example");
        System.out.println(client.getData());
    }
}
