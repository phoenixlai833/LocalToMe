import styled from "styled-components";

const CreateBttn = styled.button`
  font-size: 14px;
  background-color: ${(props) => props.inactive || "#108928"};
  border: none;
  width: 100%;
  height: 3em;
  color: white;
  border-radius: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.active || "#085617"};
  }
`;

export default function GeneralGreenBtn({ text = "Button text" }) {
  return <CreateBttn>{text}</CreateBttn>;
}
