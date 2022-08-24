import React, { useEffect} from "react"
import logo from "../../assets/logo.svg"
import text from "../../assets/text.svg"
import { ScreenContainer,LogoImage, SignUpButtonContainer } from "./styled"
import LoginForm from "./LoginForm"
import { Button } from "@mui/material"
import { goToSignUpPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { unprotectedPage } from "../../routes/unprotectedPage"
import { Hr } from "../../styled"




const LoginPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        unprotectedPage(navigate)
    })
    return(
        <ScreenContainer>
            <LogoImage src={logo} />
            <img src={text} alt="" />
            <LoginForm />
            <Hr/>
            <SignUpButtonContainer>
                <Button
                onClick={() => goToSignUpPage(navigate)}
                fullWidth
                variant={"outlined"}
                    sx={{
                        textTransform: 'none',  
                        borderRadius: '100px',
                    }}
                >Crie uma conta</Button>
            </SignUpButtonContainer>
        </ScreenContainer>


    )
}

export default LoginPage

         
