import styled from "styled-components"
import { colors, Switch } from "@mui/material"
import { useState } from "react"
import { Colours } from "../../../styles/globals"
import withStyles from "@mui/material"

const Notif = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width:100%;
max-width:100%;
height: 50px;
`

const switchStyle = {
    borderRadius: 10,
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: `${Colours.background}`,
      transform: `translateX(20px)`,
      padding: 1
    },
    "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
      backgroundColor: `${Colours.primary}`,
      opacity: 100,
    }
    
  }
  

export default function NotificationSwitch({txt='notfication'}) {
    const [state, setState] = useState(true)

    
  const handleChange = (event) => {
    setState(state ? false : event.target.checked)
  }

    return <>
        <Notif>
            {txt} <Switch
                  checked={state}
                  onChange={handleChange}
                  sx={switchStyle}
                />
        </Notif>
    </>
}