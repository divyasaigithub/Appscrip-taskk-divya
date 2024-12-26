interface ProductCardProps {
    product: {
      id: number;
      title: string;
      description: string;
      price: number;
      image: string;
    };
  }
  
  const ProductCard = ({ product }: ProductCardProps) => {
    return (
      <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  
