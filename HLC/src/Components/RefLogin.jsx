import "./form.css";

export default function RefLogin() {
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
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset Button</button> <br></br>
        <button className="button">Submit</button>
      </p>
    </form>
  );
}
