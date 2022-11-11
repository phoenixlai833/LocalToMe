import styled from "styled-components";
import { Colours } from '../../../styles/globals';

const CreateBttn = styled.button`
  font-size: 14px;
  background-color: ${(props) => props.inactive || "#108928"};
  border: ${(props) => props.borderstyle || 'none'};
  width: ${(props) => props.width || '100%' };
  height: 3em;
  color: ${(props) => props.txtcolor || 'white' };
  border-radius: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.active || "#085617"};
  }
`;

export default function GeneralGreenBtn({ text = "Button text", w, borderstyle, inactive, active, txtcolor }) {
  return <CreateBttn 
  active={active}
  txtcolor={txtcolor} 
  inactive={inactive}
   borderstyle={borderstyle} 
   width={w}>
    {text}</CreateBttn>;
}
