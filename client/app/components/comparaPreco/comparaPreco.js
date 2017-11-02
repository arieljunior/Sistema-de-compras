import angular from 'angular';
import uiRouter from 'angular-ui-router';
import comparaPrecoComponent from './comparaPreco_component';
import comparaPrecoService from './comparaPreco_service';

let comparaPrecoModule = angular.module('comparaPreco', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('comparar-preco', {
      url: '/comparar-preco',
      component: 'comparaPreco'
    });
})

.service('comparaPrecoService', comparaPrecoService)
.component('comparaPreco', comparaPrecoComponent)

.name;

export default comparaPrecoModule;
