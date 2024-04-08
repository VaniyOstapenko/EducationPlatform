import style from './style.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function SingleCourse() {
    const { id } = useParams()
    const [languages, setLanguages] = useState([{}])
    const [lessons, setLessons] = useState([{}])

    async function getLanguagesId() {
        const response = await axios.get(`http://localhost:3001/course/${id}`)
        setLanguages(response.data);
    }

    async function getLessons() {
        const response = await axios.get(`http://localhost:3001/lessons/${id}`)
        setLessons(response.data);
    }

    useEffect(() => {
        getLanguagesId()
        getLessons()
    }, [])

    return (<>
        <Header></Header>
        <div className={style.allBox}>
            <div className={style.wrapper}>
                <div className={style.item}>
                    <div className={style.img}></div>
                    <div className={style.infoFromCourses}>
                        <h1>{languages[0]?.course}</h1>
                        <p>{languages[0]?.description}</p>
                    </div>
                </div>
                <button>Go to course</button>
            </div>
            <div className={style.boxLessons}>
                <h1>{lessons.length} lessons</h1>
                <ol>
                    {lessons.map((el) => <li>{el.title}</li>)}
                </ol>
            </div>
        </div>
        <Footer></Footer>
    </>);
}

export default SingleCourse;