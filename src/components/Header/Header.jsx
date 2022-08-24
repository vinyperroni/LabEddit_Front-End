import logo from "../../assets/logo-header.svg"
import { HeaderContainer } from "./styled"
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator"
import { Button, IconButton } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { NavigateBefore } from "@mui/icons-material";


const Header = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [token, setToken] = useState()

    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])

    

    const logOut = () => {
        localStorage.removeItem("token")
        goToLoginPage(navigate)
    }

    return(
        <HeaderContainer>
            {params && params.id ? <IconButton id="left" onClick={() => navigate(-1)}> <NavigateBefore/> </IconButton> : null}            
            <img src={logo} alt="logo" onClick={() => goToFeedPage(navigate)}/>
            {(token && token.length > 0) 
            ?
            <Button id="right"
            onClick={logOut}
            >Sair</Button>
            :
            <Button id="right"
            onClick={() => {goToLoginPage(navigate)}}
            >
            Entrar
            </Button>
        }
        </HeaderContainer>
    )
}

export default Header