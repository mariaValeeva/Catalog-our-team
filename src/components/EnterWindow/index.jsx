import React from 'react';
import style from '../RegistrationWindow/RegistrationWindow.module.scss';
import { useNavigate } from 'react-router-dom';


function EnterWindow() {

    const navigate = useNavigate();
    const logEnter = (e) => {
        e.preventDefault();
        navigate("/catalog");
        localStorage.setItem('user', JSON.stringify({mail: valueMail,password:valuePassword}));
    }


    const [valueMail, setValueMail] = React.useState('');
    const [valuePassword, setValuePassword] = React.useState('');


    return (
        <div className={style.registrationBlock}>
            <h2 className={style.registrationBlockTitle}>Вход</h2>
            <form className={style.registrationBlockForm}>

                <label>Электронная почта
                    <input onChange={(e) => setValueMail(e.target.value)} value={valueMail} type="email" />
                </label>
                
                <label>Пароль
                    <input onChange={(e) => setValuePassword(e.target.value)} value={valuePassword} type="password" />
                </label>
                
                <button onClick={(e)=> logEnter(e)}>Вход</button>
            </form>
      </div>
    )
};

export default EnterWindow;