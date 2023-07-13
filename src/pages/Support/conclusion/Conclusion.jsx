import { Container } from "./style";
import completed from "../../../assets/completed.gif";
export function Conclusion() {
  return (
    <Container>
      <div className="content">
        <img src={completed} alt="completo" className="img" />
        <h2 className="tittle">Tudo certo ✔️</h2>
        <p className="text">
          Tudo certo com a sua mensagem, logo logo você receber um email com a
          resposta. <br />A resposta pode demorar: 24 horas, caso tenha mais
          alguma dúvida ou esqueceu de falar algo, pode mandar quantas mensagens
          quiser.
        </p>
      </div>
    </Container>
  );
}
