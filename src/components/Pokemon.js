import React, { useState, useEffect } from 'react';
import {callApiGet} from '../services/ApiGateway';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import {Button} from '@material-ui/core';
import * as Constants from '../utils/Constants';

const Pokemon = () => {
    const [data, setData] = useState(null);
    const [size, setSize] = useState(8);
    useEffect(() => {
        getData();
            
    }, []);
    const getData = () => {
        const method = Constants.method.GET;
        const url = Constants.urlGet;
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
        const method = Constants.method.GET;
        const url = Constants.urlGet;
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
                <Button variant="contained" color="primary" onClick={loadMore}>{Constants.loadMore}</Button>
            </div> :
            <div>Not Found</div>
            }
        </div>
    )
}

export default Pokemon;