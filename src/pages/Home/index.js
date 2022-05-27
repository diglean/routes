import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>Bem vindo a página HOME</h1><br/>

        <Link to="/sobre">Sobre</Link><br/>
        <Link to="/contato">Contato</Link>
        <hr/>
        <Link to="/produto/123">Acessar produto</Link>
      </div>
    );
  }
  
  export default Home;
  