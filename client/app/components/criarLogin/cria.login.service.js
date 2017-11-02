class criarLoginService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  gravarLogin(login, senha){
    return this.$http.post('/api/login/criar', {login:login, senha:senha})
    .then( (response)=>response.data );
  }
}
criarLoginService.$inject = ['$http','$q'];
export default criarLoginService;
