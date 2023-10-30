const Input = (props) => {
    const { type, name, placeholder, setState, state } = props

    const changeValue = (e, setState) => {
        setState(e.target.value)
    }

    if (type === 'message') {
        return (
            <textarea  className="text-area" type={type} name={name} placeholder={placeholder} value={state} onChange={(e) => { changeValue(e, setState) }} />
        )
    }
    return (
        <input type={type} name={name} placeholder={placeholder} value={state} onChange={(e) => { changeValue(e, setState) }} required/>
    )
}
export default Input;