import axios from 'axios';
import { useState, useEffect } from 'react';

export default function HomePage(){
    let [mech, setMech] = useState([])
    useEffect(() => {
        async function getData() {
            try{
                let url = 'http://localhost:3000/api/mechs/1';
                let res = await axios.get(url);
            
                setMech(res.data);
            }catch(err){
                console.error(err);
            }
        }
        getData();
    }, []);

    return (
        <div>
            <h1>Lancer Mech Viewer</h1>
            <h2>Mech Name: {mech.name || 'Name'}</h2>
            <div id="stats">
                <h3>HP: {mech.hp || 0}</h3>
                <h3>Evasion: {mech.evasion || 0}</h3>
            </div>
            <div id="traits">
                <h3>Trait name: {mech.traitName1 || 'Trait Name'}</h3>
                <h3>Trait desc: {mech.traitDesc1 || 'Trait Desc'}</h3>
                <h3>Trait name: {mech.traitName2 || 'Trait Name'}</h3>
                <h3>Trait desc: {mech.traitDesc2 || 'Trait Desc'}</h3>
                <h3>Trait name: {mech.traitName3 || 'Trait Name'}</h3>
                <h3>Trait desc: {mech.traitDesc3 || 'Trait Desc'}</h3>
                <h3>Trait name: {mech.traitName4 || 'Trait Name'}</h3>
                <h3>Trait desc: {mech.traitDesc4 || 'Trait Desc'}</h3>
            </div>
            <div id="corePower">
                <h3>Core Power name: {mech.cpName || 'CP Name'}</h3>
                <h3>Core Power desc: {mech.cpDesc || 'CP Desc'}</h3>
            </div>
        </div>
    )
}