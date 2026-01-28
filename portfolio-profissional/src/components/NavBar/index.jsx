import "./navbar.styles.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { SButton } from "./SButton.js";
export const NavBar = () => {
    return (
        <>
            <header>
                <div className="menu-line">
                    <div className="contaner-icon-menu">
                        <MenuOutlinedIcon/>
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
                    <SButton>Olá</SButton>     
                </div>
            </header>
        </>
    )
}