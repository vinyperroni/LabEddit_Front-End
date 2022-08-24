import styled from 'styled-components'
import FormControlLabel from '@mui/material/FormControlLabel'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  & > h1{
    text-align: left;
    margin: 18px;
    margin-bottom: 10vh;
    color: #373737;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 400px;
  align-items: center;
  margin-bottom: 20px;  
`

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 400px;
  align-items: center;
  margin-bottom: 20px;

`

export const CheckBoxContainer = styled.div`
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: left;
  align-items: center;
`