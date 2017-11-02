import angular from 'angular';
import listaCompras from './lista-data';

function listaMock($httpBackend, $log, storage) {
  let l_compras = angular.copy(storage.load('l_compras', listaCompras));
  let _id = storage.load('l_compras-index', listaCompras.length+1);

  $httpBackend.whenGET('/api/listaCompras').respond( (method, url, data, headers) => {
    return [200, l_compras, {}];
  });

  $httpBackend.whenPOST('/api/listaCompras').respond( (method, url, data, headers) => {

    let _data = JSON.parse(data);

    _data.id = _id++;

    l_compras.push(_data);


    storage.save('l_compras', l_compras);
    storage.save('l_compras-index', _id);

    return [200, l_compras, {}];
  });

  $httpBackend.whenDELETE(/^\/api\/listaCompras.*$/).respond(function (method, url, data) {
          data = angular.fromJson(data);

          if (url === '/api/listaCompras/produto') {
            l_compras[data['idLista']]['valor'] = data['novoValor'];
            l_compras[data['idLista']]['produtos'].splice(data['indexProduto'], 1);
          }else {
            let index = l_compras.findIndex(obj => obj.id == data.id);
            l_compras.splice(index, 1);
          }

          storage.save('l_compras', l_compras);

          return [200, l_compras];
  });

  $httpBackend.whenPUT(/^\/api\/l_compras.*$/).respond( (method, url, data, headers) => {
    let _data = JSON.parse(data);

    let id2 = url.substring(21);

    if (url === '/api/l_compras')
    {
      l_compras = _data;
    }
    else if (url === '/api/l_compras/valor/'+id2)
    {
      l_compras[id2]["valor"] = _data["valorAtualizado"];
    }
    else
    {
      let id = url.substring(15);
      l_compras[id]["produtos"].push(_data);
    }

    storage.save('l_compras', l_compras);
    return [200, l_compras, {}];
  });
}

listaMock.$inject = ['$httpBackend','$log','StorageService'];

export default listaMock;
