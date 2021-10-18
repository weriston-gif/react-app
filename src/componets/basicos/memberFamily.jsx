import react from "react";

export default props => {

    return (
        <div>
            <span>{props.name} <strong>{props.sobrenome}</strong></span>
        </div>
    )
}