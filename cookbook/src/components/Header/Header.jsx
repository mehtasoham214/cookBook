import React from 'react'
import "./Header.scss"
import { images } from '../../constants';

const Header = () => {
    return (
        <div className='app__header'>
            Header
            <img src={images.logo} alt="logo" />
        </div>
    )
}

export default Header;
