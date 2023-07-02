import styled from "styled-components";

export const Container = styled.section`
  padding-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .presentation {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    gap: 20px;

    .hello {
      width: 40%;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: justify;
      width: 90%;
      gap: 40px;
      font-weight: bolder;
      color: gray;

      .tittle {
        font-size: 2rem;
      }

      .line {
        font-size: 1rem;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding-top: 10vh;

    .presentation {
      flex-direction: column;
    }
    .hello {
      width: 100%;
    }
    .text {
      width: 90%;
    }

    .tittle {
      font-size: 2rem;
    }

    .line {
      font-size: 1rem;
    }
  }
`;
