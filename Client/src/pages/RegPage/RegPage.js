import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import style from './style.module.css'
import { Link } from "react-router-dom";

function RegPage() {
    const inputArray = [
        {
            id: 1,
            placeholderValue: 'Enter Name...',
            inputType: 'text'
        },

        {
            id: 2,
            placeholderValue: 'Enter Surname...',
            inputType: 'text'
        },

        {
            id: 3,
            placeholderValue: 'Enter Email...',
            inputType: 'text'
        },

        {
            id: 4,
            placeholderValue: 'Enter Password...',
            inputType: 'password'
        },

        {
            id: 5,
            placeholderValue: 'Enter ConfirmPassword...',
            inputType: 'password'
        },
    ]

    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.textBlock}>
                    <h1>Sign Up</h1>
                    {inputArray.map((el) => <Input el={el}></Input>)}
                    <Link to={'/courses'}><div className={style.btn}>Sign Up</div></Link>
                </div>
                <div className={style.img}></div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default RegPage;