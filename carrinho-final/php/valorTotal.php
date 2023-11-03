<?php

include 'conexaoDb.php';

$conexao = criarConexao();

$query = "SELECT SUM(produtos.preco) AS total FROM carrinho 
          INNER JOIN produtos ON carrinho.produto_id = produtos.id";

$resultado = mysqli_query($conexao, $query);

if ($resultado) {
  $row = mysqli_fetch_assoc($resultado);
  $total = $row['total'];
  echo json_encode(['total' => $total]);
} else {
  echo json_encode(['error' => 'Erro ao calcular total.']);
}
?>