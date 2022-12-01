import Fab from '@mui/material/Fab'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'
import { Colours, Theme } from "../../../styles/globals";
import { ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';


const FloatButton = styled(Fab)`
position:fixed;
display:flex;
bottom: 15vh;
left:90vw;
background-color:${Colours.primary};
color:${Colours.background};
&:hover{
    // background-color:${Colours.secondary};
}
@media (max-width: 767px) {
    left:80vw;
}
`
export default function FloatingActionButton({


}) {
    const r = useRouter();
    const onPress = () => { r.push('/community/postcreate') }
    return (
        <ThemeProvider theme={Theme}>
            <FloatButton aria-label="add" size="large" onClick={onPress} color="primary" sx={{bottom:'15vh', left:"90vw"}}>
                <AddIcon />
            </FloatButton>
        </ThemeProvider>
    )
}