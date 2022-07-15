
const ProductDetail = ({
  item: {
    title,
    imageURL, 
    description,
    price,
  },
} : {
  item: Product
  }
) => (
  <div className="product-detail">
    <p className="product-detail__title">{title}</p>
    <img className="product-detail__image" src={imageURL} />
    <p className="product-detail__description">{description}</p>
    <span className="product-detail__price">${price}</span>
  </div>
)

export default ProductDetail