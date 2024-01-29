import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from './style.module.css'
import { Link } from "react-router-dom";

function RegPage() {
    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.textBlock}>
                    <h1>Sign Up</h1>
                    <div><input placeholder="Name"></input></div>
                    <div><input placeholder="Surname"></input></div>
                    <div><input placeholder="Email"></input></div>
                    <div><input placeholder="Password"></input></div>
                    <Link to={'/courses'}><div className={style.btn}>Sign Up</div></Link>
                </div>
                <div className={style.img}></div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default RegPage;