import styled from "styled-components";

export const CardContainer = styled.div`
    width: 90vw;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    background-color: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 1em;
    text-align: left;
    margin-bottom: 1em;
    & > :first-child{
        padding: 0;
        margin: 0;
        color: #6F6F6F;
    }
    #comment{
        font-size: 18px;
        font-weight: 500;
        text-align: justify;
        word-wrap: break-word;
    }
    & > div{
        color: #6F6F6F;
        display: flex;
        gap: 1em;
    }
`

export const Votes = styled.div`
    display: flex;
    gap: 1em;
    height: fit-content;
    align-items: center;
    border: 0.5px solid #E0E0E0;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 100px;

    & > p{
        margin: 0;
        font-weight: 500;
    }
`

export const Comments = styled.div`
    display: flex;
    gap: 1em;
    height: fit-content;
    align-items: center;
    border: 0.5px solid #E0E0E0;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 100px;
    & > p{
        margin: 0;
    }
`