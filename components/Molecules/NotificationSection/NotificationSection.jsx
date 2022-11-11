import styled from "styled-components"
import { SettingHeader } from "../../Atoms/AppText/AppText.stories"
import { Switch } from "@mui/material"
import { Colours } from "../../../styles/globals"
import NotificationSwitch from "../../Atoms/NotificationSwitch/NotificationSwitch"

// const NotifcationSwitch = styled.div`
// display:flex;
// flex-direction: row;
// justify-content: space-between;
// align-items: center;
// width:100%;
// max-width:100%;
// height: 50px;
// `
const NotifCont = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
width:100%;
max-width:100%;
height: 50px;
`
export default function NotificationSection() {
    return <>
            <SettingHeader txt='Notifications' txtsize='16px'></SettingHeader>
            <NotificationSwitch txt="Push Notifications" />
            <NotificationSwitch txt="Email Notifications" />
            <NotificationSwitch txt="Community Notifications" />
    </>
}