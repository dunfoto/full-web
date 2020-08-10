const Input = props => {
    const { label, id, name, register, type } = props
    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">{label}</label>
            <input
                name={name}
                className="form-control"
                id={id}
                type={type}
                aria-describedby="emailHelp"
                ref={register}
            />
        </div>
    )
}

export default Input