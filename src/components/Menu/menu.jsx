import MenuItem from "../MenuItem/menu-item";
import "./menu.css";

function Menu() {
    return (<header className="menu-wrapper">
        <nav>
         <ul className="menu">
           <MenuItem 
           text='Home'
           link="/"
           />
           <MenuItem 
           text='Personajes'
           link="/Personajes"
           />
           <MenuItem 
           text='Episodios'
           link="/episodios"
           />
           <MenuItem 
           text='Planetas'
           link="/planets"
           />
         </ul>
        </nav>
       </header>)
}

export default Menu