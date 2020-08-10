import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='flex-header'>
                <div>
                    <span>Name or Number</span>
                    <div>
                        <input />
                        <button className='btn-search'>Search</button>
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