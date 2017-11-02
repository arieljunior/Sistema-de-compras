import angular from 'angular';
import uiRouter from 'angular-ui-router';
import detalheProdutoComponent from './detalhe.produto.component';
import detalheProdutoService from './detalhe.produto.service';

let detalheProdutoModule = angular.module('detalheProduto', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('detalhe-produto', {
      url: '/detalhe-produto',
      component: 'detalheProduto'
    });
})
.service('detalheProdutoService', detalheProdutoService)
.component('detalheProduto', detalheProdutoComponent)

.name;

export default detalheProdutoModule;
