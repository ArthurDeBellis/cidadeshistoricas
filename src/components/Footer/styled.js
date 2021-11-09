import styled from 'styled-components';

export const AreaFooter = styled.div`
    text-align: center;
    padding-bottom: 20px;
    background: black;
    position: relative;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;

    .social{
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 1000px;
        margin: 0 auto;
    }

        p{
            color: cornsilk;
            font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            a{
                color: cornsilk;
                font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                text-decoration: none;
    
                &:hover{
                    color: aliceblue;
                }
            }
        }
        a{
            color: cornsilk;
            font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            text-decoration: none;
        }

        
`;