
import {
  Routes,
  Route,
} from 'react-router-dom';
import Menu from "./components/Menu/menu";
import Home from "./components/Home/home";
import Personajes from "./components/personajes";
import Episodios from "./components/episodios";
import Planets from "./components/planets";

function App() {
  function renderContent(){

  }

  return (
    <div className="App">
      <Menu/>
      <main>
      <Routes>
        <Route path="/" element= {<Home/>} exact />
        <Route path="/personajes" element ={<Personajes/>} exact />
        <Route path="/episodios" element ={<Episodios/>} exact/>
        <Route path= "/planets" element = {<Planets/>} exact/>
      </Routes>
      </main>
      <footer>
        Hecho como práctica de React
      </footer>
    </div>
  )
}

export default App
