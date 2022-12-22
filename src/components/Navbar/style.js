import styled from "styled-components";

export const Nav = styled.header`
    display: flex;
	align-items: center;
	justify-content: space-between;
    position: fixed;
	height: 7rem;
	padding: 0 2rem;
    width: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.37); 
    

    .img img{
        width: 90px;
    }

    .category{
        display: flex;
        align-items: center;
        gap: 20px;
        list-style-type: none;
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

    button {
        padding: 10px;
        font-weight: bold;
        font-size: 20px;
        background-color: transparent;
        color: gray;
        
       
    }
    button:hover{
        color: #8500b3;
        border-color: #8500b3;
        
    }

    .btn{
        position: fixed;
        right: 5px;
        bottom: 35px;
        border-radius: 10px;
        border: 2px solid gray;
        cursor: pointer;
        transition: all .3s ease-in-out;

    }

 

    .nav-btn {
	padding: 5px;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
	visibility: hidden;
	opacity: 0;
	font-size: 1.8rem;
}

@media only screen and (max-width: 1024px) {
	.nav-btn {
		visibility: visible;
		opacity: 1;
	}

	.category {
		position: fixed;
		bottom: -235px;
		left: 0;
		height: 350px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		transition: 1s;
		transform: translateY(-100vh);
        background-color: #8500b3;
    
	}

	.responsive_nav {
		transform: none;
	}

	 .nav-close-btn {
		position: absolute;
		top: 2rem;
		right: 2rem;
        color: white;
	}

    .option{
        color: white;
        font-size: 1.5rem;
    }

    .fist{
        margin-top: 100px;
    }

    .btn{
        color: white;
        position: relative;
        top: -130px;
        right: -1px;
        border-radius: 0;
        border: none;
        font-size: 2.5rem;
    }

    .login{
        border-bottom: 2px solid white;
    }
}


`