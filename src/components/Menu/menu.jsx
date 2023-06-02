import MenuItem from "../MenuItem/menu-item";
import "./menu.css";
import Nav from 'react-bootstrap/Nav';

function Menu() {
    return (<header className="menu-wrapper">

<nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <MenuItem
        text='Home'
           link="/"/>
        <MenuItem 
           text='Films'
           link="/films"
           />
          <MenuItem 
           text='Personajes'
           link="/Personajes"
           />
        <MenuItem 
           text='Planetas'
           link="/planets"
           />
      </ul>
    </div>
  </div>
</nav>
       </header>)
}

export default Menu