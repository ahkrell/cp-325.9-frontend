import axios from 'axios';
import { useState } from "react";

export default function AddForm(){
    const [formData, setFormData] = useState();

    function handleChangeText(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleChangeNumber(e) {
        setFormData({ ...formData, [e.target.name]: e.target.valueAsNumber });
    }

    async function handleSubmit(){
        try{
          let res = await axios.post('http://localhost:3000/api/mechs', formData);
        }catch(err){
          console.error(err);
        }
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>ID: </label>
                <input onChange={handleChangeNumber} type="number" name="id"/><br/>
                <label>Mech name: </label>
                <input onChange={handleChangeText} type="text" name="name"/><br/>
                <label>HP: </label>
                <input onChange={handleChangeNumber} type="number" name="hp"/><br/>
                <label>Evasion: </label>
                <input onChange={handleChangeNumber} type="number" name="evasion"/><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}