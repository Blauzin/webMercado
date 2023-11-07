<?php
$pesquisa = $_POST['input'];
$conexao = mysqli_connect("localhost:3306", "root","", "trabalho_web");
if($pesquisa == ""){
    $resultado = mysqli_query($conexao, "SELECT * FROM produtos");
$dados = array();


while($obs = mysqli_fetch_assoc($resultado)){

array_push($dados, $obs);

}

$json = json_encode($dados);
echo $json;
} else {
    $resultado = mysqli_query($conexao, "SELECT * FROM produtos WHERE nome_produto LIKE '%$pesquisa%'");
$dados = array();


while($obs = mysqli_fetch_assoc($resultado)){

array_push($dados, $obs);



}

$json = json_encode($dados);
echo $json;
}
?>
