import { useEffect, useState } from "react";
function Personajes () {
    const [personajes, setPersonajes] = useState(null);
    useEffect(function getPersonajes() {
        
        const options = {
            metod:'GET',
            headers: {
                'X-RapidAPI-Key': '6ffa894d07msh750bf1c53f05377p1abb9djsn5df8cb14612a',
		'X-RapidAPI-Host': 'the-office.p.rapidapi.com'
            }
        }

        fetch('https://the-office.p.rapidapi.com/1', options)
        .then(response => response.json())
        .then(data => console.log(data))
	    
    }
    , []);

    return (
    <div>
        {personajes}
    </div>
    )
}

export default Personajes;