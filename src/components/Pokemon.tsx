import { Card } from '@mui/material';
import {useEffect, useState} from 'react';
import { cProps } from '../App';

function Pokemon(props: cProps) {
    const [url, setUrl] = useState<string[]>([]);
    const [name, setName] = useState<string[]>([]);
    useEffect(() => {
        for (let i = 0; i < 10; i++) 
        {
            let num = Math.floor(Math.random() * 150) + 1;
            fetch('https://pokeapi.co/api/v2/pokemon/' + num)
            .then(response => {
                if (response.ok) return response.json();
            })
            .then(data => { 
                setName(prev => [...prev, data.species.name]);
                setUrl(prev => [...prev, data.sprites['front_default']]);
            })
        }
    }, []);
    function loadMore(s: string) {
        if (props.guesses.includes(s)) 
        {
            props.setScore(0);
        }
        else
        {
            props.setGuesses(prev => [...prev, s]);
            props.setScore(props.score + 1);
        }
        console.log("Guesses: ");
        console.log(props.guesses);
        setUrl([]);
        setName([]);
        for (let i = 0; i < 10; i++) 
        {
            let num = Math.floor(Math.random() * 150) + 1;
            fetch('https://pokeapi.co/api/v2/pokemon/' + num)
            .then(response => {
                if (response.ok) return response.json();
            })
            .then(data => { 
                setName(prev => [...prev, data.species.name]);
                setUrl(prev => [...prev, data.sprites['front_default']]);
            })
        }
    }
    return (
        <div className="container">{url.map((lnk, i) => 
            <Card onClick={() => loadMore(name[i])} sx={{m: 5, maxWidth:150}} className="pokecard"><img alt='pokemon' src={lnk}/><span className="name">{name[i]}</span></Card>)}     
        </div>
    )
}

export default Pokemon;