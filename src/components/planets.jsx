import { useEffect, useState } from "react";
import "./planets.css"

function Planets () {

    const [planets, setPlanets] = useState([]);

    const getQuotes = async () => {
       
        const resp = await fetch('https://swapi.dev/api/planets/');
        const json = await resp.json();
        console.log(json.results);
        setPlanets(json.results);
        console.log(planets);
    }
    useEffect(()=>{
        getQuotes();
    }, []);

    return (
    <div className="planetasTodos row">
         <h1 class="titleP text-center">PLANETAS</h1>
        {planets && planets.map((planet)=>(
            <div class="cards card border-dark mb-3 col-12 col-md-6 col-lg-3" key={planet.name}>
                <div class="card-body">
                    <h4 class="card-title">{planet.name}</h4>
                    <p class="card-text">Clima: {planet.climate}</p>
                    <p class="card-text">Terreno: {planet.terrain}</p>
                    <p class="card-text">Films: {planet.films}</p>
                    <p class="card-text">Residentes: {planet.residents}</p>
                </div>
            </div>
        ))}

    </div>
    )
}

export default Planets;