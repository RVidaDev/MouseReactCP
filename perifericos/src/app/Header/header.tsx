import Link from 'next/link';

const Header1 = () => {
    return (
        <>

           <header className="cabecalho">
                <div className="content">
                    <nav className="menu">
                        <ul className="menu_rotas">
                            <li>
                                <Link href="/" className="botao_link">Página Inicial</Link>
                            </li>
                            <li>
                                <Link href="/" className="botao_link">Produtos</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header> 

        </>
    )
}

export default Header1;