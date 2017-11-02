import angular from 'angular';
import uiRouter from 'angular-ui-router';
import procurarMercadoComponent from './procurar.mercado.component';

let procurarMercadoModule = angular.module('procurarMercado', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('procurar-mercado', {
      url: '/procurar-mercado',
      component: 'procurarMercado'
    });
})

.component('procurarMercado', procurarMercadoComponent)

.name;

export default procurarMercadoModule;
