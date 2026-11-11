import { Link, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext.jsx";

function DashboardPage() {
  const location = useLocation();
  const { cartCount, totalPrice } = useCart();
  const userName = location.state?.name || "Пользователь";

  return (
    <section className="page-section dashboard">
      <div className="page-heading">
        <p>Личный кабинет</p>
        <h1>Здравствуйте, {userName}</h1>
        <span>После входа приложение перенаправило вас на эту страницу</span>
      </div>

      <div className="dashboard__stats">
        <article>
          <span>Товаров в корзине</span>
          <strong>{cartCount}</strong>
        </article>
        <article>
          <span>Сумма корзины</span>
          <strong>{totalPrice.toLocaleString("ru-RU")} ₽</strong>
        </article>
      </div>

      <Link className="primary-link" to="/products">
        Вернуться к покупкам
      </Link>
    </section>
  );
}

export default DashboardPage;

