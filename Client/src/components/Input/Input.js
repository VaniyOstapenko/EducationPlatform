function Input({ el }) {
    return (
        <>
            <div><input placeholder={el.placeholderValue} type={el.inputType}></input></div>
        </>
    )
}

export default Input;