import { Nav } from "./style";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

export function Navbar(){

    return(
        <Nav>
            <Link to="/" className="img"><img src={logo} alt="logo" /></Link>

            <div className="category">
                <ul className="item">
                    <Link className="option"><li>Periféricos</li></Link>
                    <Link className="option"><li>Acessórios</li></Link>
                    <Link className="option"><li>Sobre nós</li></Link>
                    <Link className="option"><li>Suporte</li></Link>
                </ul>
            </div>

            <Link to="/" className="btn"><button>Entrar</button></Link>
        </Nav>
    )
}