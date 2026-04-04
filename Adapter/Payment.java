package Adapter;

class OldPaymentMathod{ //Target
    public void makePayment(int amt){
        System.out.println(amt+" paid using old method");
    }
}
class NewPaymentMethod{ //Adaptee
    public void processPayment(int amt){
        System.out.println(amt+" paid using new method");
    }
}
class Adapter extends OldPaymentMathod{ //Adapter
    NewPaymentMethod gateway;
    Adapter(){
        this.gateway = new NewPaymentMethod();
    }
    public void makePayment(int amt){
        this.gateway.processPayment(amt);
    }
}
public class Payment {
    public static void main(String[] args) {
        Adapter client = new Adapter(); //Client
        client.makePayment(300);
    }
}
