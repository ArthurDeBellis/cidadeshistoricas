import styled from 'styled-components';

export const AreaHeader = styled.div`
    background-color: rgb(57,64,75);
    box-sizing:border-box
    height: 70px;
    padding: 1rem;
    border-box: 
    color: darkgray;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }

        .logo{
            flex: 1;
            padding: .5rem 1rem;
            font-size: large;
            
            a{
                text-decoration: none;
                color: darkgray;

                &:hover{
                    color: aquablue;
                }
            }
        }

        ul{
            margin:0;
            display: none;
            position: absolute;
            width: 100%;
            right: 0px;
            background: rgb(57,64,75);
            height: calc(100vh-70px);
            z-index:1000;
        }
            li{
                list-style: none;
                margin-left: 20px;
                a{
                    text-decoration: none;
                    color: #fff;

                    &:hover{
                        color: aquablue;
                    }
                }
            }     
        
        button{
            display: flex;
            padding: .5rem 1rem;
            font-size: 1rem;
            border: none;
            background: none;
            cursor: pointer;
            gap: .5rem;
            color: darkgray;
        }

        #hamburger{
            border-top: 2px solid;
            width: 20px;
        }
        #hamburger::after, #hamburger::before{
            content: '';
            display: block;
            width: 20px;
            height: 2px;
            margin-top: 5px;
            background: currentColor;
            transition: .3s;
            position: relative;
        }
        nav.active #hamburger{
            border-top-color: transparent;
        }
        nav.active #hamburger::before{
            transform: rotate(45deg);
        }
        nav.active #hamburger::after{
            transform: rotate(-45deg);
            top: -7px;
        }

        nav.active ul{
            display:block;
            li{
                padding: 10px 0;
                margin: 0 10px;            
            }
    
        }
`;