import React from "react";
import S from './Main.module.scss'; 
import { useSelector } from "react-redux";

const Rap = () => {
  const { repos } = useSelector((store) => store.github);

  return (
    <>
      {repos.map((repo) => (
        <div key={repo.id} className={S.main__item}>
          <div className={S.main__item_left}>
            <h2 className={S.main__item_left_title}>{repo.name}</h2>
            <p className={S.main__item_left_stars}>Кол-во звёзд:{repo.stargazers_count}</p>
            <p className={S.main__item_left_data}>
              Дата добавления: {repo.created_at.split('T')[0]}
            </p>
          </div>
          <div className={S.main__item_right}>
            <a href={repo.html_url}  
            className={S.main__item_right_link}>ПОСЕТИТЬ</a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Rap;
