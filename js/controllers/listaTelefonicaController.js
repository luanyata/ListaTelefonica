angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope,contatosAPI, operadorasAPI, serialGenerator){
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras =[];
	$scope.contato ={
		data: 1034218800000
	};
/* A partir da versão 1.6 o .success e .error 
* foram descontinuados dando lugar ao .then que recebe um response
* http://stackoverflow.com/questions/41183845/error-with-http-get-in-angularjs-success-not-a-function
*/
var carregarContatos = function(){
	contatosAPI.getContatos().then(function(response){
		$scope.contatos = response.data;
	}).catch(function(error){
		$scope.error = "Não foi possivel carregar os dados!";
	});
};

var carregarOperadoras = function(){
	operadorasAPI.getOperadoras().then(function(response){
		$scope.operadoras = response.data;
	})
}

$scope.adicionarContato = function (contato) {
	contato.serial = serialGenerator.generate();
	contato.data = new Date();
	contatosAPI.saveContato(contato).then(function(response){
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