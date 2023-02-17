import './Sobre.css';
import sobre_image from '../../assets/sobre-image.jpg';
import sorveteria from '../../assets/sorveteria.jpg';

function Sobre(){
    return (
        <div className='sobre'>
            <div className='banner_sobre'>
                <p className='text_banner_sobre'>A SORVETERIA</p>
            </div>
            <div className='sobre_nos'>
                <h2>Sobre Nós</h2>
                <h3>Nós simplesmente amamos sorvete!</h3>
                <p>
                    Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                </p>
                <p>
                    Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                </p>
            </div>
            <div className='imagens_sobre'>
                <img src={ sobre_image } className='img_sobre'></img>
                <img src={ sorveteria } className='img_sobre'></img>
            </div>
        </div>
    )
}

export default Sobre;