import { Card } from '@mui/material';
import {useEffect, useState} from 'react';

function Pokemon() {
    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    useEffect(() => {
        let num = Math.floor(Math.random() * 150) + 1;
        fetch('https://pokeapi.co/api/v2/pokemon/' + num)
        .then(response => {
            if (response.ok) return response.json();
        })
        .then(data => { 
            console.log(data);
            setName(data.species.name);
            setUrl(data.sprites['front_default']);
        })
    }, []);
    return (
        <div>{url ? <Card className="pokecard" sx={{m: 5, maxWidth: 150}}><img src={url}/><span>{name}</span></Card> : <div>Loading</div>}</div>
    )
}

export default Pokemon;