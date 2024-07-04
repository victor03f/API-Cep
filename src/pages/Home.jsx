import { Link } from 'react-router-dom';
import "./Home.css"


export default function Home() {
    return (
        <div className='Home'>
            <header>
                <nav>
                    <li><Link to="#Inicio">Inicio</Link></li>
                    <li><a href='#Footer'>Sobre</a></li>
                    <li><Link to="/PageCEP">BuscarCEP</Link></li>
                    <li><a href='#Footer'>Rodapé</a></li>
                </nav>
                <h1 className='NameSite'>
                    CEP Fácil!
                </h1>
            </header>
            <main>

                <article className='art1'>
                    <p>
                        Cansado de se deparar com endereços incompletos ou informações desatualizadas? Diga adeus às frustrações e dê boas-vindas à praticidade com a tecnologia inovadora de busca por CEP! Nossa plataforma oferece uma experiência intuitiva e eficiente, conectando você instantaneamente ao nome da rua e da cidade correspondentes a qualquer CEP no Brasil.
                    </p>

                </article>

                <article className='art2'>
                    <p>
                        Este site oferece uma ferramenta de busca por CEP que permite aos usuários encontrar rapidamente o nome da rua e da cidade correspondentes a um determinado CEP no Brasil. A tecnologia utilizada garante resultados precisos e atualizados, tornando a ferramenta ideal para diversas situações, como:
                    </p>
                </article>
                <h1>Utilitarios do Site:</h1>
                <ul>
                    <li>

                        Preenchimento de cadastros online

                    </li>
                    <li>
                        Localização de endereços
                    </li>
                    <li>
                        Confirmação de dados
                    </li>
                    <li>
                        Complementação de informações
                    </li>

                </ul>


                <h2>
                    Clique aqui para ir a pagina de busca de CEP:
                </h2>
                <article className='art3' >
                    <button>
                        <Link to="/PageCEP">Buscar CEP</Link>
                    </button>
                    <p>

                        Obrigado por visitar meu site!
                        Sua presença é muito importante para mim.

                        Seja você um visitante novo ou frequente, fico feliz que você tenha dedicado um tempo para explorar meu site. Espero que tenha encontrado algo interessante e informativo.
                    </p>
                    <p>
                    Meu objetivo é criar um espaço virtual que seja útil, informativo e inspirador.

Trabalho duro para fornecer conteúdo de alta qualidade que atenda às suas necessidades e interesses. Se você tiver algum feedback ou sugestão, por favor, não hesite em me contatar.
                    </p>
                </article>



            </main>



            <footer id='Footer'>
                <p>
                    Contato: (48)32273658
                </p>
                <p>
                    Email: sitebuscaCEP@gmail.com
                </p>
                <p>
                    Instagram: BuscadorCep
                </p>
            </footer>
        </div>


    )
}