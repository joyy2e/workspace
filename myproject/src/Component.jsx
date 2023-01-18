export const InputBox = (props) => {
    return(
        <div>
            {props.title ? <div className="text-left">{props.guide}</div> : ""}
            <input className="input-email" type={props.type} name="email" placeholder={props.guide}/>
        </div>
    )
}

