import React from "react";
import s from './Profile.module.scss'
import { useSelector } from "react-redux";

const Profile = ()=> {

    const {user} = useSelector((store)=> store.github)

    return(
        <>
        <div className={s.profile}>
            <div className={s.profile__left}>
                <img src={user.avatar_url} alt="" className={s.profile__left_img} />
                <a href={user.html_url} className={s.profile__left_link}>ПОСЕТИТЬ</a></div>
                <div className={s.profile__right}>
                <p className={s.profile__right_name}>{user.login}</p>
                <p className={s.profile__right_rap}>Репозиториев: {user.public_repos}</p>
                <p className={s.profile__right_founded}>Создан: {user.created_at.split('T')[0]}</p>
                <p className={s.profile__right_sub}>Подписщиков: {user.followers}</p>
                <p className={s.profile__right_subed}>Подписок: {user.following}</p>

            </div>
        </div>
        </>
    )}


export default Profile