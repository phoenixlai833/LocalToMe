import styled from "styled-components"
import { Avatar } from "@mui/material"

const ProfileBanner = styled.div`
display:flex;
background-color: #D7EED2;
height: 150px;
width: 100vw;
position: relative;
z-index: -1;
`

const AvatarCont = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 55px;
z-index: 999;
position: absolute;
`

const ProfileAvatar = styled(Avatar)`
border: 5px solid white;
`

const SettingIcon = styled.img`
width: 50px;
height: 50px;
padding: 10px;
margin: 10px;
position: absolute;
right: 0;
`

export default function ProfileSection() {
    return <div>
        <SettingIcon src="/cog.svg" />
        <ProfileBanner />
        <AvatarCont>
            <ProfileAvatar
                src='https://placekitten.com/500'
                sx={{ width: 100, height: 100 }} />
            <h3 style={{ margin: 0 }}>Slayerina</h3>
            <p style={{ margin: 5 }}>email123@my.email.ca</p>
        </AvatarCont>
    </div>
}