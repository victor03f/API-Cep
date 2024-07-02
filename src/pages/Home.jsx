import { Link } from 'react-router-dom';

export default function Home() {
    return (<div className='ContainerHome'>
        <header className='HeaderHome'>
            <nav className='NavHome'>
                <ul>

                    <li><Link to="#About">Sobre</Link></li>
                </ul>
            </nav>
            <h1 className='NameSite'>
                CEP Fácil!
            </h1>
        </header>
        <main className='MainHome'>

            <section className='AboutHome' id='About'>
                <article>
                    Cansado de se deparar com endereços incompletos ou informações desatualizadas? Diga adeus às frustrações e dê boas-vindas à praticidade com a tecnologia inovadora de busca por CEP! Nossa plataforma oferece uma experiência intuitiva e eficiente, conectando você instantaneamente ao nome da rua e da cidade correspondentes a qualquer CEP no Brasil.
                </article>
            </section>

            <section className='Description'>
                <article className='DescriptionArticle'>
                    <p>
                        Este site oferece uma ferramenta de busca por CEP que permite aos usuários encontrar rapidamente o nome da rua e da cidade correspondentes a um determinado CEP no Brasil. A tecnologia utilizada garante resultados precisos e atualizados, tornando a ferramenta ideal para diversas situações, como:
                        </p>
                        <h1>Utilitarios do Site:</h1>
                        <ul>

                        
                        <p>
                        Preenchimento de cadastros online
                        </p>
                        Localização de endereços
                        <p>
                        Confirmação de dados
                        </p>
                        <p>
                        Complementação de informações
                        </p>
                        </ul>
                       
                        
                        <h2>
                            Clique aqui para ir a pagina de busca de CEP:
                        </h2>
                        <button>
                        <Link to="PageCEP">Buscar CEP</Link>
                        </button>
                        
                    </article>
                  
            </section>

        </main>



        <footer className='FooterHome'>
            <ul>
                <p>
                    Contato: (48)32273658
                </p>
                <p>
                    Email: sitebuscaCEP@gmail.com
                </p>
                <p>
                    Instagram: BuscadorCep
                </p>
            </ul>
        </footer>
    </div>


    )
}