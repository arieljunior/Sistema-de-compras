import template from './topo.html';// !text é um artifício do systemjs no plunker para carregar html
import controller from './topo.controller';
import './topo.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let topoComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default topoComponent;
