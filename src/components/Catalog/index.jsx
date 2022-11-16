import React from 'react';
import style from './Catalog.module.scss';
import {
    Link
  } from "react-router-dom";

import Card from "../Card";

function Catalog({openProfile}) {

    const [items, setItems] = React.useState([]);
    


    React.useEffect(()=>{
        fetch('https://63547427e64783fa82851bf5.mockapi.io/our-team')
      .then((res)=> {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
      let user=JSON.parse(localStorage.getItem('user'))
      console.log(user.mail)
      },[]);

      const [count, setCount] = React.useState(8); //для прогрузки по 8 карточек


    return (
        <div className={style.ourTeamBlock}>
            <div className={style.topBlock}>
                <Link to="/">Выход</Link>
                <h1>Наша команда</h1>
                <p>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>
            </div>
            <div className={style.bottomBlock}>
                <div className={style.catalog}>
                    {
                        items.map((obj,i)=> (
                            <Card key={i}
                                  index={i}
                                  name={obj.name}
                                  image={obj.img}
                                  openProfile={openProfile}
                            />
                          )).slice(0,count)
                    }
                </div>
                <button onClick={()=>setCount(count+8)}>Показать еще
                <img src="imgs/Vector.png" alt="Показать" />
                </button>
            </div>
        </div>
    )
};

export default Catalog;