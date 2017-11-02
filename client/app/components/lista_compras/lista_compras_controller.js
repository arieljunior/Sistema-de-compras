 class listaComprasController {
   constructor(listaComprasService) {
     this.listaComprasService = listaComprasService;
     this.getListCompras();
   }

   getListCompras(){
     this.listaComprasService.getListCompras()
      .then(l_compras => this.l_compras = l_compras);
   }

   deleteLista(id){
     this.listaComprasService.removerLista(id)
       .then((l_compras)=>{
           this.l_compras = l_compras;
       });
   }
   addLista(){
     var data = new Date();

     var dia = data.getDate();
     var mes = data.getMonth()+1;
     var ano = data.getFullYear();

     this.nova_lista["data"] = dia+"/"+mes+"/"+ano;
     this.nova_lista["valor"] = "0";
     this.nova_lista["produtos"] = [];

     this.listaComprasService.addLista(this.nova_lista)
       .then((l_compras)=>{
         this.l_compras = l_compras;
         this.nova_lista = {};
       });
   }
   salvarId(id){
     localStorage.setItem("idEdit", id);
   }
 }
 listaComprasController.$inject = ['listaComprasService'];
 export default listaComprasController;
