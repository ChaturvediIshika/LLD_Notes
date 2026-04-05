class baseText{
    format(){
        console.log("format() is required");
    }
}

class plainText extends baseText{
    format(){
        return "plain text";
    }
}

class textDecorator extends baseText{
    constructor(text){
        super();
        this.text = text;
    }

    format(){
        return this.text.format();
    }

}

class boldDecorator extends textDecorator{
    format(){
        return "bold "+this.text.format();
    }
}

class italicDecorator extends textDecorator{
    format(){
        return "italic "+this.text.format();
    }
}

class upperCaseDecorator extends textDecorator{
    format(){
        return "upper case "+this.text.format();
    }
}

const client =new italicDecorator(new upperCaseDecorator(new boldDecorator(new plainText())));
console.log(client.format());