import styled from "styled-components";

export const Container = styled.section`
    padding-top: 15vh;
    display: flex;
    justify-content: center;

    .cert{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;


    .img{
        width: 40%;
    }

    .content{
        margin-left: 20px;
        width: 99%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .tittle{
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 30px;
    }
    .text{
        
        font-size: 1.5rem;
        font-weight: bolder;
        text-align: justify;
    }

    @media only screen and (max-width: 1024px) {
        padding-top: 17vh;
        .img{
            display: none;
        }
        
        .content{
            margin-bottom: 20vh;
            margin-left: 0;
        }
    }
    }
`