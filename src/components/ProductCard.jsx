function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <div className="product-card__number">{String(product.id).padStart(2, "0")}</div>
      <h2>{product.name}</h2>
      <p className="product-card__description">{product.description}</p>
      <div className="product-card__footer">
        <strong>{product.price.toLocaleString("ru-RU")} ₽</strong>
        <button type="button" onClick={() => onAdd(product)}>
          В корзину
        </button>
      </div>
    </article>
  );
}

export default ProductCard;

