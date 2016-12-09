
// create the module and name it livrodapp

var livrodapp = angular.module("livrodapp", ["ngRoute","ngCookies"]);


// configure our routes
livrodapp.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "templates/home.html",
		controller  : "mainController",
		controllerAs  : "mc",
	})

	// route for the  page
	.when("/livro/:livroid", {
		templateUrl : "templates/livro.html",
		controller  : "livroController",
		controllerAs  : "pc",

	})
	.when("/login", {
		templateUrl : "templates/login.html",
		controller  : "loginController",
		controllerAs  : "lc",
	})

	.when("/logoff", {
		templateUrl : "templates/logoff.html",
		controller  : "loginController",
		controllerAs  : "lc",
	})
	.when("/newlivro", {
		templateUrl : "templates/newlivro.html",
		controller  : "newlivroController",
		controllerAs  : "npc",
	})
	.when("/deletelivro/:livroid/", {
		templateUrl : "templates/deletelivro.html",
		controller  : "deletelivroController",
		controllerAs  : "dpc",
	})
	.when("/editlivro/:livroid/", {
		templateUrl : "templates/newlivro.html",
		controller  : "editlivroController",
	})
	.when("/master-link", {
		templateUrl : "templates/mastemplate.html",
	})

	.otherwise(
		{
			redirectTo: "/"
		}
	);
});

/**
* Variaveis globais de endereçamento e credenciais
*/
livrodapp.credentials = [{}];

livrodapp.credentials [0] = {
	username : "a",
	password : "a"
}

livrodapp.library = [{}];

