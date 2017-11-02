class novaListaController {
  constructor(novaListaService) {
    this.service = novaListaService
    this.getProdutos();
    this.getListaCompras();
    this.idLista = localStorage.getItem("idEdit");
    this.myData = JSON.parse(localStorage.getItem("fake-l_compras"));
    this.myValue = this.myData[this.idLista]['valor'];
    this.myListName = this.myData[this.idLista]['nome'];

    $(document).ready(function () {

      $('.ckbox label').on('click', function () {
        $(this).parents('tr').toggleClass('selected');
      });

      $('.btn-filter').on('click', function () {
        var $target = $(this).data('target');
        if ($target != 'all') {
          $('.tableProd tr').css('display', 'none');
          $('.tableProd tr[data-status="' + $target + '"]').fadeIn('slow');
        } else {
          $('.tableProd tr').css('display', 'none').fadeIn('slow');
        }
      });

    });

    (function(){
      'use strict';
      var $ = jQuery;
      $.fn.extend({
        filterTable: function(){
          return this.each(function(){
            $(this).on('keyup', function(e){
              $('.filterTable_no_results').remove();
              var $this = $(this),
              search = $this.val().toLowerCase(),
              target = $this.attr('data-filters'),
              $target = $(target),
              $rows = $target.find('tbody tr');

              if(search == '') {
                $rows.show();
              } else {
                $rows.each(function(){
                  var $this = $(this);
                  $this.text().toLowerCase().indexOf(search) === -1 ? $this.hide() : $this.show();
                })
                if($target.find('tbody tr:visible').size() === 0) {
                  var col_count = $target.find('tr').first().find('td').size();
                  var no_results = $('<tr class="filterTable_no_results"><td colspan="'+col_count+'">No results found</td></tr>')
                  $target.find('tbody').append(no_results);
                }
              }
            });
          });
        }
      });
      $('[data-action="filter"]').filterTable();
    })(jQuery);

    $(function(){
      $('[data-action="filter"]').filterTable();

      $('.container').on('click', '.panel-heading span.filter', function(e){
        var $this = $(this),
        $panel = $this.parents('.panel');

        $panel.find('.panel-body').slideToggle();
        if($this.css('display') != 'none') {
          $panel.find('.panel-body input').focus();
        }
      });
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  removerProduto(idProd, valor){
    var novoValor = this.calcularValor('subtrair', this.idLista, valor)
    this.service.deletarProduto(idProd, this.idLista, novoValor)
    .then(l_compras => this.l_compras = l_compras);
  }

  getListaCompras(){
    this.service.getListaCompras()
     .then(l_compras => this.l_compras = l_compras);
  }

  getProdutos(){
    this.service.getProdutos()
      .then(produtos => this.produtos = produtos);
  }

  addProduto(nome,valor){
    var novoValor = this.calcularValor('somar',this.idLista, valor);
    this.service.addProduto(valor, nome, this.idLista, novoValor);
    location.reload();
  }

  calcularValor(operacao, id, valor){
    var myList = JSON.parse(localStorage.getItem("fake-l_compras"));
    var valores = [valor];
    var valorAtualizado = 0.0;

    if (operacao == 'somar')
    {
      var valorAntigo = parseFloat(myList[id]['valor']);
      valorAtualizado = valorAntigo + valor;

      return valorAtualizado.toFixed(2);

    } else
    {
      var valorAntigo = parseFloat(myList[id]['valor']);
      valorAtualizado = valorAntigo - valor;
      return valorAtualizado.toFixed(2);
    }
  }
}
novaListaController.$inject = ['novaListaService'];
export default novaListaController;
