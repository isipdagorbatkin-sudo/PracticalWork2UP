import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="empty-state">
      <p>Ошибка 404</p>
      <h1>Страница не найдена</h1>
      <Link className="primary-link" to="/products">
        Открыть каталог
      </Link>
    </section>
  );
}

export default NotFoundPage;

