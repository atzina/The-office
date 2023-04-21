import { useEffect, useState } from "react";

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
    <div>
        {planets && planets.map((planet)=>(
            <div key={planet.name}>
                <h2>{planet.name}</h2>
                <p>Clima: {planet.climate}</p>
                <p>Terreno: {planet.terrain}</p>
                <p>Films: {planet.films}</p>
                <p>Residentes: {planet.residents}</p>
            </div>
        ))}

    </div>
    )
}

export default Planets;