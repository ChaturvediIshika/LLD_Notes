interface PaymentType{
    public void pay(int amt);
}
class upiPayment implements PaymentType{
    @Override
    public void pay(int amt){
        System.out.println("payement of "+amt+" is done using upi");
    }
}
class netBankingPayment implements PaymentType{
    @Override
    public void pay(int amt){
        System.out.println("payement of "+amt+" is done using net banking");
    }
}
class cardPayment implements PaymentType{
    @Override
    public void pay(int amt){
        System.out.println("payement of "+amt+" is done using card");
    }
}
class wrongPayment implements PaymentType{
    @Override
    public void pay(int amt){
        throw new Error("wrong payment method");
    }
}
class Factory{
    public static PaymentType getPayment(String type){
        switch(type){
            case "upi":
                return new upiPayment();
            case "netbanking":
                return new netBankingPayment();
            case "card":
                return new cardPayment();
            default:
                return new wrongPayment();
        }
    }
}
class Payment{
    public static void main(String args[]){
        PaymentType client = Factory.getPayment("upi");
        client.pay(300);
        PaymentType client2 = Factory.getPayment("");
        client2.pay(300);
    }
}