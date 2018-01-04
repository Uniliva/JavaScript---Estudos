class NegociacaoService {

    obterNegociacaoSemana() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/semana');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        console.log(xhr.responseText);
                        resolve(JSON.parse(xhr.responseText).map(obj => new Negociacao(obj.data, obj.quantidade, obj.valor)))

                    } else {
                        reject("Não foi possivel recuperar a lista de negociações");
                    }
                }

            }
            xhr.send();
        });
    }
    obterNegociacaoSemanaAnterior() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            //abrir uma conexão, passando o method e o a uri
            xhr.open('GET', 'negociacoes/anterior');
            //configurando
            xhr.onreadystatechange = () => {
                /*
                    0: requisição ainda não iniciada
                    1: conexão com o servidor estabelecida
                    2: requisição recebida
                     3: processando requisição
                    4: requisição está concluída e a resposta está pronta
                */
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText).map(obj => new Negociacao(obj.data, obj.quantidade, obj.valor)))

                    } else {
                        console.log(xhr.responseText);
                        reject("Não foi possivel recuperar a lista de negociações");
                    }
                }

            }
            //executando a operacao
            xhr.send();
        });
    }
    obterNegociacaoSemanaRetrasada() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            //abrir uma conexão, passando o method e o a uri
            xhr.open('GET', 'negociacoes/retrasada');
            //configurando
            xhr.onreadystatechange = () => {
                /*
                    0: requisição ainda não iniciada
                    1: conexão com o servidor estabelecida
                    2: requisição recebida
                     3: processando requisição
                    4: requisição está concluída e a resposta está pronta
                */
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText).map(obj => new Negociacao(obj.data, obj.quantidade, obj.valor)))

                    } else {
                        console.log(xhr.responseText);
                        reject("Não foi possivel recuperar a lista de negociações");
                    }
                }
            }
            //executando a operacao
            xhr.send();
        });
    }
}