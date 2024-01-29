import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from './style.module.css'
import { Link } from "react-router-dom";

function AuthPage() {
    return (
        <>
            <Header></Header>

            <div className={style.wrapper}>
                <div className={style.textBlock}>
                    <h1>Login</h1>
                    <div><input placeholder="Email"></input></div>
                    <div><input placeholder="Password"></input></div>
                    <Link to={'/courses'}><div className={style.btn}>Login</div></Link>
                </div>
                <div className={style.img}></div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default AuthPage;