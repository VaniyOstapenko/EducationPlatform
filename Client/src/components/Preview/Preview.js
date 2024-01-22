import style from './style.module.css'

function Preview() {
    return (
        <div className={style.wrapper}>
            <div className={style.previewContent}>
                <div className={style.previewInfo}>
                    <p className={style.textPlatform}>E-COURSE PLATFORM</p>
                    <h1>Learning and
                        teaching online,
                        made easy.</h1>
                    <p className={style.textAdditional}>Any subject, in any language, on any device, for all ages!</p>
                    <div className={style.btn}>About platform</div>
                    <div className={style.statistics}>
                        <div className={style.lightningImg}></div>
                        <p className={style.studentsCount}>600<span>+</span></p>
                    </div>
                    <p className={style.textStudents}>Students</p>
                </div>
                <div className={style.previewImg}></div>
            </div>

            <div className={style.learnContent}>
                <div className={style.secondPreview}>
                    <div className={style.Img}></div>
                    <div className={style.textBlock}>
                        <h2>Learn a language in a playful way</h2>
                        <p>Make learning programming languages more fun with mini-games</p>
                        <div className={style.miniImg}>
                            <div className={style.firstImg}></div>
                            <div className={style.secondImg}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.knowledgeContent}>
                <div className={style.thirdPreview}>
                    <h2>Increase your knowledge</h2>
                    <p>Traditional and new effective approaches to learning languages</p>
                    <div className={style.btn}>Textbook→</div>
                </div>
                <div className={style.thirdImg}></div>
            </div>

            <div className={style.progressContent}>
                <div className={style.forthImg}></div>
                <div className={style.fourthText}>
                    <h2>Watch your progress every day</h2>
                    <p>Save statistics on your achievements and mistakes</p>
                    <div className={style.btn}>Statistics→</div>
                </div>
            </div>
        </div>
    )
}

export default Preview;