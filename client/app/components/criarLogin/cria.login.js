import angular from 'angular';
import uiRouter from 'angular-ui-router';
import criarLoginComponent from './cria.login.component';
import criarLoginService from './cria.login.service';

let criarLoginModule = angular.module('criarLogin', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('criar-login', {
      url: '/criar-login',
      component: 'criarLogin'
    });
})
.service('criarLoginService', criarLoginService)
.component('criarLogin', criarLoginComponent)

.name;

export default criarLoginModule;
