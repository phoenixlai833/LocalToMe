import styled from "styled-components"
import { SettingHeader } from "../../Atoms/AppText/AppText.stories"
import NotificationSwitch from "../../Atoms/NotificationSwitch/NotificationSwitch"

const PrivCont = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
width:100%;
max-width:100%;
margin-top: 15px;
`
export default function PrivacySection() {
    return <>
    <PrivCont>
        <SettingHeader txt='Privacy' txtsize='16px'></SettingHeader>
        <NotificationSwitch txt="Save Data"/>
        <NotificationSwitch txt="Email Notifications"/>
    </PrivCont>
    </>
}