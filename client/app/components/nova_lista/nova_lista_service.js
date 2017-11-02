class novaListaService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  deletarProduto(index, idLista, novoValor){
    return this.$http({
        url: '/api/listaCompras/produto',
        method: "DELETE",
        data: { 'idLista' : idLista,
                'indexProduto' : index,
                'novoValor' : novoValor
              }
    })
    .then( (response)=>response.data );
  }
  getListaCompras(){
    return this.$q( (resolve, reject) => {
      if (this.l_compras)
        resolve(this.l_compras);
      else {
        this.$http.get('/api/listaCompras')
          .then( (response) => resolve(response.data) );
      }
    });
  }

  getProdutos() {
    return this.$q( (resolve, reject) => {
      if (this.produtos)
        resolve(this.produtos);
      else {
        this.$http.get('/api/produtos')
          .then( (response) => resolve(response.data) );
      }
    });
  }
  addProduto(_valor,_nome,_id, _valorAtt){

    this.$http.put(`/api/l_compras/valor/${_id}`, {valorAtualizado:_valorAtt})
    .then( (response)=>response.data );

    this.$http.put(`/api/l_compras/${_id}`, {nome:_nome,valor:_valor})
    .then( (response)=>response.data );

  }
}
novaListaService.$inject = ['$http','$q'];
export default novaListaService;
