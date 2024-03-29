import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import 'bulma/css/bulma.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(["Invalid Credentials"]);
    }
  };

  return (
    <>
      <h1 className="subtitle">Log In</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li className="modal-errors" key={idx}>{error}</li>
          ))}
        </ul>
        <label for="email">Email</label>
        <br />
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@email.com"
          required
        />
        <br />
        <label for="pwrd">Password</label>
        <br />
        <input
          id="pwrd"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <br />
        <br />
        <button className="button is-success is-rounded is-small" type="submit">Log In</button>
      </form>
    </>
  );
}

export default LoginFormPage;
