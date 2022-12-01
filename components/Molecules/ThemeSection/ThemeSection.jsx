import styled from "styled-components";
import { SettingHeader } from "../../Atoms/AppText/AppText.stories";
import CheckIcon from '@mui/icons-material/Check';

const ThemeBox = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color: ${props => props.themecolor || '#108928'};
height: 70px;
width: 70px;
border-radius: 10px;
`
const ThemeCont = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 100%;
width: 100%;
gap: 10px;
padding-bottom: 20px;
}
`
export default function ThemeSection() {
    return <>
        <SettingHeader txt='Themes' txtsize='16px'></SettingHeader>
        <ThemeCont>
            <ThemeBox><CheckIcon sx={{ color: "white" }}></CheckIcon></ThemeBox>
            <ThemeBox themecolor={"#36393F"}></ThemeBox>
            <ThemeBox themecolor={"#47ACDF"}></ThemeBox>
            <ThemeBox themecolor={"#FFEAB4"}></ThemeBox>
        </ThemeCont>
    </>
}
