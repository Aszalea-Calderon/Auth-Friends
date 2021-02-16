import React, { useState, useEffect } from "react";
import { login as loginAction } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const history = useHistory();

  const status = useSelector((state) => state.status);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(loginAction(login)); //This is in reference to store/actions.
  };
  useEffect(() => {
    if (status === "success") {
      history.push("/friends");
    }
  }, [status, history]);

  return (
    <div>
      <form onSubmit={submit}>
        <input
          onChange={handleChange}
          value={login.username}
          name="username"
        ></input>
        <input
          onChange={handleChange}
          value={login.password}
          name="password"
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
