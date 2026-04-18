class supportHandler{
    constructor(){
        this.nextHandler = null;
    }
    handle(req){
        throw new Error("implement handler()");
    }
    setNextHandler(handler){
        this.nextHandler = handler;
        return handler;
    }
    passReq(req){
        if(this.nextHandler){
            return this.nextHandler.handle(req);
        }
        console.log("no handler found");
    }
}
class InfoLogger extends supportHandler{
    handle(req){
        if(req.type === "info"){
            console.log(`info logger -> ${req.message}`);
        }else{
            this.passReq(req);
        }
    }
}
class WarningLogger extends supportHandler{
    handle(req){
        if(req.type === "warning"){
            console.log(`warning logger -> ${req.message}`);
        }else{
            this.passReq(req);
        }
    }
}
class ErrorLogger extends supportHandler{
    handle(req){
        if(req.type === "error"){
            console.log(`error logger -> ${req.message}`);
        }else{
            this.passReq(req);
        }
    }
}
const infolog = new InfoLogger();
const warninglog =new WarningLogger();
const errorlog = new ErrorLogger();

infolog.setNextHandler(warninglog).setNextHandler(errorlog);

infolog.handle({"type":"info","message":"hello"});
infolog.handle({"type":"warning","message":"hello"});
infolog.handle({"type":"error","message":"hello"});
infolog.handle({"type":"none","message":"hello"});