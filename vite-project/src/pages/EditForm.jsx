import axios from 'axios';
import { useState } from "react";

export default function EditForm(){
    const [formData, setFormData] = useState();
    const [currentID, setCurrentID] = useState();

    function handleChangeID(e) {
        setCurrentID(e.target.valueAsNumber);
        setFormData({ ...formData, [e.target.name]: e.target.valueAsNumber });
    }

    function handleChangeText(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleChangeNumber(e) {
        setFormData({ ...formData, [e.target.name]: e.target.valueAsNumber });
    }

    async function handleSubmit(){
        try{
          let res = await axios.patch(`http://localhost:3000/api/mechs/${currentID}`, formData);
        }catch(err){
          console.error(err);
        }
    }

    async function handleDelete(){
      try{
        let res = await axios.delete(`http://localhost:3000/api/mechs/${currentID}`);
      }catch(err){
        console.error(err);
      }
  }
    
    return(
        <div>
            <form>
                <label>Enter ID: </label>
                <input onChange={handleChangeID} type="number" name="id"/><br/>
            </form>
            <form onSubmit={handleSubmit}>
                <label>Mech name: </label>
                <input onChange={handleChangeText} type="text" name="name"/><br/>
                <label>HP: </label>
                <input onChange={handleChangeNumber} type="number" name="hp"/><br/>
                <label>Evasion: </label>
                <input onChange={handleChangeNumber} type="number" name="evasion"/><br/>
                <label>Trait Name: </label>
                <input onChange={handleChangeText} type="text" name="traitName"/><br/>
                <label>Trait Description: </label>
                <input onChange={handleChangeText} type="text" name="traitDesc"/><br/>
                <label>Core Power Name: </label>
                <input onChange={handleChangeText} type="text" name="cpName"/><br/>
                <label>Core Power Description: </label>
                <input onChange={handleChangeText} type="text" name="cpDesc"/><br/>
                <input type="submit" value="Update"/>
            </form>
            <form onSubmit={handleDelete}>
                <input type="submit" value="Delete"/>
            </form>
        </div>
    )
}