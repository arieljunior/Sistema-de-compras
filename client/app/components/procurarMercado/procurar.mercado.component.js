import template from './procurar.mercado.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './procurar.mercado.controller';
import './procurar.mercado.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let procurarMercadoComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default procurarMercadoComponent;
