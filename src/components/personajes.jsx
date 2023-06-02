import { useEffect, useState } from "react";
import "./personajes.css"

function Personajes () {

    // personajes es la variable que contiene el valor
    const [personajes, setPersonajes] = useState([]); // el parametro es el valor inicial
    // setPersonajes requiere el nuevo valor del estado y este modifica el valor de la variable que anteriormente mencionamos
    // aquí personajes se inicializa en un array vacío y se renderiza cada vez que el valor es modificado por la función setPersonajes, cuando trae los resultados de la petición

    const getPersonajes = async () => {

        const resp = await fetch('https://swapi.dev/api/people/');
        const json = await resp.json();
        console.log(json.results);
        setPersonajes(json.results);
        console.log(personajes);
    }

    useEffect(()=>{
        // como mínimo se va a ejecutar una vez (getPersonajes)
        getPersonajes();
    }, []);
    // las dependencias dicen que dada vez que cambie ese valor, se ejecutará el código anterior
    // ([]), en este caso se va a ejectutar solo cuando se renderiza por primera vez el componente por que el array está vacío
   

    return (
    <div className="personajesTodos row">
        <h1 class="titleP text-center">PERSONAJES</h1>
        {personajes && personajes.map((personaje)=>(
            <div class=" cards card border-dark mb-3 col-12 col-md-6 col-lg-3" key={personaje.name} >
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