import { useState } from "react";
import Button from "../components/btn/Button";
import { register } from "../services/requests";
import './pages.css'

import { NavLink } from "react-router-dom";

export default function Register() {
  const [formData, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setData({
      ...formData,
      [name]: name === "role" ? value.toLowerCase() : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const res = await register(formData);
    console.log(res);
    window.localStorage.setItem("loggedInUser", JSON.stringify(res));
  }

  return (
    <div className="userForm">
      <form onSubmit={handleSubmit}>
        <label>
          <input placeholder="name" type='text' onChange={handleForm} name='name' />
        </label>{" "}
        <br />
        <label>
          <input placeholder="email" type='text' onChange={handleForm} name='email' />
        </label>{" "}
        <br />
        <label>
          <input placeholder="password" type='text' onChange={handleForm} name='password' />
        </label>{" "}
        <br />
        <label>
          <input placeholder="role" type='text' onChange={handleForm} name='role' />
          <p>donor or receiver</p>
        </label>{" "}
        <br />
        <Button type='submit' label='submit' />
      </form>
      <span>already have an account ? </span><NavLink to="/login">login</NavLink>
    </div>
  );
}
