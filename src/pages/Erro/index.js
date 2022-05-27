import { Link } from 'react-router-dom';

function Erro(){
    return(
        <div>
            <h2>Ops, parece que essa página não existe =[</h2>
            <span>Essas páginas foram encontradas</span><br/>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
        </div>
    )
}

export default Erro;