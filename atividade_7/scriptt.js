const produtos ={
    "123": {"nome": "Gol do Brasil", "preco": 9.99},
    "456": {"nome": "Gol da Croacia", "preco": 9.99},
    "789": {"nome": "Gol da Alemanha", "preco": 9.99},
}

let carrinho = [];

const audio = new Audio("bip.mp3");

window.onload = () =>{
	document.getElementById("cod").focus();
}

function addProduct(){

	const codInput = document.getElementById("cod");
	const qtd = document.getElementById("qtd");

	let valorCod = codInput.value;
	let valorQtd = parseInt(qtd.value);

	if(!produtos[valorCod]){
		alertItem();
		return
	}

	const produtoBase = produtos[valorCod]

	const item = {
		nome: produtoBase.nome,
		preco: produtoBase.preco,
		qtdItem: valorQtd,
		subTot: produtoBase.preco*valorQtd
	};

	carrinho.push(item);
	audio.play();

	console.log(item);

	atualizaTela();

	codInput.value = "";
	codInput.focus();
	qtd.value = 1;

}

function atualizaTela(){

	const lista = document.getElementBy("lista");
	lista.innerHTML = "";
	
	let total = 0;

	carrinho.forEach((item, index) => {
		total += item.subTot
		const li = document.creatElement("li");
		li.className = "list-group-item";

		li.innerHTML = `<div class="d-flex"> <strong>`
	});

	const totalPainel = document.getElementBy("total");

	totalPainel.value = 
}