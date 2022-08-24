import React, { useEffect } from "react"
import Header from "../../components/Header/Header"
import { ScreenContainer } from "./styled"
import SignUpForm from "./SignUpForm"
import { useNavigate } from "react-router-dom"
import { unprotectedPage } from "../../routes/unprotectedPage"


const SignUpPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        unprotectedPage(navigate)
    })
    return(
        <ScreenContainer>
            <Header/>
            <h1>
                Olá, seja bem vinde ao LabEddit
            </h1>
            <SignUpForm/>

        </ScreenContainer>        
    )
}

export default SignUpPage