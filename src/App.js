import './App.css';

import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={ logo } className='logo_header'></img>
        <ul className='list-nav'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='sabores'>Sabores</Link>
          </li>
          <li>
            <Link to='sobre'>Sobre</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className='footer_conteudo'>
          <img src={ logo } className='logo'></img>
          <div className='txt-footer'>
            <span>
              <h2>ENDEREÇO</h2>
              <p>Av. Bernardinho de Campos, 98</p>
              <p>São Paulo, SP 12345-678</p>
            </span>
            <span>
              <h2>CONTATO</h2>
              <p>info@meusite.com</p>
              <p>Tel: (11) 3456-7890</p>
            </span>
            <span>
              <h2>HORÁRIOS</h2>
              <p>ABERTO TODOS OS DIAS</p>
              <p>10:00 - 22:00</p>
            </span>
          </div>
        </div>
        <p>Desenvolvido por "Erick Gabriel Bonifácio Dos Santos"</p>
      </footer>
      
    </div>
  );
}

export default App;
