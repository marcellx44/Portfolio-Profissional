import "./navbar.styles.css";
export const NavBar = () => {
    return (
        <>
            <header>
                <div className="menu-line">
                    <div className="contaner-icon-menu">
                        <p>oi</p>
                    </div>
                </div>
                <ul className="navbar-list">
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Hard Skills</li>
                    <li>Soft Skills</li>
                    <li>Projetos</li>
                    <li>Experiências</li>
                </ul>
                <div className="container-curriculo">
                    <button>botao</button>
                </div>
            </header>
        </>
    )
}