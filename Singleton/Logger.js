class Logger{
    constructor(){
        this.logs=[];
    }
    static getLogger(){
        if(!Logger.instance){
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    setData(d){
        this.logs.push(d);
    }
    getData(){
        return this.logs;
    }
}

const LoggerInstance = Logger.getLogger();
LoggerInstance.setData("hello World");
console.log(LoggerInstance.getData());