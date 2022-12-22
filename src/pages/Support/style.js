import styled from "styled-components";

export const Container = styled.section`
    padding-top: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    .presentation{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .text{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: justify;
        width: 40%;
        gap: 40px;
        font-weight: bolder;
        color: gray;
    }

    .tittle{
        font-size: 2.5rem;
    }

    .line{
        font-size: 1.5rem;
    }

    .form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: gray;
        padding: 20px;
        width: 60%;
        height: 400px;
        margin-top: 5vh;
        margin-bottom: 4vh;
        gap: 20px;
        border-radius: 10px;

        .tittletwo{
            color: white;
            font-size: 2.5rem;
        }

        .select{
            padding: 10px;
            font-weight: bolder;
            border-radius: 10px;
           border: none;
           width: 60%;
           text-align: center;
        }

        .areatext{
            padding: 10px;
            width: 70%;
            text-align: center;
            height: 200px;
            border: none;
            border-radius: 10px;
        }
        
        .btn{
            padding: 10px;
            border: 2px solid white;
            border-radius: 10px;
            font-size: 20px;
            font-weight: bolder;
            background-color: transparent;
            color: white;
            cursor: pointer;
            transition: all .4s ease-in-out;
        }

        .btn:hover{
            background-color: #8500b3;
        }

    }

    @media only screen and (max-width: 1024px) {
        padding-top: 19vh;

        .presentation{
            flex-direction: column;
        }
        .text{
            width: 70%;
        }

    .line{
        font-size: 1.2rem;
    }

    .form{
        width: 97%;
    }
    }
`