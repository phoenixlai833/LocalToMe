import styled from "styled-components"
import { Switch } from "@mui/material"

const Notif = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width:100%;
max-width:100%;
height: 50px;
`

export default function NotificationSwitch({txt='notfication'}) {
    return <>
        <Notif>
            {txt} <Switch />
        </Notif>
    </>
}