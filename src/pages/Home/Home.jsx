import { Container } from "./style";
import hello from "../../assets/Hello.svg";
import login from "../../assets/login.svg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
      <section className="presentation">
        <img src={hello} alt="hello" className="imgCard" />

        <div className="text">
          <h2 className="tittle">Seja Bem Vindo!!</h2>
          <p className="line">
            Nós da My Setup temos a missão de ajudar você a montar seu setup,
            desde decoração, a melhores periféricos, que vão encaixar no seu
            estilo e no seu bolso. <br />
            Fique a vontade para checar nossas recomendações de preços e
            produtos. Caso tenha dúvida sobre qual produto vale mais apena ou
            não tem ideia do que comprar entre em contato com nós no{" "}
            <Link to="/suporte">Suporte</Link>.
          </p>
        </div>
      </section>
      <section className="presentation">
        <div className="text">
          <h2 className="tittle">Faça o login!!</h2>
          <p className="line">
            Faça login ou registre-se para aproveitar ao máximo sua experiência
            em nosso site. Ao fazer login, você terá acesso a recursos
            exclusivos e poderá aproveitar ao máximo tudo o que oferecemos.{" "}
            <br />
            Ao se registrar, você se juntará a uma comunidade de entusiastas
            como você, compartilhando interesses e descobrindo novidades
            emocionantes. Nossa plataforma é projetada para ajudar você a
            encontrar exatamente o que procura, clique em{" "}
            <Link to="#">Entrar</Link>.
          </p>
        </div>

        <img src={login} alt="login" className="imgCard" />
      </section>
    </Container>
  );
}
