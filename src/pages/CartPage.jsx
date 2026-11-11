import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext.jsx";

function CartPage() {
  const { cart, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <section className="empty-state">
        <p>Корзина пока пуста</p>
        <h1>Добавьте товары из каталога</h1>
        <Link className="primary-link" to="/products">
          Перейти в каталог
        </Link>
      </section>
    );
  }

  return (
    <section className="page-section cart-page">
      <div className="page-heading">
        <p>Корзина</p>
        <h1>Выбранные товары</h1>
      </div>

      <div className="cart-list">
        {cart.map((product) => (
          <article className="cart-item" key={product.id}>
            <div>
              <h2>{product.name}</h2>
              <p>Количество: {product.quantity}</p>
            </div>
            <strong>
              {(product.price * product.quantity).toLocaleString("ru-RU")} ₽
            </strong>
            <button type="button" onClick={() => removeFromCart(product.id)}>
              Удалить
            </button>
          </article>
        ))}
      </div>

      <div className="cart-total">
        <span>Итоговая сумма</span>
        <strong>{totalPrice.toLocaleString("ru-RU")} ₽</strong>
      </div>
    </section>
  );
}

export default CartPage;

