import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from './style.module.css'
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";

function AuthPage() {
    const inputArray = [
        {
            id: 1,
            placeholderValue: 'Enter Email...',
            inputType: 'text'
        },

        {
            id: 2,
            placeholderValue: 'Enter Password...',
            inputType: 'password'
        }
    ]
    return (
        <>
            <Header></Header>

            <div className={style.wrapper}>
                <div className={style.textBlock}>
                    <h1>Login</h1>
                    {inputArray.map((el) => <Input el={el}></Input>)}
                    <Link to={'/courses'}><div className={style.btn}>Login</div></Link>
                </div>
                <div className={style.img}></div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default AuthPage;