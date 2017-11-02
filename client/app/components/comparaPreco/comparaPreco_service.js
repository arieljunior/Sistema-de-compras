class comparaPrecoService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }
  getProdutos(){
    return this.$q( (resolve, reject) => {
      if (this.produtos)
        resolve(this.produtos);
      else {
        this.$http.get('/api/produtos')
          .then( (response) => resolve(response.data) );
      }
    });
  }
}
comparaPrecoService.$inject = ['$http','$q'];
export default comparaPrecoService;
