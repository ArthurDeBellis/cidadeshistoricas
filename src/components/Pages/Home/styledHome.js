import styled from "styled-components";

export const AreaCarrousel = styled.div`
    .nome-cidade{
        color: aliceblue;
        font-size: 2.5rem;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    
        
    }
    .img-responsive{
        padding: 1rem 1rem;
        width: 80%;
        height:80vh;
    }


    @media (max-width: 800px){
        .img-responsive{
            height:60vh;
        }
    }
`;