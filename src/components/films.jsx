import { useEffect, useState } from "react";
import "./films.css"


function Films () {

    const [films, setfilms] = useState([]);
    const [nextPage, setNextPage] = useState(null);

    const getFilms = async (url) => {

        const resp = await fetch(url);
        const json = await resp.json();

        console.log(json.results);

        setfilms((prevFilms) => [...prevFilms, ...json.results]);
        setNextPage(json.next);
        //setfilms(json.results);
        // https://swapi.dev/api/films/
        
    }

    useEffect(()=>{
        getFilms('https://swapi.dev/api/films/');
    }, []);

    useEffect(() => {
        if (nextPage) {
          getFilms(nextPage); // Llamamos a la función getPersonajes con la URL de la página siguiente
        }
      }, [nextPage]);



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