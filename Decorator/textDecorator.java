package Decorator;

// Base abstract class
abstract class BaseText { //Base interface
    public abstract String format();
}

// Concrete component
class PlainText extends BaseText { //Concrete component
    @Override
    public String format() {
        return "plain text";
    }
}

// Base decorator
class Decorator extends BaseText { //base decorator
    protected BaseText text;          // BaseText type — accepts any decorator or plainText

    public Decorator(BaseText text) {
        this.text = text;
    }

    @Override
    public String format() {
        return this.text.format();
    }
}

// Concrete decorators
class BoldDecorator extends Decorator { //concrete decorator
    public BoldDecorator(BaseText text) {
        super(text);
    }

    @Override
    public String format() {
        return "bold " + this.text.format();
    }
}

class ItalicDecorator extends Decorator {
    public ItalicDecorator(BaseText text) {
        super(text);
    }

    @Override
    public String format() {
        return "italic " + this.text.format();
    }
}

class UpperCaseDecorator extends Decorator {
    public UpperCaseDecorator(BaseText text) {
        super(text);
    }

    @Override
    public String format() {
        return "upper case " + this.text.format();
    }
}

public class textDecorator {
    public static void main(String[] args) {
        BaseText client = new ItalicDecorator(
                            new UpperCaseDecorator(
                              new BoldDecorator(
                                new PlainText())));

        System.out.println(client.format());
        // prints: italic upper case bold plain text
    }
}