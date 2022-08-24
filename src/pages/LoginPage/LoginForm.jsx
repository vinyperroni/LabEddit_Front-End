import React, {useState} from "react"
import { InputsContainer, LoginFormContainer } from "./styled"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import { login } from "../../services/user"
import { primaryColor, secundaryColor } from "../../constants/colors"
import {GradButton} from "../../styled"

const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate, setIsLoading)
    }

    return (
        <LoginFormContainer>
            <form onSubmit={onSubmitForm}>
                <InputsContainer>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                        inputProps={{
                            maxLength: 30,
                            minLength: 8,
                        }}
                    />
                </InputsContainer>
                <Button
                    fullWidth
                    type={"submit"}
                    variant={"contained"}
                    sx={{
                        textTransform: 'none',  
                        borderRadius: '100px',
                        backgroundImage: `linear-gradient(to right, ${secundaryColor} 0%, ${primaryColor}  51%, ${secundaryColor}  100%)`,
                        transition: '0.5s',
                        backgroundSize: '200% auto',
                        '&:hover': {
                            backgroundPosition: 'right center',
                            textDecoration: 'none',
    
                        }
                    }}
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Login</>}
                </Button>
            </form>
        </LoginFormContainer>
    )
}

export default LoginForm