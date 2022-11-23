import styled from "styled-components";
import { Colours } from '../../../styles/globals';

const CreateBttn = styled.button`
  font-size: 14px;
  background-color: ${(props) => props.inactive || "#108928"};
  border: ${(props) => props.borderstyle || 'none'};
  width: ${(props) => props.width || '100%'};
  min-height: ${(props) => props.height || "3em"};

  color: ${(props) => props.txtcolor || 'white'};
  border-radius: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.active || "#085617"};
  }
  // @media screen and (min-width: 768px) {
  //   width: 23em;
  // }
`;

export default function GeneralGreenBtn({ onClick, text = "Button text", w, h, borderstyle, inactive, active, txtcolor }) {
  return <CreateBttn
    onClick={onClick}
    active={active}
    txtcolor={txtcolor}
    inactive={inactive}
    borderstyle={borderstyle}
    width={w}
    height={h}>
    {text}</CreateBttn>;
}
