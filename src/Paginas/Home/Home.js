import banner_home from '../../assets/banner-home.png';
import banner_sabores from '../../assets/banner-sabores.jpg';
import eventos_image from '../../assets/eventos-image.jpg';
import sobre_image from '../../assets/sobre-image.jpg';

import '../Home/Home.css';

function Home() {
    return (
        <div className='home'>
            
            <div className='background-banner'>
                <span className='text_banner'>
                    <p>SORVETE</p>
                    <p>ARTESANAL</p>
                </span>
            </div>
            <div className='conteudo_home'>
                <img src={ banner_sabores }></img>
                <div className='texto_conteudo'>
                    <h2>NOSSOS SABORES</h2>
                    <h3>Novos e Deliciosos!</h3>
                        <p>
                            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                        </p>
                </div>
            </div>
            <div className='conteudo_home_invert'>
                <img src={ eventos_image }></img>
                <div className='texto_conteudo'>
                    <h2>NOSSOS EVENTOS</h2>
                    <h3>Delicias com sorvete!</h3>
                        <p>
                            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                        </p>
                </div>
            </div>
            <div className='conteudo_home'>
                <img src= { sobre_image }></img>
                <div className='texto_conteudo'>
                    <h2>SOBRE NÓS</h2>
                    <h3>Alegria em cada casquinha!</h3>
                        <p>
                            Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                        </p>
                </div>
            </div>
        </div>
    )
};

export default Home;