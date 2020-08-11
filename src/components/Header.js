import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import '../styles/Header.css';

const Header = (props) => {
    const [keyword, setKeyword] = useState();
    const onSearch = () => {
        props.onSearch(keyword);
    }
    return (
        <div className='header'>
            <div className='flex-header'>
                <div className='search'>
                    <span>Name or Number</span>
                    <div>
                        <input className='input-search' onChange={(e) => setKeyword(e.target.value)}/>
                        <Button style={{background: 'rgb(238, 107, 47)', marginLeft: 5}} variant="contained" color='primary' onClick={onSearch}>
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