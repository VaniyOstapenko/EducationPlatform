import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from './style.module.css'
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import { useState } from "react";
import axios from 'axios';

function AuthPage() {
    const [inp, setInp] = useState({})

    async function clickButton() {
        const response = await axios.post("http://localhost:3001/api/auth", inp, {
            withCredentials: true,
        });

        console.log(response);
    }


    const inputArray = [
        {
            id: 1,
            placeholderValue: 'Enter Email...',
            inputType: 'text',
            name: 'email'
        },

        {
            id: 2,
            placeholderValue: 'Enter Password...',
            inputType: 'password',
            name: 'pwd'
        }
    ]
    return (
        <>
            <Header></Header>

            <div className={style.wrapper}>
                <div className={style.textBlock}>
                    <h1>Login</h1>
                    {inputArray.map((el) => <Input inp={inp} setInp={setInp} el={el}></Input>)}
                    <Link to={'/courses'}><div onClick={clickButton} className={style.btn}>Login</div></Link>
                </div>
                <div className={style.img}></div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default AuthPage;