livrodapp.library [0] = {
	link : "/imgs/capajoao.png",
	id : "0",
	name : "As aventuras de joão, só que sem o pé de feijão",
	editora : "Coltec",
	edicao : "2a",
	genero : "ficção",
	description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
livrodapp.library [1] = {
	link : "http://lelivros.top/wp-content/uploads/2016/08/Baixar-Livro-Capitalismo-e-Liberdade-Milton-Friedman-em-PDF-ePub-e-Mobi-ou-ler-online-174x270.jpg",
	id : "1",
	name : "Capitalismo e Liberdade",
	editora : "LTC",
	edicao : "2a",
	genero : "Economia",
	description : "Partindo da premissa de que a organização econômica desempenha um duplo papel numa sociedade livre – de um lado porque a liberdade econômica é parte da liberdade em seu sentido mais amplo; de outro, por ser um instrumento indispensável à obtenção da liberdade política -, Friedman coloca o capitalismo competitivo como o sistema mais eficaz de organização econômica. Numa avaliação histórica, observa uma relação estreita entre a expansão da liberdade e o desenvolvimento do capitalismo, embora tivesse havido exceções como a Itália fascista e a Alemanha de Hitler."
}
livrodapp.library [2] = {
	link : "http://lelivros.top/wp-content/uploads/2016/10/Baixar-Livro-Sobre-a-Questao-Judaica-Karl-Marx-em-PDF-ePub-e-Mobi-ou-ler-online-174x270.jpg",
	id : "2",
	name : "Sobre a Questão Judaica",
	editora : "ABC",
	edicao : "1a",
	genero : "Economia",
	description : "Em um de seus mais notáveis livros, Sobre a questão judaica, Karl Marx realiza reflexões sobre as condições dos judeus alemães em meados do século XIX e estabelece propostas para a solução de suas questões concretas. Mais do que a análise de uma conjuntura específica, esta obra traduz a passagem definitiva de Marx para o materialismo histórico e o comunismo, se tornando assim uma leitura fundamental para a apropriação de seu legado."
}
livrodapp.library [3] = {
	link : "http://lelivros.top/wp-content/uploads/2016/11/Baixar-Livro-A-Cancao-de-Troia-Collen-Mccullough-em-PDF-ePub-e-Mobi-ou-ler-online-174x270.jpg",
	id : "3"
}
livrodapp.library [4] = {
	link : "http://lelivros.top/wp-content/uploads/2016/11/Baixar-Livro-A-Cancao-de-Troia-Collen-Mccullough-em-PDF-ePub-e-Mobi-ou-ler-online-174x270.jpg",
	id : "4"
}
livrodapp.library [5] = {
	link : "http://lelivros.top/wp-content/uploads/2016/11/Baixar-Livro-A-Cancao-de-Troia-Collen-Mccullough-em-PDF-ePub-e-Mobi-ou-ler-online-174x270.jpg",
	id : "5"
}
livrodapp.library [6] = {
	link : "http://lelivros.top/wp-content/uploads/2016/11/Baixar-Livro-A-Cancao-de-Troia-Collen-Mccullough-em-PDF-ePub-e-Mobi-ou-ler-online-174x270.jpg",
	id : "6"
}
livrodapp.library [7] = {
	link : "http://lelivros.top/wp-content/uploads/2016/11/Baixar-Livro-A-Cancao-de-Troia-Collen-Mccullough-em-PDF-ePub-e-Mobi-ou-ler-online-174x270.jpg",
	id : "7"
}
livrodapp.library [8] = {
	link : "http://lelivros.top/wp-content/uploads/2016/11/Baixar-Livro-A-Cancao-de-Troia-Collen-Mccullough-em-PDF-ePub-e-Mobi-ou-ler-online-174x270.jpg",
	id : "8"
}
livrodapp.library [9] = {
	link : "http://lelivros.top/wp-content/uploads/2016/11/Baixar-Livro-A-Cancao-de-Troia-Collen-Mccullough-em-PDF-ePub-e-Mobi-ou-ler-online-174x270.jpg",
	id : "9"
}
livrodapp.library [10] = {
	link : "http://lelivros.top/wp-content/uploads/2016/11/Baixar-Livro-A-Cancao-de-Troia-Collen-Mccullough-em-PDF-ePub-e-Mobi-ou-ler-online-174x270.jpg",
	id : "10"
}
livrodapp.library [11] = {
	link : "http://lelivros.top/wp-content/uploads/2016/11/Baixar-Livro-A-Cancao-de-Troia-Collen-Mccullough-em-PDF-ePub-e-Mobi-ou-ler-online-174x270.jpg",
	id : "11"
}
livrodapp.library [12] = {
	link : "http://lelivros.top/wp-content/uploads/2016/11/Baixar-Livro-A-Cancao-de-Troia-Collen-Mccullough-em-PDF-ePub-e-Mobi-ou-ler-online-174x270.jpg",
	id : "12"
}

/**
* Serviço para manipulação dos objetos do serviço
*/
livrodapp.factory('service', function($http,$cookieStore) {
	var service = {};

	/**
	*  Função para tratar GET no serviço
	*/
	service.get = function(url, callback) {
		$http.get(url).then(function(response) {
			var answer = response.data;
			callback(answer);
		});
	};

	/**
	*  Função para tratar POST no serviço
	*/
	service.post = function(url, data, callback) {
		$http.post(url, data).then(function(response) {
			var answer = response.data;
			callback(answer);
		});
	};
	/**
	*  Função para tratar POST no serviço
	*/
	service.delete = function(url, data, callback) {
		$http.delete(url).then(function(response) {
			var answer = response.data;
		});
	};
	service.islogged = function(){
		console.log("YAYYY");
		return $cookieStore.get('logged') == true;
	}

	return service;
});


// create the controller and inject Angular"s $scope
livrodapp.controller("mainController",['service','$scope','$cookieStore', function(service,$scope,$cookieStore) {
	var self = this;
	self.livros = [];

	self.livros = livrodapp.library;

	console.log(self.livros);

}]);

livrodapp.controller("livroController",['service','$scope','$location','$routeParams','$cookieStore', function(service,$scope,$location,$routeParams,$cookieStore) {
	var self = this;
	self.livros = [];
	self.livro;
	$scope.logged =  $cookieStore.get('logged');


	$scope.livro = livrodapp.library[$routeParams.livroid];

	console.log($scope.livro);

	$scope.edit = function(id){
		$location.path('/editlivro/'+id+'/');

		console.log("EDITOU");
	}

	$scope.delete = function(id){
		$location.path('/deletelivro/'+id+'/');
		console.log("DELETOU");
	}



}]);

livrodapp.controller("menuController",['service','$scope','$location','$cookieStore', function(service,$scope,$location,$cookieStore) {
	var self = this;

	livrodapp.menu = function(){
		if( $cookieStore.get('logged') == true){
			self.links = [{}];

			self.links [0] = {
				name : "Novo livro",
				adrs : "newlivro",
				icon : "fa "
			}
			self.links [1] = {
				name : "logoff",
				adrs : "logoff",
				icon : "fa "
			}
		}
		else {
			self.links = [{}];
			self.links [0] = {
				name : "LOGIN",
				adrs : "login",
				icon : "fa fa-unlock"
			}
		}
	}
	livrodapp.menu();

}]);

livrodapp.controller("loginController",['service','$scope','$location','$cookieStore', function(service,$scope,$location,$cookieStore) {
	var self = this;

	$scope.logar = function (log){
		for (var i = 0; i < livrodapp.credentials.length; i++) {

			if (log.username == livrodapp.credentials[i].username){
				if (log.password == livrodapp.credentials[i].password){
					$cookieStore.put('logged',true);
					livrodapp.menu();
					alert("logado com sucesso");
					$location.path('/');
				}
				else {
					alert("SENHA ERRADA");
				}
			}
			else {
				alert("USUARIO NÃO CADASTRADO");
			}
		}
	}
	$scope.logoff = function (){
		$cookieStore.put('logged',false);
		livrodapp.menu();
		alert("deslogado com sucesso");
		$location.path('/');
	}

}]);



livrodapp.controller("newlivroController",['service','$location','$scope','$cookieStore', function(service,$location,$scope,$cookieStore) {
	var self = this;
	self.livros = [];
	self.livro = {};

	if (!service.islogged()){
		$location.path('/');
	}

	$scope.add = function() {

		$scope.livro.id = livrodapp.library.length;

		livrodapp.library.push($scope.livro);


		alert("Cadastrado com sucesso");
		$location.path('/');

	}
}]);

livrodapp.controller("editlivroController",['service','$location','$scope','$routeParams', function(service,$location,$scope,$routeParams,$cookieStore) {
	var self = this;
	self.livros = [];

	if (!service.islogged()){
		$location.path('/');
	}

	$scope.livro = livrodapp.library[$routeParams.livroid];

	$scope.add = function() {
		console.log($scope.livro);
		livrodapp.library.splice($routeParams.livroid,1);

		$scope.livro.id = livrodapp.library.length;

		livrodapp.library.push($scope.livro);




		alert("Recadastrado com sucesso");
		$location.path('/');
	}




}]);

livrodapp.controller("deletelivroController",['service','$location','$scope','$routeParams','$cookieStore', function(service,$location,$scope,$routeParams,$cookieStore) {
	var self = this;
	self.livros = [];

	if (!service.islogged()){
		$location.path('/');
	}

	$scope.livro = livrodapp.library[$routeParams.livroid];


	$scope.burn = function() {
		console.log("FOI");
		livrodapp.library.splice($routeParams.livroid,1);


		alert($scope.livro.name + " deletado com sucesso");
		$location.path('/');

	}

}]);
