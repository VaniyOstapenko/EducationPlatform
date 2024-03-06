import { useRef, useState } from 'react';
import style from './style.module.css'
import Pagination from '@mui/material/Pagination';

function ItemCourse() {
    const languages = [
        {
            id: 1,
            course: 'JavaScript',
            description: `JavaScript is a practical course where students learn the basics
            of JavaScript.It covers variables, operators, conditionals, loops,
            functions, and data manipulation.`,
            img: style.img1
        },

        {
            id: 2,
            course: 'TypeScript',
            description: `TypeScript is a course that provides an introduction to TypeScript.
            Students will learn about TypeScript's key features, such as type
            annotations, interfaces, classes, and modules`,
            img: style.img2
        },

        {
            id: 3,
            course: 'Pyton',
            description: `Students will learn about variables, data types, conditionals, loops,
            functions, and file handling. Through hands-on exercises and
            projects, students will gain proficiency in writing Python code and
            solving real-world problems.`,
            img: style.img3
        },
        {
            id: 4,
            course: "Ruby",
            description:
                "Ruby is a dynamic, object-oriented programming language known for its simplicity and readability. It has a strong focus on programmer happiness with its elegant syntax and powerful metaprogramming capabilities.",
            img: style.img1
        },
        {
            id: 5,
            course: "Swift",
            description:
                "Swift is a modern, powerful programming language developed by Apple. It is designed for iOS, macOS, watchOS, and tvOS app development. Swift offers a clean syntax, type inference, and safety features, making it efficient and easy to learn. It supports both object-oriented and functional programming paradigms..",
            img: style.img2
        },
        {
            id: 6,
            course: "C++",
            description:
                "C++ is a versatile and powerful programming language widely used for system development, game development, and high-performance applications. It supports object-oriented programming, generics, and low-level memory manipulation.",
            img: style.img3
        },
        {
            id: 7,
            course: "C#",
            description:
                "C# is a robust and modern programming language designed for developing a wide range of applications, including web, desktop, and mobile applications. It offers a strong type system, garbage collection, and support for object-oriented programming, events, and LINQ.",
            img: style.img1
        },
    ]

    const [theOriginalNumberOfPages, setTheOriginalNumberOfPages] = useState(1)
    const howManyPagesAreCutOff = useRef(3)

    const lastLanguage = theOriginalNumberOfPages * howManyPagesAreCutOff.current;
    const firstLanguage = lastLanguage - howManyPagesAreCutOff.current;
    const theRightValue = languages.slice(firstLanguage, lastLanguage);
    return (
        <div>
            {theRightValue.map((el, index) => <div key={index} className={style.wrapper}>
                <div className={style.item}>
                    <div className={el.img}></div>
                    <div className={style.textBlock}>
                        <h1>{el.course}</h1>
                        <div className={style.line}></div>
                        <p>{el.description}</p>
                    </div>
                </div>
            </div>
            )}
            <div className={style.pagination}>
                <Pagination
                    count={Math.ceil(languages.length / howManyPagesAreCutOff.current)}
                    size="large"
                    onChange={(e, value) => setTheOriginalNumberOfPages(value)}
                />
            </div>
        </div>
    )
}

export default ItemCourse;