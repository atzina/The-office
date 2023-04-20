import { useEffect, useState } from "react";
function Personajes () {
    const [personajes, setPersonajes] = useState(null);
    useEffect(function getPersonajes() {
        
	    
    }
    , []);

    return (
    <div>
        {personajes}
    </div>
    )
}

export default Personajes;