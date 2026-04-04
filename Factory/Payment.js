class upiPayment {
    pay(amount){
        console.log(`Payment done using upi for ${amount}`);
    }
};

class cardPayment { //Products
    pay(amount){
        console.log(`Payment done using card for ${amount}`);
    }
};

class netBankingPayment {
    pay(amount){
        console.log(`Payment done using net banking for ${amount}`);
    }
};

class wrongPayment {
    pay(amount){
        throw new Error("wrong payment type");
    }
}

class paymentFactory { //Factory
    static paymentType(type){
        switch(type){
            case 'upi':
                return new upiPayment();
            case 'card':
                return new cardPayment();
            case 'netBanking':
                return new netBankingPayment();
            default:
                return new wrongPayment();
        }
    }
}

const paymentClient = paymentFactory.paymentType('netBanking'); //Client
paymentClient.pay(300);