import angular from 'angular';
import uiRouter from 'angular-ui-router';
import listaComprasComponent from './lista_compras_component';
import listaComprasService from './lista_compras_service';
import './lista_compras.scss';

let listaComprasModule = angular.module('lista_compras', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('lista-compras', {
      url: '/lista-compras',
      component: 'listaCompras'
    });
})

.service('listaComprasService', listaComprasService)
.component('listaCompras', listaComprasComponent)

.name;

export default listaComprasModule;
