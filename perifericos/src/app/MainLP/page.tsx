import React from "react";

interface ProductCardProps {
 imageUrl: string;
 productName: string;
 productLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, productName, productLink }) => {
 return (
    <div className="card_produto">
      <img className="imagem" src={imageUrl} alt={productName}/>
      <h3>{productName}</h3>
      <a href={productLink} style={{color: "blue"}}>Ver Mais</a>
    </div>
 );
};

const ProductCards: React.FC = () => {
 const products = [
    {
      imageUrl: "../imagens/Teclado-home.png",
      productName: "Teclados",
      productLink: "/produto1",
    },
    {
      imageUrl: '../imagens/Mouse-home.png',
      productName: "Mouses",
      productLink: "/produto2",
    },
    {
      imageUrl: "../imagens/monitor-home.png",
      productName: "Monitores",
      productLink: "/produto3",
    },
 ];

 return (
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          imageUrl={product.imageUrl}
          productName={product.productName}
          productLink={product.productLink}
        />
      ))}
    </div>
 );
};

export default ProductCards;
