import styled from "styled-components"
import { Avatar } from "@mui/material"
import { useRouter } from "next/router"
import AddIcon from '@mui/icons-material/Add'
import { Colours } from "../../../styles/globals"

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

const EditProfile = styled.div`
display: flex;
border-radius: 50px;
padding: 5px;
left: 40px;
bottom: 90px;
background-color: ${Colours.primary};
color:${Colours.background};
z-index:999;
position: relative;
&:hover{
    background-color:${Colours.secondary};
}
`

export default function ProfileSection({ src = 'https://placekitten.com/500', name = "Slayerina", email = "email123@my.email.ca" }) {
    const r = useRouter();
    return <div>
        <SettingIcon src="/cog.svg" onClick={() => r.push('/profile/setting')} />
        <ProfileBanner />
        <AvatarCont>
            <ProfileAvatar
                src={src}
                sx={{ width: 120, height: 120 }} />
            <h3 style={{ margin: 0 }}>{name}</h3>
            <p style={{ margin: 5 }}>{email}</p>
            <EditProfile><AddIcon sx={{ width: 25, height: 25 }} /></EditProfile>
        </AvatarCont>
    </div>
}

