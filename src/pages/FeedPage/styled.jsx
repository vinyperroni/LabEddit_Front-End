import styled from "styled-components"

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;   
    & hr{
    }


`
export const NewPostContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 400px;
    gap: 1em;    
`

export const PostsContainer = styled.div`
    width: 90vw;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-bottom: 1em;
    align-items: center;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    font-weight: 500;
`