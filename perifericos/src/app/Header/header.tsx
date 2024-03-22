import Link from 'next/link';

const Header1 = () => {
    return (
        <>

           <header className="cabecalho">
                    <nav className="menu"> 
                        <ul className="menu_rotas">
                        <img className="logo-computador" src="\imagens\computer-solid.svg" alt="logo de computador" /> 
                            <li>
                                <Link href="/" className="botao_link">HOME</Link>
                            </li>
                            <li>
                                <Link href="/" className="botao_link">TECLADOS</Link>
                            </li>
                            <li>
                                <Link href="/" className="botao_link">MOUSES</Link>
                            </li>
                            <li>
                                <Link href="/" className="botao_link">MONITORES</Link>
                            </li>
                            <li>
                                <Link href="/" className="botao_link">GRUPO</Link>
                            </li>
                            <img className="carrinho" src="/imagens/cart-shopping-solid.svg" alt="logo de carrinho de compras" /> 
                        </ul>
                    </nav>
            </header> 

        </>
    )
}

export default Header1;