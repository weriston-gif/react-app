import react from "react";
import Menber from './memberFamily' 

export default props => {

    return (
        <div>
            <Menber name="Weriston" sobrenome={props.sobrenome}/>
            <Menber name="Evania" {...props}/> 
            <Menber name="Eva" sobrenome='Pereira'/>  
        </div>
    )
}