import React from 'react';
import style from './RegistrationWindow.module.scss';
import {
    Link
} from "react-router-dom";
import axios from 'axios';
import EnterWindow from '../EnterWindow';
import { useNavigate } from 'react-router-dom';


function RegistrationWindow() {

    const navigate = useNavigate();
    const [valueName, setValueName] = React.useState('');
    const [valueMail, setValueMail] = React.useState('');
    const [valuePassword, setValuePassword] = React.useState('');
    const [valuePasswordTwo, setValuePasswordTwo] = React.useState('');

    const registration = async (e) => {
        e.preventDefault();
        if (valuePassword !== valuePasswordTwo) {
            alert("Пароли должны совпадать")
        } else {
            await axios.post('https://63547427e64783fa82851bf5.mockapi.io/our-team',
                { "name": valueName, "email": valueMail, "password": valuePassword }) // Результат ответа от сервера
            console.log('данные ушли на сервер');
            navigate("/enter");
        }
        
    };


    return (
        <div className={style.registrationBlock}>
            <h2 className={style.registrationBlockTitle}>Регистрация</h2>
            <form className={style.registrationBlockForm}>
                <label>Имя
                    <input onChange={(e) => setValueName(e.target.value)} value={valueName} type="text" />
                </label>

                <label>Электронная почта
                    <input onChange={(e) => setValueMail(e.target.value)} value={valueMail} type="email" />
                </label>

                <label>Пароль
                    <input onChange={(e) => setValuePassword(e.target.value)} value={valuePassword} type="password" />
                </label>

                <label>Подтвердите пароль
                    <input onChange={(e) => setValuePasswordTwo(e.target.value)} value={valuePasswordTwo} type="password" />
                </label>

                <button onClick={(e) => registration(e)}>Зарегистрироваться</button>
            </form>
        </div>

    )
}

export default RegistrationWindow;
