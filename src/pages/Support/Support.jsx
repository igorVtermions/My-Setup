import { Link } from "react-router-dom";
import { Container } from "./style";

export function Support(props) {

  function toType(event){
    props.altered(event.target.value)
  }

  return (
    <Container>
      <section className="presentation">
        <div className="text">
          <h2 className="tittletwo">SUPORTE</h2>
          <p className="line">
            Bem vindo ao nosso suporte, preencha os campos a baixo e deixe sua
            dúvida, logo logo alguém da nossa equipe ira responder.
          </p>
        </div>
      </section>
      <form action="submit" className="form">
        <input
        onChange={toType}
          type="text"
          name="name"
          placeholder="Insira o nome..."
          className="inputText"
          required={true}
        />
        <input
        onChange={toType}
          type="email"
          name="email"
          placeholder="Insira o seu email..."
          className="inputText"
          required={true}
        />
        <select onChange={toType} className="select" required={true}>
          <option disabled selected>Escolha uma opção</option>
          <option>Periféricos</option>
          <option>Decoração</option>
          <option>Outros</option>
        </select>

        <textarea
          placeholder="Escreva aqui sua dúvida ou problema..."
          className="areatext"
        ></textarea>

        <button className="btn">
          Enviar
        </button>
      </form>
    </Container>
  );
}
