import "./form.css";
import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      `FORM SUBMITTED\nUser email: ${email}\nUser password: ${password}`
    );
  };

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset Button</button> <br></br>
        <button className="button">Submit</button>
      </p>
    </form>
  );
}
