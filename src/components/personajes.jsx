import { useEffect, useState } from "react";
import "./personajes.css"

function Personajes () {

    const [personajes, setPersonajes] = useState([]);

    const getPersonajes = async () => {

        const resp = await fetch('https://swapi.dev/api/people/');
        const json = await resp.json();
        console.log(json.results);
        setPersonajes(json.results);
        console.log(personajes);
    }

    useEffect(()=>{
        getPersonajes();
    }, []);
   

    return (
    <div className="personajesTodos">
        {personajes && personajes.map((personaje)=>(
            <div class="card border-secondary" key={personaje.name} >
                <div class="card-body">
                    <h4 class="card-title">{personaje.name}</h4>
                    <p class="card-text">Género: {personaje.gender}</p>
                    <p class="card-text">Año de nacimiento: {personaje.birth_year}</p>
                    <p class="card-text">Films: {personaje.films}</p>
                    <p class="card-text">Home World: {personaje.homeworld}</p>
                </div>
            </div>
        ))}
    </div>
    )
}

export default Personajes;