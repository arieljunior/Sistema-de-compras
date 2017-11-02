import angular from 'angular';
import angularMocks from 'angular-mocks';
import appModule from '../app';
import storageService from './storage.service';
import loginMock from './login/login';
import listaMock from './listaCompras/lista';
import produtosMock from './produtos/produtos'

let appMockModule = angular.module('appMock', [
  appModule,
  'ngMockE2E'
])

.service('StorageService', storageService)

.run(loginMock)
.run(listaMock)
.run(produtosMock)

.name;

export default appMockModule;
