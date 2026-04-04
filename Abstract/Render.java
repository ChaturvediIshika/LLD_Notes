package Abstract;
class button{ //Abstract Product
    public void render(){
        System.out.println("render needs to implemented");
    }
}
class macButton extends button{ //Concrete Product
    public void render(){
        System.out.println("mac button");
    }
}
class windowButton extends button{
    public void render(){
        System.out.println("window button");
    }
}
class checkbox{
    public void render(){
        System.out.println("render needs to implemented");
    }
}
class macCheckbox extends checkbox{
    public void render(){
        System.out.println("mac checkbox");
    }
}
class windowCheckbox extends checkbox{
    public void render(){
        System.out.println("window checkbox");
    }
}
class UIFactory{ //Abstract Factory
    public button renderButton(){
        return new button();
    }
    public checkbox renderCheckbox(){
        return new checkbox();
    }
}
class windowUI extends UIFactory{ //Concrete Factory
    public button renderButton(){
        return new windowButton();
    }
    public checkbox renderCheckbox(){
        return new windowCheckbox();
    }
}
class macUI extends UIFactory{
    public button renderButton(){
        return new macButton();
    }
    public checkbox renderCheckbox(){
        return new macCheckbox();
    }
}
class Factory{
    public static void createFactory(UIFactory factoryType){
        button bt = factoryType.renderButton();
        checkbox cb = factoryType.renderCheckbox();
        bt.render();
        cb.render();
    }
}
public class Render { //client
    public static void main(String[] args) {
        Factory.createFactory(new windowUI());
        Factory.createFactory(new macUI());
    }
}
