import React, { useState, useEffect } from 'react';
import {callApiGet} from '../services/ApiGateway';
import Header from '../components/Header';

const Pokemon = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const method = 'GET';
        const url = 'https://www.pokemon.com/us/api/pokedex/kalos';
        callApiGet(url, method).then(response => {
            setData(response);
        })
        .catch(err => console.log(err))
    }, []);
    return (
        <div>
            <Header />
            Tessttttt
        </div>
    )
}

export default Pokemon;