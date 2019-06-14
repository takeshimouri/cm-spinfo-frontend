import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h2>お客様情報一覧</h2>
        <div className='header__nav'>
            <NavLink to='/' activeClassName='activeNav' exact={true}>一覧を見る</NavLink>
            <NavLink to='/add' activeClassName='activeNav'>新規メモ入力</NavLink>
        </div>
    </header>
);

export default Header;