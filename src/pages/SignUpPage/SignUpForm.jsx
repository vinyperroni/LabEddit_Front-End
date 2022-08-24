import React, {useState} from "react"
import { InputsContainer, SignUpFormContainer } from "./styled"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import FormControlLabel from '@mui/material/FormControlLabel'
import { CheckBoxContainer } from "./styled"
import Checkbox from '@mui/material/Checkbox'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import { signUp } from "../../services/user"
import { primaryColor, secundaryColor } from "../../constants/colors"


const SignUpForm = () => {
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate, setIsLoading)
    }

    return (
        <SignUpFormContainer>
            <form onSubmit={onSubmitForm}>
                <InputsContainer>
                    <TextField
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label={"Nome de usuário"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"text"}
                    />
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
                        inputProps={{
                            maxLength: 30,
                            minLength: 8,
                        }}
                        required
                        type={"password"}
                    />
                    <CheckBoxContainer>
                        <Checkbox required id="checkbox1"/>
                        <label htmlFor="checkbox1">Eu concordo com o Contrato de usuário e com a Política de Privacidade do LabEddit</label>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <Checkbox id="checkbox2"/>
                        <label htmlFor="checkbox2">Eu concordo em receber emails sobre coisas legais do Labeddit</label>
                    </CheckBoxContainer>

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
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Cadastrar</>}
                </Button>
            </form>
        </SignUpFormContainer>
    )
}

export default SignUpForm