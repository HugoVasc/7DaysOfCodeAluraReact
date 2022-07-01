import Logo from "./Logo";

export default function Menu () {
    return (
        <header className="Menu-header">
            <Logo />
            <div className="Menu-div">
                <a>Como Fazer /</a>
                <a>Ofertas /</a>
                <a>Depoimentos /</a>
                <a>Vídeos /</a>
                <a>Meu Carrinho</a>
            </div>
        </header>
    )
}