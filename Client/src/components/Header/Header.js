import { Link } from 'react-router-dom';
import style from './style.module.css'

function Header() {
    return (
        <div className={style.wrapper}>
            <div className={style.headerItem}>
                <div className={style.item}>
                    <div className={style.textItem}>
                        <Link to={'/'}><h1>Hschool</h1></Link>
                        <div className={style.img}></div>
                    </div>
                    <div className={style.btns}>
                        <Link to={'/auth'}><div className={style.login}>Login →</div></Link>
                        <Link to={'/reg'}><div className={style.reg}>Sign Up</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;