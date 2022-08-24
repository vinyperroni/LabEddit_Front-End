export const goToFeedPage = (navigate) => {
    localStorage.removeItem("post")
    navigate("/1")
}

export const goToLoginPage = (navigate) => {
    localStorage.removeItem("post")
    navigate("/login")
}

export const goToSignUpPage = (navigate) => {
    localStorage.removeItem("post")
    navigate("/cadastro")
}

export const goToPostPage = (navigate, id) => {
    localStorage.removeItem("post")
    navigate(`/post/${id}`)

}
