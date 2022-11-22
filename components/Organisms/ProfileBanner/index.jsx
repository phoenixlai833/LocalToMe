import styled from "styled-components"
import { Avatar } from "@mui/material"
import { useRouter } from "next/router"
import AddIcon from '@mui/icons-material/Add'
import { Colours } from "../../../styles/globals"



const MainCont = styled.div`
display:flex;
justify-content: center;
align-items: flex-start;
width: 100vw;
height: 100vh;
`

const WhiteCont = styled.div`
display:flex;
height: 100vh;
width: 1000px;
justify-content: flex-start;
flex-direction: column;
align-items: center;
`

const ProfileBanner = styled.div`
display:flex;
background-color: #D7EED2;
height: 150px;
width: 100vw;
align-items: center;
@media (min-width: 767px) {
    width: 1000px;
}
`

const AvatarCont = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 55px;
position: absolute;
@media (min-width: 767px) {
    width: 380px;
    top: 120px;
    right: 760px;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

}
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
right: 0px;
@media (min-width: 767px) {
right: 224px;
}
`

const EditProfile = styled.div`
display: flex;
width: auto
height: auto
max-height: 60px;
max-weigth: 60px;
border-radius: 50px;
padding: 5px;
left: 40px;
bottom: 75px;
background-color: ${Colours.primary};
color:${Colours.background};
z-index: 1;
position: relative;
&:hover{
    background-color:${Colours.secondary};
}
@media (min-width: 767px) {
  left: -235px;
  bottom: -32px;
  max-height: 70px;
  max-weight: 70px;
}
`

export default function ProfileSection({ src = 'https://placekitten.com/500', name = "Slayerina", email = "email123@my.email.ca", handleClick }) {
    const r = useRouter();
    return <div>
        <SettingIcon src="/cog.svg" onClick={() => r.push('/profile/setting')} />
        <ProfileBanner />
        <AvatarCont>
            <ProfileAvatar
                src={src}
                sx={{ width: 120, height: 120 }} />
            <h3 style={{ margin: 0 }}>{name}</h3>
            <p style={{ margin: -1}}>{email}</p>
            <EditProfile><AddIcon sx={{ width: 25, height: 25 }} onClick={handleClick} /></EditProfile>
        </AvatarCont>
    </div>
}

