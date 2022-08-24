import { goToFeedPage } from './coordinator'

export const unprotectedPage = (navigate) => {
    const token = localStorage.getItem('token')
    if (token){
      goToFeedPage(navigate)
    }
}
