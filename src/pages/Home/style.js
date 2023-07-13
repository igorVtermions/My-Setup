import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 10px;
  margin-top: 200px;

  .presentation {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    padding: 30px;
    background-color: gray;
    height: 55%;
    gap: 30px;
    border-radius: 20px;

    .imgCard {
      width: 30%;
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
      color: #ffeeee;

      .tittle {
        font-size: 4rem;
      }

      .line {
        font-size: 1.5rem;
      }
    }
  }

  @media only screen and (min-width: 2560px) {
    .presentation {
      .imgCard {
        width: 18%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .imgCard {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
    margin-top: 280px;
    .presentation {
      height: 80%;
      .text {
        .tittle {
          font-size: 3rem;
          text-align: center;
        }
        .line {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .presentation {
      .text {
        .tittle {
          font-size: 2.5rem;
          text-align: center;
        }
        .line {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media only screen and (max-width: 320px) {
    margin-top: 340px;
  }
`;
