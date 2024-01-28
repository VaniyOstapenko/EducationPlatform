import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from './style.module.css'

function Courses() {
    return (
        <>
            <Header></Header>

            <div className={style.wrapper}>
                <div className={style.item}>
                    <div className={style.courses}>
                        <div className={style.img}></div>
                    </div>
                    <div className={style.js}>
                        <div className={style.itemJS}>
                            <div className={style.img}></div>
                            <div className={style.textBlock}>
                                <h1>JavaScript</h1>
                                <div className={style.line}></div>
                                <p>JavaScript is a practical course where students learn the basics
                                    of JavaScript. It covers variables, operators, conditionals, loops,
                                    functions, and data manipulation.</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.ts}>
                        <div className={style.itemTS}>
                            <div className={style.img}></div>
                            <div className={style.textBlock}>
                                <h1>TypeScript</h1>
                                <div className={style.line}></div>
                                <p>TypeScript is a course that provides an introduction to TypeScript.
                                    Students will learn about TypeScript's key features, such as type
                                    annotations, interfaces, classes, and modules</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.python}>
                        <div className={style.itemPython}>
                            <div className={style.img}></div>
                            <div className={style.textBlock}>
                                <h1>Python</h1>
                                <div className={style.line}></div>
                                <p>Students will learn about variables, data types, conditionals, loops,
                                    functions, and file handling. Through hands-on exercises and
                                    projects, students will gain proficiency in writing Python code and
                                    solving real-world problems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
}

export default Courses;