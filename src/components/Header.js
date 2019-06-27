import React from 'react';
import { NavLink } from 'react-router-dom';
import FindForm from './Findform'

const Header = () => (
    <header>
        <h1>お客様メモ</h1>
        
        <h2>お客様情報一覧を表示します<br></br>
        <FindForm />
        </h2>
        <div className='header__nav'>
            <NavLink to='/add' activeClassName='activeNav'>新規メモ追加</NavLink>
            <NavLink to='/' activeClassName='activeNav' exact={true}>一覧表示</NavLink>
        </div>
    </header>
);

export default Header;