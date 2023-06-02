import { useEffect, useState } from "react";
import "./films.css"


function Films () {

    const [films, setfilms] = useState([]);

    const getFilms = async () => {
        const resp = await fetch('https://swapi.dev/api/films/');
        const json = await resp.json();
        console.log(json.results);
        setfilms(json.results);
        
    }

    useEffect(()=>{
        getFilms();
    }, []);



    return (

        <div className="filmsTodos row">
        <h1 class="titleP text-center">FILMS</h1>
        {films && films.map((film)=>(
            <div class=" cards card border-dark mb-3 col-12 col-md-6 col-lg-3" key={film.episode_id} >
                <div class="card-body">
                    <h4 class="card-title">{film.title}</h4>
                    <p class="card-text">Director {film.director}</p>
                    <p class="card-text">fecha de realización: {film.release_date}</p>
                    <p class="card-text">Personajes: {film.characters}</p>
                    <p class="card-text">Opening Crawl: {film.opening_crawl}</p>
                    
                </div>
            </div>
        ))}
    </div>

    )
}

export default Films;