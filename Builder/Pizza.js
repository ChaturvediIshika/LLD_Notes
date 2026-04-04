class PizzaBuilder{
    constructor(){
        this.pizza ={
            size : null,
            crust: null,
            toppings: [],
            extraCheese: false
        }
    }

    pizzaSize(n){
        this.pizza.size = n;
        return this;
    }

    pizzaCrust(s){
        this.pizza.crust = s;
        return this;
    }

    pizzaToppings(s){
        this.pizza.toppings.push(s);
        return this;
    }

    pizzaExtraCheese(flag){
        this.pizza.extraCheese = flag;
        return this;
    }
    
    build(){
        return this.pizza;
    }
}

const pizza = new PizzaBuilder().pizzaSize(4).pizzaToppings("tomoto").build();
console.log(pizza);