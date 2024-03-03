import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ItemCourse from "../../components/ItemCourse/ItemCourse";
import style from './style.module.css'
import Pagination from '@mui/material/Pagination';

function Courses() {
    return (
        <>
            <Header></Header>

            <div className={style.wrapper}>
                <div className={style.item}>
                    <div className={style.courses}>
                        <div className={style.img}></div>
                    </div>
                    <ItemCourse></ItemCourse>
                </div>
                <div className={style.pagination}>
                    <Pagination count={10} disabled size="large" />
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Courses;