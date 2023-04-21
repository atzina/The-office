import { useEffect, useState } from "react";

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
    <div>
        {personajes && personajes.map((personaje)=>(
            <div key={personaje.name}>
                <h2>{personaje.name}</h2>
                <p>Género: {personaje.gender}</p>
                <p>Año de nacimiento: {personaje.birth_year}</p>
                <p>Films: {personaje.films}</p>
                <p>Home World: {personaje.homeworld}</p>
            </div>
        ))}
    </div>
    )
}

export default Personajes;