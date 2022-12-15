import styled from "styled-components";

export const Nav = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: lightgray;
    backdrop-filter: blur(3px) saturate(180%);
    -webkit-backdrop-filter: blur(3px) saturate(180%);
    height:  7rem;

    .img img{
        width: 23%;
    }

    .item{
        display: flex;
        gap: 20px;
        list-style-type: none;
        margin-right: 25rem;
    }

   .option{
        font-weight: bolder;
        text-decoration: none;
        color: gray;
        font-size: 20px;
        transition: all .3s ease-in-out;
    }

    .option:hover{
        color: #8500b3;
    }

    button{
        padding: 10px;
        font-weight: bold;
        font-size: 20px;
        background-color: transparent;
        color: gray;
        border-radius: 10px;
        border: 2px solid gray;
        cursor: pointer;
        transition: all .3s ease-in-out;
       
    }
    button:hover{
        color: #8500b3;
        border-color: #8500b3;
        
    }


`