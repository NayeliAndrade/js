Object.prototype.log= function(){
    console.log(this);
}

const x = {a:1}

x.log()


if (!String.prototype.trim){ 
String.prototype.trim = function (){
    try{
        return this.replace('')
    }catch(e){
        return this
    }
}
}

const y = "         lala ".trim()
y.log()