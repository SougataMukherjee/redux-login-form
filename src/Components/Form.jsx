import { useState, useRef, useEffect } from "react";
import "./Form.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { Constants } from "../Constant";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const errorRef = useRef();
  const userRef = useRef();
  const isEmailEmpty = !email;
  const isPasswordEmpty = !password;
  useEffect(() => {
    if (isEmailEmpty || isPasswordEmpty) {
      setErrorMsg("Please provide an email with password");
    } else {
      setErrorMsg('');
    }
  }, [isEmailEmpty, isPasswordEmpty]);
  
  useEffect(() => {
    userRef.current.focus();
  }, []);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const register = () => {
    const payload = users?.find(
      (user) => user?.email === email && user?.password === password
    );
    if (payload) {
      dispatch({
        type: Constants.REGISTER,
        payload: {
          id: new Date().getTime(),
          email,
          password,
        },
      });
      localStorage.setItem('user', JSON.stringify(payload));//after that line you can use history.push('/');
    } else {
      alert("try again");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <p
        ref={errorRef}
        className={errorMsg ? "text-danger" : "text-muted"}
        aria-live="assertive"
      >
        {errorMsg}
      </p>
      <form className="border login__form" onSubmit={(e) => handleSubmit(e)}>
        <h3>Login Form</h3>
        <hr />
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            ref={userRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            we will never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <div className="d-grid gap-2">
          <button
            className={`btn ${
              name && email && password
                ? "btn-outline-success"
                : "btn-outline-danger"
            }`}
            type="submit"
            onClick={register}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
