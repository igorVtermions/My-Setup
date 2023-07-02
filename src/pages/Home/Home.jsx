import {Container} from "./style";
import hello from "../../assets/Hello.svg"
import { Link } from "react-router-dom";

export function Home(){


    return (
        <Container>
            <section className="presentation">
            <img src={hello} alt="hello" className="hello"/>

            <div className="text">
                <h2 className="tittle">Seja Bem Vindo!!</h2>
                <p className="line">Nós da My Setup temos a missão de ajudar você a montar seu setup, desde decoração, a melhores periféricos, que vão encaixar no seu estilo e no seu bolso. <br/>
                Fique a vontade para checar nossas recomendações de preços e produtos.
                Caso tenha dúvida sobre qual produto vale mais apena ou não tem ideia do que comprar entre em contato com nós no <Link to="/suporte">Suporte</Link>.
                </p>
            </div>
            </section>
            <div className="text">
                <h2 className="tittle">Seja Bem Vindo!!</h2>
                <p className="line">Nós da My Setup temos a missão de ajudar você a montar seu setup, desde decoração, a melhores periféricos, que vão encaixar no seu estilo e no seu bolso. <br/>
                Fique a vontade para checar nossas recomendações de preços e produtos.
                Caso tenha dúvida sobre qual produto vale mais apena ou não tem ideia do que comprar entre em contato com nós no <Link to="/suporte">Suporte</Link>.
                </p>
            </div>
        </Container>
    )
}