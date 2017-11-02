class loginService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  autenticarLogin(login, senha){
    return this.$http.post('/api/login', {login:login, senha:senha})
    .then( (response)=>response.data );
  }
}
loginService.$inject = ['$http','$q'];
export default loginService;
