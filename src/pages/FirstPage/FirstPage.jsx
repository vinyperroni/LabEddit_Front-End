import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const FirstPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/1")
        }else{
            navigate("/login")
        }
        })

}

export default FirstPage