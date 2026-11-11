import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import { useTheme } from "./contexts/ThemeContext.jsx";
import CartPage from "./pages/CartPage.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  const { theme } = useTheme();

  return (
    <div className="app" data-theme={theme}>
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

