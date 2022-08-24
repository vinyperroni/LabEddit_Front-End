import { useState } from "react";
import { NewPostContainer} from "./styled";
import { TextField, Button } from "@mui/material";
import { primaryColor, secundaryColor } from "../../constants/colors"
import CircularProgress from '@mui/material/CircularProgress'
import useForm from '../../hooks/useForm'
import { createPost } from "../../services/post";
import { useNavigate } from "react-router-dom";


const NewPost = (props) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [form, onChange, clear] = useForm({ title: "", body: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear, setIsLoading, props.getPosts, navigate)
    }

    return (
        <NewPostContainer onSubmit={onSubmitForm}>
        <TextField
                name="title"
                id="outlined-multiline-static"
                placeholder="Titulo"
                value={form.title} 
                onChange={onChange}               
                sx={{
                    background: "#EDEDED",
                    boxSizing: "border-box",
                    borderRadius: "20px",
                    "fieldset":{
                        borderRadius: "20px",
                        border: "none",
                    }
                }}
            />

            <TextField
                name="body"
                id="outlined-multiline-static"
                placeholder="Digite seu post aqui..."
                multiline
                rows={6}
                value={form.body}
                onChange={onChange}                
                sx={{
                    background: "#EDEDED",
                    boxSizing: "border-box",
                    borderRadius: "20px",
                    "fieldset":{
                        borderRadius: "20px",
                        border: "none",
                    }
                }}
            />
            <Button                    
                variant={"contained"}
                type={"submit"}        
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
                {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Postar</>}
            </Button>                
        </NewPostContainer>

    )
}

export default NewPost