import angular from 'angular';
import homeModule from './home/home';
import aboutModule from './procurarMercado/procurar.mercado';
import listaComprasModule from './lista_compras/lista_compras'
import novaListaModule from './nova_lista/nova_lista';
import comparaPrecoModule from './comparaPreco/comparaPreco';
import detalheProdutoModule from './detalheProduto/detalhe.produto'
import criarLoginModule from './criarLogin/cria.login'

let componentModule = angular.module('app.components', [
  homeModule,
  aboutModule,
  listaComprasModule,
  novaListaModule,
  comparaPrecoModule,
  detalheProdutoModule,
  criarLoginModule
])

.name;

export default componentModule;
