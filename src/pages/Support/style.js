import styled from "styled-components";

export const Container = styled.section`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 0;
  left: 0;

  .presentation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: justify;
    width: 40%;
    gap: 40px;
    font-weight: bolder;
    color: gray;

    .tittletwo {
      color: gray;
      font-size: 3.5rem;
    }
  }

  .tittle {
    font-size: 2.5rem;
  }

  .line {
    font-size: 1.5rem;
  }

  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: gray;
    padding: 20px;
    width: 60%;
    height: 600px;
    margin-top: 5vh;
    margin-bottom: 4vh;
    gap: 20px;
    border-radius: 10px;

    .inputText {
      padding: 10px;
      font-weight: bolder;
      border-radius: 10px;
      border: none;
      width: 60%;
      text-align: center;
    }

    .select {
      padding: 10px;
      font-weight: bolder;
      border-radius: 10px;
      border: none;
      width: 60%;
      text-align: center;
    }

    .areatext {
      padding: 10px;
      width: 70%;
      text-align: center;
      height: 200px;
      border: none;
      border-radius: 10px;
    }

    .btn {
      padding: 10px;
      border: 2px solid white;
      border-radius: 10px;
      font-size: 20px;
      font-weight: bolder;
      background-color: transparent;
      color: white;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
    }

    .btn:hover {
      background-color: #8500b3;
    }
  }

  .btnReset {
    margin-top: 100px;
    margin-left: -10px;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    background: transparent;
    color: #8500b3;
    border: 2px #8500b3 solid;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
  }
  .btnReset:hover {
    background: #8500b3;
    color: white;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 200px;

    .presentation {
      flex-direction: column;
    }
    .text {
      width: 70%;
    }

    .line {
      font-size: 1.2rem;
    }

    .form {
      width: 97%;
    }
  }

  @media only screen and (max-width: 350px) {
    margin-top: 150px;
  }
`;
