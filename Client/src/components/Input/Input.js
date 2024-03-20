function Input({ el, setInp, inp }) {
    function changeInput(e) {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div><input name={el.name} inp={inp} onChange={changeInput} placeholder={el.placeholderValue} type={el.inputType}></input></div>
        </>
    )
}

export default Input;