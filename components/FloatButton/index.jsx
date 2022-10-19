import Fab from '@mui/material/Fab'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'
import { Colours, Theme } from '../../styles/globals'
import { ThemeProvider } from '@mui/material'
const FloatButton = styled(Fab)`
position:fixed;
display:flex;
background-color:${Colours.primary};
color:${Colours.background};
&:hover{
    background-color:${Colours.secondary};
}
`
export default function FloatingActionButton({
    onPress = () => { }

}) {
    return (
        // <ThemeProvider theme={Theme}>
            <FloatButton aria-label="add" size="large" onClick={onPress}>
                <AddIcon />
            </FloatButton>
        // </ThemeProvider>
    )
}