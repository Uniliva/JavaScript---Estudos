class Bind{
    //rest operator permite que vc receba varios parmetro em um array utilizando 3 pontos ex:(...parametros)
    //Assim tudo que for passado apos o segundo parametro sera considerado apenas mais um item do array parametros assim posso passar "texto" em vez de ["testo"] 
    constructor(objeto,view,...parametros){
       let proxy= ProxyFactory.create(objeto, parametros, (model) => view.update(model));
        view.update(proxy);
        //retorna uma instancia no proprio construtor
        return proxy;
    }
}