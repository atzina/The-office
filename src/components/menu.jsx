import MenuItem from "./menu-item";

function Menu() {
    return (<header>
        <nav>
         <ul>
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
           text='Citas'
           link="/citas"
           />
         </ul>
        </nav>
       </header>)
}

export default Menu