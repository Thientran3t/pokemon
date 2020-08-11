import React, { useState, useEffect } from 'react';
import {callApiGet} from '../services/ApiGateway';
import Header from '../components/Header';
import ListItem from '../components/ListItem';

const Pokemon = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const method = 'GET';
        // const url = 'https://www.pokemon.com/us/api/pokedex/kalos';
        const url = 'http://localhost:8080/api/pokemon/all';
        callApiGet(url, method).then(response => {
            setData(response);
        })
        .catch(err => console.log(err))
    }, []);
    return (
        <div>
            <Header />
            <ListItem data={data}/>
        </div>
    )
}

export default Pokemon;