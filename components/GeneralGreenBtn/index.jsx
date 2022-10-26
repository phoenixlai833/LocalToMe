import styled from "styled-components";

const CreateBttn = styled.div`
background-color: ${props => props.inactive || '#108928'};
width: 100%;
height: 50px;
color: white;
border-radius: 10px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
&:hover {
background-color: ${props => props.active || '#085617'};
}
`

export default function GeneralGreenBtn(
    {
        text = "button text",
    }
) {

    return (
        <div>
            <CreateBttn>{text}</CreateBttn>
        </div>
    )
}