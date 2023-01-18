export const Input = (props) => {
    const {type, name, placeholder, onChange} = props
    return <input 
    className="my-input" 
    type={type} 
    name={name} 
    placeholder={placeholder}
    onChange={onChange}
    />
}

export const Image = (props) => {
    // className = "" => 값이 없을경우 초기화
    const {src, alt, className = ""} = props
    return <div className={`my-image ${className}`}>
        <img src={src} alt={alt} />
    </div>
}

export const Title = (props) => {
    return <h1 className="my-title">{props.text}</h1>
}

export const Subtitle = (props) => {
    return <div className="my-subtitle">{props.text}</div>
}

export const Linebar = (props) => {
    return <div className="my-line"></div>
}

export const Button = (props) => {
    const {text, type, onClick} = props
    return <button className={`my-button ${type}`} onClick={onClick}>{text}</button>
}

