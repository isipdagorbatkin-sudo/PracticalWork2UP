import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartContext.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";

function Header() {
  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();

  function getLinkClass({ isActive }) {
    return isActive ? "nav__link nav__link--active" : "nav__link";
  }

  return (
    <header className="header">
      <div className="header__content">
        <NavLink className="logo" to="/products">
          Магазин техники
        </NavLink>

        <nav className="nav" aria-label="Основная навигация">
          <NavLink className={getLinkClass} to="/products">
            Каталог
          </NavLink>
          <NavLink className={getLinkClass} to="/cart">
            Корзина ({cartCount})
          </NavLink>
          <NavLink className={getLinkClass} to="/login">
            Вход
          </NavLink>
          <NavLink className={getLinkClass} to="/dashboard">
            Кабинет
          </NavLink>
        </nav>

        <button className="theme-button" type="button" onClick={toggleTheme}>
          {theme === "light" ? "Тёмная тема" : "Светлая тема"}
        </button>
      </div>
    </header>
  );
}

export default Header;

