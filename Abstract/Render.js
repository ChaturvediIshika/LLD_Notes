class button{ //Abstract Product
    render() {
        console.log("abstract button");
    }
}

class macButton extends button{ //Concrete Product
    render(){
        console.log("MAC Button");
    }
}

class windowButton extends button{
    render(){
        console.log("Window Button");
    }
}

class checkBox{ //Abstract Product
    render() {
        console.log("abstract checkBox");
    }
}

class macCheckBox extends checkBox{
    render(){
        console.log("MAC checkBox");
    }
}

class windowCheckBox extends checkBox{
    render(){
        console.log("Window checkBox");
    }
}

class UIFactory{ //Abstract Factory
    createButton(){
        console.log("abstract button");
    }
    createCheckBox(){
        console.log("abstract checkbox");
    }
}

class MacFactory extends UIFactory{ //Concrete Factory
    createButton(){
        return new macButton();
    }
    createCheckBox(){
        return new macCheckBox();
    }
}

class WindowFactory extends UIFactory{
    createButton(){
        return new windowButton();
    }
    createCheckBox(){
        return new windowCheckBox();
    }
}

function createFactory(factory){
    const button = factory.createButton();
    const checkBox = factory.createCheckBox();

    button.render();
    checkBox.render();
}

createFactory(new WindowFactory());
createFactory(new MacFactory());