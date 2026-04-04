package Builder;
import java.util.*;

class Pizza {
    private int size;
    private String crust;
    private List<String> toppings;
    private boolean extraCheese;
    private Pizza(Builder builder){ //Product
        this.size = builder.size;
        this.crust = builder.crust;
        this.toppings = builder.toppings;
        this.extraCheese = builder.extraCheese;
    }
    @Override
    public String toString(){
        return "Pizza {" +
            "\n  size        = " + size +
            "\n  crust       = " + crust +
            "\n  toppings    = " + toppings +
            "\n  extraCheese = " + extraCheese +
            "\n}";
    }
    static class Builder{ //Builder
        private int size;
        private String crust;
        private List<String> toppings = new ArrayList<>();
        private boolean extraCheese = false;
        public Builder pizzaSize(int size){
            this.size=size;
            return this;
        }
        public Builder pizzaCrust(String crust){
            this.crust = crust;
            return this;
        }
        public Builder pizzaToppings(String topping){
            this.toppings.add(topping);
            return this;
        }
        public Builder pizzaExtraCheese(boolean extraCheese){
            this.extraCheese = extraCheese;
            return this;
        }
        public Pizza build(){ //Build
            return new Pizza(this);
        }
    }
}
public class Client {
    public static void main(String[] args) { //Client
        Pizza client = new Pizza.Builder().pizzaCrust("thin").pizzaToppings("tomato").pizzaSize(5).build();
        System.out.println(client);
    }
}
