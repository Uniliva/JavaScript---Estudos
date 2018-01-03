class NegociacaoService{

    obterNegociacaoSemana(callback){
        let xhr = new XMLHttpRequest();
        //abrir uma conexão, passando o method e o a uri
        xhr.open('GET', 'negociacoes/semana');
        //configurando
        xhr.onreadystatechange = () => {
            /*
                0: requisição ainda não iniciada
                1: conexão com o servidor estabelecida
                2: requisição recebida
                 3: processando requisição
                4: requisição está concluída e a resposta está pronta
            */
        if (xhr.readyState == 4 && xhr.status == 200) {
            //chamando a função calback pasasndo doi parametros um erro e a lista
            callback(null, JSON.parse(xhr.responseText).map( obj => new Negociacao(obj.data,obj.quantidade,obj.valor)))
           
        } else {                
            console.log(xhr.responseText);
            callback("Não foi possivel recuperar a lista de negociações");
        }

    }
    //executando a operacao
    xhr.send();
}
}