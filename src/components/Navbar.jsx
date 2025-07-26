import React, { useState } from 'react';
import S from '../components/Navbar.module.scss';
import { useDispatch } from 'react-redux';
import { getProfile  } from '../store/github/githubData';

const Navbar = ()=>{
 

const [text, setText]= useState('')
const dispatch = useDispatch()

const submit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    dispatch(getProfile(text));;
};

    return(
        <>
        <nav className={S.nav}>
            <h1 className={S.nav__logo}>github finder</h1>
        </nav>
        <div className={S.nav__search}>
            <input 
            placeholder='Введите имя пользователя'
            type="text" 
            className={S.nav__search_input} 
            value={text}
            onChange={((event)=> setText(event.target.value))}
            />
            <button className={S.nav__search_btn}
            onClick={(event)=>submit(event)}
             >НАЙТИ</button>
        </div>
        </>
    )
}

export default Navbar