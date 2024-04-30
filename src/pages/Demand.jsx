import { useState } from "react";
import { demand } from "../services/requests";
import Button from "../components/Button";

export default function Demand() {
  const [formData, setData] = useState({
    name: "",
    quantity: "",
    requestedDate: "",
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await demand(formData);
    console.log(res);
    setData({
      name: "",
      quantity: "",
      requestedDate: "",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          name <input type='text' onChange={handleForm} name='name' />
        </label>{" "}
        <br />
        <label>
          quantity <input type='number' onChange={handleForm} name='quantity' />
        </label>{" "}
        <br />
        <label>
          requestedDate{" "}
          <input type='text' onChange={handleForm} name='requestedDate' />
        </label>{" "}
        <br />
        <Button type='submit' label='Demand' />
      </form>
    </div>
  );
}
