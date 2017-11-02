import angular from 'angular';
import _produtos from './produtos-data';

function produtosMock($httpBackend, $log, storage) {
  let produtos = angular.copy(storage.load('produtos', _produtos));
  let _id = storage.load('produtos-index', _produtos.length+1);

  $httpBackend.whenGET('/api/produtos').respond( (method, url, data, headers) => {
    return [200, produtos, {}];
  });
}

produtosMock.$inject = ['$httpBackend','$log','StorageService'];

export default produtosMock;
