import React, { useState, useEffect } from 'react';
import {callApiGet} from '../services/ApiGateway';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import {Button} from '@material-ui/core';

const Pokemon = () => {
    const [data, setData] = useState(null);
    const [size, setSize] = useState(12);
    useEffect(() => {
        getData();
            
    }, []);
    const getData = () => {
        const method = 'GET';
        // const url = 'https://www.pokemon.com/us/api/pokedex/kalos';
        const url = 'http://localhost:8080/api/pokemon/all';
        callApiGet(url, method).then(response => {
            setData(response);
        })
        .catch(err => console.log(err))
    }
    const loadMore = () => {
        setSize(size*2);
    }
    const search = (keyword) => {
        if (!keyword) {
            getData();
            return;
        }
        const method = 'GET';
        // const url = 'https://www.pokemon.com/us/api/pokedex/kalos';
        const url = 'http://localhost:8080/api/pokemon/all';
        callApiGet(url, method).then(response => {
            const dataSearch = response.filter((item) => item.name === keyword)
            setData(dataSearch);
        })
        .catch(err => console.log(err))
        
    }
    return (
        <div>
            <Header onSearch={search}/>
            {data && data.length > 0 ? <div style={{padding: 20}}>
                <ListItem data={data} size={size}/>
                <Button variant="contained" color="primary" onClick={loadMore}>Load more Pokemon</Button>
            </div> :
            <div>Not Found</div>
            }
        </div>
    )
}

export default Pokemon;