import React from 'react';
import style from "./Profile.module.scss";

import { useNavigate } from 'react-router-dom';



function Profile({profile}) {


    // React.useEffect((i)=>{
    //     fetch(`https://63547427e64783fa82851bf5.mockapi.io/our-team/${i}`)
    //   .then((res)=> {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     openProfile(arr);
    //   });
    //   },[]);

    console.log(profile);
    const navigate = useNavigate();
   
    const goBack = () => {
        navigate(-1);
    }



    return (
        <div className={style.profileBlock}>
            <div className={style.topBlock}>
                <button onClick={()=>goBack()} className={style.btnBack}>Назад</button>
                <div className={style.topCenter}>
                    <img src={profile.img} alt="фото специалиста" />
                    <div className={style.centerInfo}>
                        <h2>{profile.name}</h2>
                        <h3>Партнер</h3>
                    </div>
                </div>
                <button>Выход</button>
            </div>

            <div className={style.bottomBlock}>
                <div className={style.bottomLeft}>
                    <p>Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.</p>
                    <p>В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".</p>
                    <p>Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.</p>
                </div>
                <div className={style.bottomRight}>
                    <div className={style.tel}>
                        <img src="/imgs/tel.png" alt="contact-us" />
                        <a href="tel:+79543334455">+7 (954) 333-44-55</a>
                    </div>
                    <div className={style.mail}>
                    <img src="/imgs/mail.png" alt="contact-us" />
                        <a href="mailto:sykfafkar@gmail.com">sykfafkar@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Profile;