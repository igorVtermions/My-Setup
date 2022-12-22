import {Container} from "./style";
import hello from "../../assets/Hello.svg"

export function Home(){


    return (
        <Container>
            <section className="presentation">
            <img src={hello} alt="hello" className="hello"/>

            <div className="text">
                <h2 className="tittle">Seja Bem Vindo!!</h2>
                <p className="line">Nós da My Setup temos a missão de ajudar você a montar seu setup, desde decoração, a melhores periféricos, que vão encaixar no seu estilo e no seu bolso. <br/>
                Caso tenha dúvida sobre qual produto vale mais apena ou não tem ideia do que comprar entre em contato com nós no <a href="#">Suporte</a>.
                </p>
            </div>
            </section>

        </Container>
    )
}