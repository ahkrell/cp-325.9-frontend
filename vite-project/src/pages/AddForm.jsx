import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AddForm() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({ mech: '' });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let res = await axios.post('http://localhost:3000/mechs', formData);

      nav('/')
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' name='mech' />
        <input type='submit' />
      </form>
    </>
  );
}