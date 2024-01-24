import style from './style.module.css'

function Header() {
    return (
        <div className={style.wrapper}>
            <div className={style.headerItem}>
                <div className={style.item}>
                    <div className={style.textItem}>
                        <h1>Hschool</h1>
                        <div className={style.img}></div>
                    </div>
                    <div className={style.btns}>
                        <div className={style.login}>Login →</div>
                        <div className={style.reg}>Sign Up</div>
                    </div>
                </div>
                {/* <div className={style.stroke}></div> */}
            </div>
        </div>
    )
}

export default Header;