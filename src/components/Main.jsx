import React, { useState } from "react";
import S from './Main.module.scss'; 
import { useSelector } from "react-redux";
import Rap from "./Rap";

const Main = () => {
  const { repos } = useSelector((store) => store.github)
  const [active, setActive] = useState('ИМЯ')
  const buttons = ['ИМЯ', 'ЗВЁЗДЫ', 'ДАТА']

 
const sortedRepos = [...repos].sort((a, b) => {
  if (active === 'ИМЯ') return a.name.localeCompare(b.name);
  if (active === 'ЗВЁЗДЫ') return b.stargazers_count - a.stargazers_count;
  if (active === 'ДАТА') return new Date(b.created_at) - new Date(a.created_at);
  return 0;
});

console.log(repos);


  return (
    <>
      <h2 className={S.title}>Сортировка</h2>
      
      <div className={S.sortButtons}>
        {buttons.map((label) => (
          <button
            key={label}
            className={`${S.sortButton} ${active === label ? S.active : ''}`}
            onClick={() => setActive(label)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={S.main}>
        {sortedRepos.map((repo,i) => (
          <Rap 
          key={repo.id} 
          repo={repo} 
          index={i}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
