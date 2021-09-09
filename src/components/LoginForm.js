import { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({ username: "" });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    }).then((r) => r.json());
    // .then((user) => onLogin(user));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}

export default LoginForm;
