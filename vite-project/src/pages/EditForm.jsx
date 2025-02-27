import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditForm({current}) {
  const nav = useNavigate();
  const [formData, setFormData] = useState({ mech: current.mech});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {

      let res = await axios.put(`http://localhost:3000/mechs/${current._id}`, formData)

      nav('/')
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' name='mechs' value={formData.mechs} />
        <input type='submit' value='Save Edit' />
      </form>
    </>
  );
}