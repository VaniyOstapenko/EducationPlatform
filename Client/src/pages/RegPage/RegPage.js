import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import style from './style.module.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

function RegPage() {
    const [inp, setInp] = useState({})

    async function clickButton() {
        try {
            if (!inp.name || !inp.surname || !inp.email || !inp.pwd) throw new Error('you have not filled the necessary fields')
            if (inp.pwd !== inp.confirmPwd) throw new Error('Your passwords do not match')
            const response = await axios.post("http://localhost:3001/api/reg", inp);

            console.log(response);
        } catch (error) {
            alert(error.message)
        }
    }
    const inputArray = [
        {
            id: 1,
            placeholderValue: 'Enter Name...',
            inputType: 'text',
            name: 'name'
        },

        {
            id: 2,
            placeholderValue: 'Enter Surname...',
            inputType: 'text',
            name: 'surname'
        },

        {
            id: 3,
            placeholderValue: 'Enter Email...',
            inputType: 'text',
            name: 'email'
        },

        {
            id: 4,
            placeholderValue: 'Enter Password...',
            inputType: 'password',
            name: 'pwd'
        },

        {
            id: 5,
            placeholderValue: 'Enter ConfirmPassword...',
            inputType: 'password',
            name: 'confirmPwd'
        },
    ]

    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.textBlock}>
                    <h1>Sign Up</h1>
                    {inputArray.map((el) => <Input inp={inp} setInp={setInp} el={el}></Input>)}
                    <Link to={'/auth'}><div onClick={clickButton} className={style.btn}>Sign Up</div></Link>
                </div>
                <div className={style.img}></div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default RegPage;