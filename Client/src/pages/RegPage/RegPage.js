import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from './style.module.css'

function RegPage() {
    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.textBlock}>
                    <h1>Sign Up</h1>
                    <div><input placeholder="Placeholder text"></input></div>
                    <div><input placeholder="Placeholder text"></input></div>
                    <div><input placeholder="Placeholder text"></input></div>
                    <div><input placeholder="Placeholder text"></input></div>
                    <div className={style.btn}>Sign Up</div>
                </div>
                <div className={style.img}></div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default RegPage;