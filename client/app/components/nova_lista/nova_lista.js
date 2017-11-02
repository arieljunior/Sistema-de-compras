import angular from 'angular';
import uiRouter from 'angular-ui-router';
import novaListaComponent from './nova_lista_component';
import novaListaService from './nova_lista_service';

let novaListaModule = angular.module('novaLista', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('nova-lista', {
      url: '/nova-lista',
      component: 'novaLista'
    });
})

.service('novaListaService', novaListaService)
.component('novaLista', novaListaComponent)

.name;

export default novaListaModule;
