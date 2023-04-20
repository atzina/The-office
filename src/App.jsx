
import {
  Routes,
  Route,
} from 'react-router-dom';
import Menu from "./components/Menu/menu";
import Home from "./components/Home/home";
import Personajes from "./components/personajes";
import Episodios from "./components/episodios";
import Citas from "./components/citas";

function App() {
  function renderContent(){

  }

  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path="/" element= {<Home/>} exact />
        <Route path="/personajes" element ={<Personajes/>} exact />
        <Route path="/episodios" element ={<Episodios/>} exact/>
        <Route path= "/citas" element = {<Citas/>} exact/>
      </Routes>
    </div>
  )
}

export default App
