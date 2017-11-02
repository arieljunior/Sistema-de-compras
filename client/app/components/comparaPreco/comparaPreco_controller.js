class comparaPrecoController {
  constructor(comparaPrecoService, $state) {
    this.$state = $state
    this.c_p_service = comparaPrecoService;
    this.getProdutos();
  }
  getProdutos(){
    this.c_p_service.getProdutos()
     .then(produtos => this.produtos = produtos);
  }
  salvarId(id){
    localStorage.setItem('detail-prod-id', id);
    this.$state.go('detalhe-produto');
  }
}
comparaPrecoController.$inject = ['comparaPrecoService', '$state'];
export default comparaPrecoController;
