import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { useCart } from "../contexts/CartContext.jsx";
import products from "../data/products.js";

function CatalogPage() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  function handleAdd(product) {
    addToCart(product);
    navigate("/cart");
  }

  return (
    <section className="page-section">
      <div className="page-heading">
        <p>Каталог</p>
        <h1>Товары для дома и работы</h1>
        <span>Выберите товар и добавьте его в глобальную корзину</span>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={handleAdd} />
        ))}
      </div>
    </section>
  );
}

export default CatalogPage;

