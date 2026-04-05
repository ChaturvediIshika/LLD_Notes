package Strategy;
class discount{ //Strategy interface
    public String applyDiscount(int amt){
        throw new Error("applyDiscount needs to get implemented");
    }
}

class flatDiscount extends discount{ //concrete algorithm
    public String applyDiscount(int amt){
        return "flat discount applied "+(amt - 100);
    }
}

class percentageDiscount extends discount{
    public String applyDiscount(int amt){
        return "percentage discount applied "+(amt - (amt*0.5));
    }
}

class noDiscount extends discount{
    public String applyDiscount(int amt){
        return "no discount applied "+amt;
    }
}

class priceCalculator{ //context
    discount strategy;
    priceCalculator(){
        this.strategy = null;
    }

    public void setStrategy(discount strategy){
        this.strategy = strategy;
    }

    public String calculatePrice(int amt){
        if(this.strategy == null){
            throw new Error("amount and strategy are required");
        }

        return this.strategy.applyDiscount(amt);
    }
}
public class DiscountCalculator {
    public static void main(String[] args) {
        priceCalculator client =new priceCalculator(); //client
        client.setStrategy(new flatDiscount());
        System.out.println(client.calculatePrice(200));
        client.setStrategy(new percentageDiscount());
        System.out.println(client.calculatePrice(300));
    }
}
