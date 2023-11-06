<?php
  include 'conexaoDb.php';

  $nome = $_POST["produto"];
  $preco = $_POST["preco"];

  $arquivo = $_FILES["arquivo"];

  if($arquivo["type"] == "image/png")
  {
    $conexao = criarConexao();
    $query = "INSERT INTO produtos(nome, preco) VALUES('$nome', '$preco')";
    mysqli_query($conexao, $query);

    $idProduto = mysqli_insert_id($conexao);
    $nomeImagem = $idProduto . ".png";
    move_uploaded_file($arquivo["tmp_name"], "../imagens/".$nomeImagem);
    

    $mensagem = "Upload feito com sucesso";
  }

  else
  {
    $mensagem = "Somente é permitido pngs!";  
  }

  $json = json_encode($mensagem);
  echo $json;
  ?>
