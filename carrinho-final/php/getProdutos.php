<?php
  include 'conexaoDb.php';

  $con = criarConexao();

  //query dos produtos (lembrar de ter o db criado)
  $resultado = mysqli_query($con, "SELECT * FROM produtos ");

  $dados = array();


  while($registro = mysqli_fetch_assoc($resultado)){

    array_push($dados, $registro);

  };

  $json = (json_encode($dados));
  echo $json;

?>