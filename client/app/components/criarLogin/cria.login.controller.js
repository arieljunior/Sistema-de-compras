class criarLoginController {
  constructor(criarLoginService, $state) {
    this.$state = $state;
    this.service = criarLoginService;
  }

  criarLogin(){
    var login = this.login;
    var senha = this.senha;

    this.service.gravarLogin(login,senha)
    .then(resultLogin => this.resultLogin = resultLogin);

    this.$state.go('home');
  }

}

criarLoginController.$inject = ['criarLoginService','$state'];

export default criarLoginController;
