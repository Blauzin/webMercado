async function pesquisar(input){

var form = new FormData()
    form.append("input",input);
     var promise = await fetch("barra.php", {
        method: "POST", 
        body: form
     })
     var response = await promise.json();
     return response
}

var input = "";

window.onload = pesquisar(input);

const barraDePesquisa = document.getElementById("barraDePesquisa");


barraDePesquisa.addEventListener("keydown" , (event) => {
   if (event.key === "Enter"){
    event.preventDefault();
    input = event.target.value;
    console.log(input);
    pesquisar(input);
   } 
})