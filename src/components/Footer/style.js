import styled from "styled-components";

export const Container = styled.footer`
  z-index: 100;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.37);
    position: relative;
    top: 30px;

  .footer01 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 15px;

    .logo-footer p {
      color: gray;
    }

    .logo-footer img {
      width: 5rem;
    }

    .icons {
      gap: 20px;
      display: flex;
    }

    .icons a {
      color: gray;
    }
  }

  .footer2 {
    color: gray;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.37);
   text-align: center;
    padding: 10px;
    font-weight: bolder;
  }
`;
