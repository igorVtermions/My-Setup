import emailjs from "@emailjs/browser";
import { Container } from "./style";
import { Conclusion } from "./conclusion/Conclusion";
import { useState } from "react";

export function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMenssage] = useState("");
  const [option, setOption] = useState("Escolha uma opção");
  const [formSubmitted, setFormSubmitted] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      message === "" ||
      option === "Escolha uma opção"
    ) {
      alert("Preencha todos os campos");
      return;
    }
    const templateParams = {
      from_name: name,
      about: option,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_w3qtvpp",
        "template_a8p9u0k",
        templateParams,
        "PIeKms1gUu-wOPqZp"
      )
      .then(() => {
        setFormSubmitted(true);
      })
      .catch((err) => {
        console.log("ERRO: ", err);
      });
  }

  function resetForm() {
    setName("");
    setEmail("");
    setMenssage("");
    setOption("Escolha uma opção");
    setFormSubmitted(false);
  }

  if (formSubmitted) {
    return (
      <Container>
        <Conclusion />
        <button onClick={resetForm} className="btnReset">
          Enviar outro formulário
        </button>
      </Container>
    );
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
      <form action="submit" className="form" onSubmit={sendEmail}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Insira o nome..."
          className="inputText"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Insira o seu email..."
          className="inputText"
        />
        <select className="select" onChange={(e) => setOption(e.target.value)}>
          <option disabled selected>
            Escolha uma opção
          </option>
          <option>Periféricos</option>
          <option>Decoração</option>
          <option>Outros</option>
        </select>

        <textarea
          onChange={(e) => setMenssage(e.target.value)}
          type="text"
          placeholder="Escreva aqui sua dúvida ou problema..."
          className="areatext"
        ></textarea>

        <input type="submit" className="btn" value="Enviar" />
      </form>
    </Container>
  );
}
