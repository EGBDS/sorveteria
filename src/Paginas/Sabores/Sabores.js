import './Sabores.css';
import sabor_cookies_avela from '../../assets/sabor-cookies-avela.png';
import sabor_oreo from '../../assets/sabor-oreo.png';
import sabor_pistache from '../../assets/sabor-pistache.png';
import sabor_kiwi from '../../assets/sorbet-kiwi.png';
import sabor_limao from '../../assets/sorbet-limao.png';
import sabor_morango from '../../assets/sorbet-morango.png';


function Sabores(){
    return (
        <div className='sabores'>
            <div className='banner_text'>
                <div className='text_sabores'>
                    <p>NOSSOS</p>
                    <p>SABORES</p>
                </div>
            </div>
            <div className='sabores_sorvet'>
                <h1>SABORES DE SORVETE</h1>
                <ul>
                    <li>
                        <img src={ sabor_oreo } className='img_sabores'></img>
                        <h2>Sorvete de Oreo</h2>
                        <p>
                            Delicioso sorvete sabor Oreo. Uma explosão de sabor.
                        </p>
                    </li>
                    <li>
                        <img src={ sabor_pistache } className='img_sabores'></img>
                        <h2>Sorvete Pistache</h2>
                        <p>
                            Cremoso sorvete sabor pistache com pedacinhos de semente.
                        </p>
                    </li>
                    <li>
                        <img src={ sabor_cookies_avela } className='img_sabores'></img>
                        <h2>Sorvete Cookies & Avelã</h2>
                        <p>
                            O nosso melhor sorvete. Você vai adorar o sabor.
                        </p>
                    </li>
                    <li>
                        <img src={ sabor_kiwi } className='img_sabores'></img>
                        <h2>Sorvete de Kiwi</h2>
                        <p>
                            Delicioso e refrescante sorvete sabor Kiwi. Rico em vitamina C.
                        </p>
                    </li>
                    <li>
                        <img src={ sabor_morango } className='img_sabores'></img>
                        <h2>Sorvete de Morango</h2>
                        <p>
                            Sorvete de morango gourmet. Tradicional e saboroso.
                        </p>
                    </li>
                    <li>
                        <img src={ sabor_limao } className='img_sabores'></img>
                        <h2>Sorvete de Limão Siciliano</h2>
                        <p>
                            O incrivel sorvete gourmet de limão siciliano vai te encantar.
                        </p>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Sabores;