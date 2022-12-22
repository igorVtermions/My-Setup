import { Link } from "react-router-dom";
import { Container } from "./style";



export function Support (){

    return(
        <Container>
            <section className="presentation">
            

            <div className="text">
                <p className="line">Bem vindo ao nosso suporte, preencha os campos a baixo e deixe sua dúvida, logo logo alguém da nossa equipe ira responder.</p>
            </div>
            </section>
            <form action="submit" className="form">
                <h2 className="tittletwo">SUPORTE</h2>
                <select className="select">
                    <option>Assunto</option>
                    <option>Periféricos</option>
                    <option>Decoração</option>
                    <option>Outros</option>
                </select>

                <textarea placeholder="Escreva aqui sua dúvida ou problema..." className="areatext"></textarea>

                <Link to="/certo"><input type="button" value="enviar" className="btn"/></Link>
            </form>
        </Container>
    )
}