import React, {ReactElement} from 'react';
import './SearchBar.css';
import logoMeLi from '../../assets/Logo_ML@2x.png.png.png';
import searchIcon from '../../assets/ic_Search@2x.png.png.png';


const SearchBar = (): ReactElement => {
    // @ts-ignore
    return (
        <div>
            <div className='head-bar'>
                <div>
                    <img className='logo-size' src={logoMeLi} alt={logoMeLi}/>
                </div>
                <div>
                    <input className='search-bar' type='text' placeholder='  Nunca dejes de buscar'/>
                </div>
                <div>
                    <button className='button-size'>
                        <img className='search-icon' src={searchIcon} alt={searchIcon}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
