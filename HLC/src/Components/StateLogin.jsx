import "./form.css";
import { useState } from "react";

export default function StateLogin() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //SEPERATE STATE TO HANDLE SEPERATE INPUTS
  //   function handleEmailChange(event) {
  //     setEmail(event.target.value);
  //   }
  //   function handlePasswordChange(event) {
  //     setPassword(event.target.value);
  //   }

  //SINGLE STATE TO HANDLE MULTIPLE INPUT FIELDS VIA OBJECT
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !input.email.includes("@");

  function handleInput(identifier, event) {
    setInput((prevValue) => ({
      ...prevValue,
      [identifier]: event.target.value,
    }));
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => {
      return {
        ...prevEdit,
        [identifier]: true,
      };
    });
  }
  //Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `FORM SUBMITTED\nUser email: ${input.email}\nUser password: ${input.password}`
    );
  };

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
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInput("email", event)}
            value={input.email}
          />
        </div>
        <div className="control-error">
          {emailIsInvalid && <p>Email is invalid</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInput("password", event)}
            value={input.password}
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
