import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import '../styles/Header.css';
import * as Constants from '../utils/Constants';

const Header = (props) => {
    const [keyword, setKeyword] = useState();
    const onSearch = () => {
        props.onSearch(keyword);
    }
    return (
        <div className='header'>
            <div className='flex-header'>
                <div className='search'>
                    <span>{Constants.nameOrNumber}</span>
                    <div>
                        <input className='input-search' onChange={(e) => setKeyword(e.target.value)} onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                props.onSearch(keyword);
                            }
                        }}/>
                        <Button style={{background: 'rgb(238, 107, 47)', marginLeft: 5}} variant="contained" color='primary' onClick={onSearch}>
                            <SearchIcon />
                        </Button>
                    </div>
                    <span>{Constants.useSearhAdvance}</span>
                </div>
                <div className='text-search'>
                    <span>{Constants.textSearch}</span>
                </div>
            </div>
        </div>
    )
}

export default Header;