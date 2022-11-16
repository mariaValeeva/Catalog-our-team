import React from "react";
import style from './Catalog/Catalog.module.scss';
import { useNavigate } from 'react-router-dom';



function Card({openProfile,index,image,name}) {

    
    const navigate = useNavigate();
    const [like, setLike] = React.useState(false);

    const openCard = (i) => {
        fetch(`https://63547427e64783fa82851bf5.mockapi.io/our-team/${i}`)
      .then((res)=> {
        return res.json();
      })
      .then((arr) => {
        openProfile(arr);
        navigate("/profile");
      });
    }
    

    return (
        <div className={style.catalogCard}>
            <div onClick={()=>openCard(index)} className={style.infoBlock}>
                <img className={style.imgPhoto} src={image} alt="фото"/>
                <h4>{name}</h4>
            </div>
            

            <button onClick={()=> setLike(!like)}>
                {
                like ? (<img src='imgs/Like.png' />)
                : ( <img src='imgs/unLike.png' />)
                }
               
            </button>

        </div>
    )
};

export default Card;