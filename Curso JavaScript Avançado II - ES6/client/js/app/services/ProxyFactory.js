class ProxyFactory {
    static create(objeto, propriedade, acao) {
        return new Proxy(objeto,
            {
                ///;captura os metodos
                get(target, prop, receiver) {
                    //filtra pela nome  do metodo e pelo tipo do metodo
                    if (propriedade.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                        return function () {
                            console.log(`O metodo "${prop}" foi interceptado`);
                            Reflect.apply(target[prop], target, arguments);
                            console.log(`View atualizada`);
                            return acao(target);
                        }

                    }
                    return Reflect.get(target, prop, receiver);
                }, 
                //captura os atributos
                set(target,prop, value, receiver){
                    //filtra pela propiedade passada
                  
                    if(propriedade.includes(prop)){
                        target[prop]=value;
                         acao(target);
                    }
                    return Reflect.set(target,prop, value, receiver);
                    
                    
                }
            });
    }
    static _ehFuncao(func) {

        return typeof(func) == typeof(Function);
    
    }

}
