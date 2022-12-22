import styled from "styled-components";

export const Container = styled.section`
    color: blue;
    padding-top: 13vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .hello{
        width: 50rem;
    }

    .presentation{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .text{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: justify;
        width: 40%;
        gap: 10px;
        font-weight: bolder;
        color: gray;
    }

    .tittle{
        font-size: 2.5rem;
    }

    .line{
        font-size: 1.5rem;
    }

`