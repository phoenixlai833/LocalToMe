import Fab from '@mui/material/Fab'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'
import { Colours, Theme } from "../../../styles/globals";
import { ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';


const FloatButton = styled(Fab)`
background-color:${Colours.primary};
color:${Colours.background};
&:hover{
    // background-color:${Colours.secondary};
}
`
const FloatDiv = styled.div`
position:fixed;
bottom:15vh;
left:90vw;
z-index:100;
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
            <FloatDiv>
                <FloatButton aria-label="add" size="large" onClick={onPress} color="primary">
                    <AddIcon />
                </FloatButton>
            </FloatDiv>
        </ThemeProvider>
    )
}