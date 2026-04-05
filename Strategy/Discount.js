class discount{
    applyDiscount(){
        throw new Error("applyDiscount needs to get implemented");
    }
}

class flatDiscount extends discount{
    applyDiscount(amt){
        return `flat discount applied ${amt - 100}`;
    }
}

class percentageDiscount extends discount{
    applyDiscount(amt){
        return `percentage discount applied ${amt - (amt*0.5)}`;
    }
}

class noDiscount extends discount{
    applyDiscount(amt){
        return `no discount applied ${amt}`;
    }
}

class priceCalculator{
    constructor(){
        this.strategy = null;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    calculatePrice(amt){
        if(!amt || !this.strategy){
            throw new Error("amount and strategy are required");
        }

        return this.strategy.applyDiscount(amt);
    }
}

const client = new priceCalculator();
client.setStrategy(new flatDiscount());
console.log(client.calculatePrice());