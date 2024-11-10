import { useRef, useState } from "react";

import "./form.css";

export default function RefLogin() {
  const [emailCheck, setEmailCheck] = useState(false);
  const email = useRef();
  const password = useRef();

  //Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const isInvalidEmail = !enteredEmail.includes("@");

    if (isInvalidEmail) {
      setEmailCheck(true);
    }

    console.log(
      `FORM SUBMITTED\nUser email: ${enteredEmail}\nUser password: ${enteredPassword}`
    );

    // console.log(enteredEmail);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ref Login Form</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
        </div>
        <div className="control-error">
          {emailCheck && <p>Invalid Email</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset Button</button> <br></br>
        <button className="button">Submit</button>
      </p>
    </form>
  );
}
