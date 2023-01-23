import { Nav } from "./style";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"

export function Navbar(){

    const navRef = useRef()

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <Nav>
            <Link to="/" className="img"><img src={logo} alt="logo" /></Link>

            <div className="category" ref={navRef}>
                
                    <Link className="option fist" to="perifericos">Periféricos</Link>
                    <Link className="option" to="/acessorios">Acessórios</Link>
                    <Link className="option" to="/suporte">Suporte</Link>
              

                    <Link to="/" className="btn"><button className="btn login">Entrar</button></Link>

            <button
				className="nav-btn nav-close-btn"
				onClick={showNavbar}>
				<FaTimes />
            </button>

            </div>

            
            <button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
        </Nav>
    )
}