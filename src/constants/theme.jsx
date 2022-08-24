import { createTheme } from '@mui/material'
import {primaryColor, neutralColor} from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    text: {
        primary: neutralColor
    }
  }
})

export default theme 