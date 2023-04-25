import StarWars from "../../assets/star-wars.jpg";
import "./home.css";

function Home () {
    return (
    <div className="principal">
       <div className= "text">
       <h1>En esta página podrás consultar datos de las saga de Star Wars, consumidas a partir de una API.</h1> 
       </div>
    <img className="poster" src={StarWars}></img>
        
    </div>)
}

export default Home;