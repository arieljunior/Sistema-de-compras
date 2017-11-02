class HomeController {
  constructor(loginService) {
    this.service = loginService;
    this.isLogin;
    if (localStorage.getItem('fake-isLogin') == "true") {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    this.nomeLogin = localStorage.getItem('fake-loginName');
  }

  verificarLogin(){
    var login = this.login;
    var senha = this.senha;

    this.service.autenticarLogin(login,senha)
    .then(resultLogin => this.resultLogin = resultLogin);

    // if (this.resultLogin == 'login efetuado') {
    //   alert('login efetuado')
    // }else {
    //   alert('login nao existe');
    // }
  }

  logoff(){
    console.log("logoff");
    localStorage.setItem('fake-loginName', '');
    localStorage.setItem('fake-isLogin', false);
    location.reload();
  }

}

HomeController.$inject = ['loginService'];

export default HomeController;
