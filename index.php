<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LN Modas</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <main>
        <section class="hero">
            <div class="hero-text">
                <img id="logo-hero" src="images/logo.png" alt="LN Modas">
                <p>Explore nosso universo de tendências, a moda define quem você é!</p>
            </div>
        </section>
        
        <section class="categories">
            <h2>Categorias</h2>
            <div class="category-buttons">
                <a href="index.php?category=all" class="button">Todos</a>
                <a href="index.php?category=camisas" class="button">Camisas</a>
                <a href="index.php?category=calcas" class="button">Calças</a>
                <a href="index.php?category=shorts" class="button">Shorts</a>
                <a href="index.php?category=tenis" class="button">Tênis</a>
                <a href="index.php?category=bone" class="button">Bonés</a>
            </div>
        </section>
        
        <section class="products">
            <h2>Nossos produtos</h2>
            <div class="product-list">
                <?php
                // Array de produtos com categorias, imagens e informações
                $products = [
                    ["nome" => "Camisa do Corinthians 2015", "preco" => "R$ 149,99", "imagem" => "camisa-corinthians-2015.jpg", "categoria" => "camisas"],
                    ["nome" => "Camisa do Barcelona 2009 Messi", "preco" => "R$ 299,99", "imagem" => "camisa-barcelona-2009-messi.jpg", "categoria" => "camisas"],
                    ["nome" => "Camisa Polo Lacoste Verde", "preco" => "R$ 189,99", "imagem" => "camisa-polo-lacoste-verde.jpg", "categoria" => "camisas"],
                    ["nome" => "Camisa Corinthians 2024 Preta", "preco" => "R$ 159,99", "imagem" => "camisa-corinthians-2024-preta.jpg", "categoria" => "camisas"],
                    ["nome" => "Boné Lacoste Branco", "preco" => "R$ 99,99", "imagem" => "bone-lacoste-branco.jpg", "categoria" => "bone"],
                    ["nome" => "Boné Lacoste Preto", "preco" => "R$ 99,99", "imagem" => "bone-lacoste-preto.jpg", "categoria" => "bone"],
                    ["nome" => "Boné Lacoste Vermelho", "preco" => "R$ 99,99", "imagem" => "bone-lacoste-vermelho.jpg", "categoria" => "bone"],
                    ["nome" => "Calça Corinthians", "preco" => "R$ 249,99", "imagem" => "calca-corinthians.jpg", "categoria" => "calcas"],
                    ["nome" => "Calça Nike", "preco" => "R$ 229,99", "imagem" => "calca-nike.jpg", "categoria" => "calcas"],
                    ["nome" => "Short Nike", "preco" => "R$ 139,99", "imagem" => "short-nike.jpg", "categoria" => "shorts"],
                    ["nome" => "Camisa do Flamengo 2024", "preco" => "R$ 179,99", "imagem" => "camisa-flamengo-2024.jpg", "categoria" => "camisas"],
                    ["nome" => "Boné Adidas Preto", "preco" => "R$ 89,99", "imagem" => "bone-adidas-preto.jpg", "categoria" => "bone"],
                    ["nome" => "Tênis Puma", "preco" => "R$ 299,99", "imagem" => "tenis-puma.jpg", "categoria" => "tenis"],
                ];

                // Filtrando os produtos pela categoria selecionada
                $selectedCategory = isset($_GET['category']) ? $_GET['category'] : 'all';

                foreach ($products as $product) {
                    if ($selectedCategory == 'all' || $selectedCategory == $product['categoria']) {
                        echo "
                        <div class='product'>
                            <img src='images/{$product['imagem']}' alt='{$product['nome']}'>
                            <h3>{$product['nome']}</h3>
                            <p class='price'>{$product['preco']}</p>
                            <a href='checkout.php?id={$product['nome']}' class='button'>Comprar</a>
                        </div>";
                    }
                }
                ?>
            </div>
        </section>
    </main>

    <?php include 'includes/footer.php'; ?>
</body>
</html>
