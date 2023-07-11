import emailjs from "@emailjs/browser";
import { Container } from "./style";
import { useState } from "react";

export function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMenssage] = useState("");
  const [option, setOption] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "" || option === "") {
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
        "template_6ammv4c",
        templateParams,
        "PIeKms1gUu-wOPqZp"
      )
      .then((res) => {
        console.log("EMAIL ENVIADO", res.status, res.text);
        setName('')
        setEmail('')
        setMenssage('')
        setOption('')
      }, (err) =>{
        console.log("ERRO: ", err)
      });
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

        <input
          onChange={(e) => setMenssage(e.target.value)}
          type="text"
          placeholder="Escreva aqui sua dúvida ou problema..."
          className="areatext"
        />

        <button className="btn">Enviar</button>
      </form>
    </Container>
  );
}
