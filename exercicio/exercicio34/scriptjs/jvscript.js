

function seq (){
	const lista = [];
	let n = prompt('digite um numero : ');
	for(let x = 1; x <= n; x++){
		lista.push(x);
		document.getElementById("minhadiv").innerHTML = lista;
	}
}


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

