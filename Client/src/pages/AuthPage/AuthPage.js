import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from './style.module.css'

function AuthPage() {
    return (
        <>
            <Header></Header>

            <div className={style.wrapper}>
                <div className={style.textBlock}>
                    <h1>Login</h1>
                    <div><input placeholder="Placeholder text"></input></div>
                    <div><input placeholder="Placeholder text"></input></div>
                    <div className={style.btn}>Login</div>
                </div>
                <div className={style.img}></div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default AuthPage;