import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim()) {
      navigate("/dashboard", { state: { name: name.trim() } });
    }
  }

  return (
    <section className="form-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <p>Вход</p>
        <h1>Личный кабинет</h1>
        <label htmlFor="name">Ваше имя</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Введите имя"
          required
        />
        <button type="submit">Войти</button>
      </form>
    </section>
  );
}

export default LoginPage;

