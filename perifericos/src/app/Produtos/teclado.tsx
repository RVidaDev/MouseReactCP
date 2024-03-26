import React from "react";

interface ProductCardProps {
 imageUrl: string;
 productName: string;
 productLink: string;
}

interface CustomDivProps extends React.HTMLAttributes<HTMLDivElement> {
 className: string;
}

interface CustomImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
 className: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, productName, productLink }) => {
 return (
    <CustomDiv className="Teclado">
      <CustomImg className="imagem" src={imageUrl} alt={productName} />
      <h3>{productName}</h3>
      <a href={productLink} style={{ color: "blue" }}>
        Ver Mais
      </a>
    </CustomDiv>
 );
};

const CustomDiv: React.FC<CustomDivProps> = ({ className, children }) => {
 return <div className={className}>{children}</div>;
};

const CustomImg: React.FC<CustomImgProps> = ({ className, ...rest }) => {
 return <img className={className} {...rest} />;
};

const ProductCardsTeclado: React.FC = () => {
 const products = [
    {
      imageUrl: "../imagens/Teclado-home.png",
      productName: "Teclados",
      productLink: "/produto1",
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

export default ProductCardsTeclado;
