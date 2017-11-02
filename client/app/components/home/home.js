import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import loginService from './login.service';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})
.service('loginService', loginService)
.component('home', homeComponent)

.name;

export default homeModule;
