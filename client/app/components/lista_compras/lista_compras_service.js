class listaComprasService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }
  getListCompras(){
    return this.$q( (resolve, reject) => {
      if (this.l_compras)
        resolve(this.l_compras);
      else {
        this.$http.get('/api/listaCompras')
          .then( (response) => resolve(response.data) );
      }
    });
  }

  removerLista(id){

    return this.$http({
        url: '/api/listaCompras',
        method: "DELETE",
        data: { 'id' : id }
    })
    .then( (response)=>response.data );

  }

  addLista(_nova_lista){
    return this.$http.post('/api/listaCompras', _nova_lista)
                            .then( (response)=>response.data );
  }
}
listaComprasService.$inject = ['$http','$q'];
export default listaComprasService;
