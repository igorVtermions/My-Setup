import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  .img {
    width: 20%;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .tittle {
      margin-top: 40px;
      font-size: 50px;
      margin-left: 50px;
      margin-bottom: 20px;
    }
    .text {
      font-size: 25px;
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    .content {
      .img {
        width: 70%;
      }
      .text {
        width: 80%;
      }
    }
  }
  @media(max-width: 425px){
    .content{
        .tittle{
        margin-left: 20px;
    }
    }
  }
  @media (max-width: 320px) {
    .content {
      .text {
        font-size: 23px;
      }
      .tittle {
        font-size: 40px;
      }
    }
  }
`;
