import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'back logo button';
    background-color: #EDEDED;
    width: 100vw;
    align-items: center;
    box-sizing: border-box;
    padding: 1em;
    margin-bottom: 1em;
    & > img{
        grid-area: logo;
        margin: 0 auto;
    }
    #right{
        grid-area: button;        
        right: 0;
        justify-self: right;
    }
    #left{
        grid-area: back;
        justify-self: left;

    }
`