import angular from 'angular';
import login from './login-data';

function loginMock($httpBackend, $log, storage) {
  let _login = angular.copy(storage.load('login', login));
  let _id = storage.load('login-index', login.length+1);

  $httpBackend.whenGET('/api/login').respond( (method, url, data, headers) => {
    return [200, _login, {}];
  });

  $httpBackend.whenPOST(/^\/api\/login.*$/).respond( (method, url, data, headers) => {
    let _data = JSON.parse(data);

    if (url == '/api/login/criar' ) {
      _login.push(_data);
      storage.save('login',_login);
      alert('Login criado com sucesso');
      return [200,'login criado',{}];
    }else {
      var testarLogin = false;

      for (var i = 0; i < _login.length; i++) {
        if (_data['login'] == _login[i]['login'] && _data['senha'] == _login[i]['senha']) {
          storage.save('isLogin', true);
          storage.save('loginName', _data['login']);
          testarLogin = true;
          break;
        }
      }
      if (testarLogin) {
        alert('login efetuado')
        location.reload();
        return [200, 'login efetuado', {}];
      }else {
        alert('login nao existe');
        return [401.1, 'login não existe', {}];
      }
    }
  });
}

loginMock.$inject = ['$httpBackend','$log','StorageService'];

export default loginMock;
