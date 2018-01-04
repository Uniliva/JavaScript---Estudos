class NegociacaoService {
    constructor() {
        this._http = new HttpService();
    }

    obterNegociacaoSemana() {
        return new Promise((resolve, reject) => {
            this._http.get('negociacoes/semana').then(negociacao => {
                resolve(negociacao.map(obj => new Negociacao(obj.data, obj.quantidade, obj.valor)))

            }).catch(erro => {
                console.log(erro);
                reject("Não foi possivel recuperar a lista de negociações");
            });
        })
    }
    obterNegociacaoSemanaAnterior() {
        return new Promise((resolve, reject) => {
            this._http.get('negociacoes/anterior').then(negociacao => {
                resolve(negociacao.map(obj => new Negociacao(obj.data, obj.quantidade, obj.valor)))

            }).catch(erro => {
                console.log(erro);
                reject("Não foi possivel recuperar a lista de negociações");
            });
        })
    }
    obterNegociacaoSemanaRetrasada() {
            return new Promise((resolve, reject) => {
                this._http.get('negociacoes/retrasada').then(negociacao => {
                    resolve(negociacao.map(obj => new Negociacao(obj.data, obj.quantidade, obj.valor)))
    
                }).catch(erro => {
                    console.log(erro);
                    reject("Não foi possivel recuperar a lista de negociações");
                });
            })
    }
}