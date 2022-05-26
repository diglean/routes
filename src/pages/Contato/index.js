import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Contato da empresa (ddd) xx xxxxx-xxxx</h1><br/>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
        </div>
    )
}

export default Contato;