angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope, $http){

	$scope.app = "Lista Telefonica";
	$scope.contatos = [];

	$scope.operadoras =[];
/* A partir da versão 1.6 o .success e .error 
* foram descontinuados dando lugar ao .then que recebe um response
* http://stackoverflow.com/questions/41183845/error-with-http-get-in-angularjs-success-not-a-function
*/
var carregarContatos = function(){
	$http.get("http://localhost:3412/contatos").then(function(response){
		$scope.contatos = response.data;
	});
};

var carregarOperadoras = function(){
	$http.get("http://localhost:3412/operadoras").then(function(response){
		$scope.operadoras = response.data;
	})
}

$scope.adicionarContato = function (contato) {
	contato.data = new Date();

	console.log('==>> contato', contato);
	$http.post("http://localhost:3412/contatos",contato).then(function(response){
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
		carregarContatos();
	})
	.catch(function(error) {
		console.log('=====>>> error', error);
	});
};

$scope.removerContato = function(contatos){
	$scope.contatos = contatos.filter(function(contato){
		return !contato.selecionado;
	});
};

$scope.isContatoSelecionado = function(contatos){
	return contatos.some(function(contato){
		return contato.selecionado;
	})
};

$scope.ordenarPor =function(campo){
	$scope.criterioDeOrdenacao = campo;
	$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;

};
carregarOperadoras();
carregarContatos();
});	angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope, $http){

	$scope.app = "Lista Telefonica";
	$scope.contatos = [];

	$scope.operadoras =[];
/* A partir da versão 1.6 o .success e .error 
* foram descontinuados dando lugar ao .then que recebe um response
* http://stackoverflow.com/questions/41183845/error-with-http-get-in-angularjs-success-not-a-function
*/
var carregarContatos = function(){
	$http.get("http://localhost:3412/contatos").then(function(response){
		$scope.contatos = response.data;
	});
};

var carregarOperadoras = function(){
	$http.get("http://localhost:3412/operadoras").then(function(response){
		$scope.operadoras = response.data;
	})
}

$scope.adicionarContato = function (contato) {
	contato.data = new Date();

	console.log('==>> contato', contato);
	$http.post("http://localhost:3412/contatos",contato).then(function(response){
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
		carregarContatos();
	})
	.catch(function(error) {
		console.log('=====>>> error', error);
	});
};

$scope.removerContato = function(contatos){
	$scope.contatos = contatos.filter(function(contato){
		return !contato.selecionado;
	});
};

$scope.isContatoSelecionado = function(contatos){
	return contatos.some(function(contato){
		return contato.selecionado;
	})
};

$scope.ordenarPor =function(campo){
	$scope.criterioDeOrdenacao = campo;
	$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;

};
carregarOperadoras();
carregarContatos();
});