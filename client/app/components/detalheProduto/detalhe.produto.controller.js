class detalheProdutoController {
  constructor(detalheProdutoService) {
    this.service = detalheProdutoService;
    this.idProduto = localStorage.getItem('detail-prod-id');
    this.data = JSON.parse(localStorage.getItem('fake-produtos'));
    this.nomeProduto = this.data[this.idProduto]['nome'];
    this.getProdutos();
  }

  getProdutos(){
    this.service.getProdutos()
     .then(produtos => this.produtos = produtos);
  }
}

detalheProdutoController.$inject = ['detalheProdutoService'];

export default detalheProdutoController;
