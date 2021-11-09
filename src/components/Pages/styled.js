import styled from "styled-components";

export const AreaSite = styled.div`
    text-align: center;
    min-height: 80vh;
    margin: 2rem 3rem;
    background-color: #f7f2ff;
    position: relative;
    box-sizing: border-box;

    h1{
        padding: 1rem 1rem;    
        font-family: 'Open Sans', sans-serif;   
        font-style: normal;
        font-weight: 100%;
        font-size: 80px;
        font-size: 4rem;
        -webkit-text-fill-color: #EBE44B;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }

    h2{
        color: #EBE44B;
        font-family: Open Sans;
        font-weight: 200;
        font-weight: bold;
        font-size: 2rem;
        padding-left: 180px; 
        border-bottom: 1px solid white;
        margin-bottom: 2rem;
        padding: 1rem;
        margin: 0.5rem;
        height: var(--header-height);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black; 
        border-radius: 0.25rem;
    }
    .tabela{
        padding: 1rem 1rem;
        display: flex;
        align-items: center;
    }
        img{
            object-fit: cover;
            height: fit-content;
            width: 400px;
        }

        p{
	        margin: 1rem;
            padding: 1rem 1rem;
            color: #000;
            font-family: Open Sans;
            text-align: justify;
        }
        ul{
            display: block;
            text-align: justify;
            p{
                margin:0;
                padding: 1rem 1rem;
            
            }
            li{
                padding: .05rem 1rem;
            }
        }

        @media (max-width: 800px){
            .tabela{
                display:block;
            }
                img{
                   width: 100%; 
                }
                p{
	                margin: 0;
                    padding: 0;
                }
        }
`;
