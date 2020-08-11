import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='flex-header'>
                <div className='search'>
                    <span>Name or Number</span>
                    <div>
                        <input className='input-search'/>
                        <Button style={{background: 'rgb(238, 107, 47)', marginLeft: 5}} variant="contained" color='primary'>
                            <SearchIcon />
                        </Button>
                    </div>
                    <span>Use The Advanced Search to explore Pokemon by type</span>
                </div>
                <div className='text-search'>
                    <span>Search for Pokemon by Name or using  its National Pokedex Number</span>
                </div>
            </div>
        </div>
    )
}

export default Header;