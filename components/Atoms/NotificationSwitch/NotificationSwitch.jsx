import styled from "styled-components"
import { Switch } from "@mui/material"
// import { createMuiTheme } from '@material-ui/core/styles';

const Notif = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width:100%;
max-width:100%;
height: 50px;
`

// const theme = createMuiTheme({
//     overrides: {
//         MuiSwitch: { // Name of the component ⚛️ / style sheet
//             root: { // Name of the rule
//                 color: 'white', // Some CSS
//             },
//         },
//     },
// });

export default function NotificationSwitch({ txt = 'notfication' }) {

    return <>
        <Notif>
            {txt} <Switch sx={{ color: '#109125' }} />
        </Notif>
    </>
}