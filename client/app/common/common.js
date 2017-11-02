import './common.scss';
import angular from 'angular';
import navbarModule from './navbar/navbar';
import footerModule from './footer/footer';
import topoModule from './topo/topo';

let commonModule = angular.module('app.common', [
  navbarModule,
  footerModule,
  topoModule
])

.name;

export default commonModule;
