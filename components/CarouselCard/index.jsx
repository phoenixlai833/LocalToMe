import * as React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 46.35%, #000000 93.75%), url(${props => props.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    max-width:500px;
    min-width:300px;
    min-height:25vh;
    padding:15px;
`;

const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    line-height:0px;
    color:white;
    font-size: 20px;
    font-weight: 700;
    justify-self:flex-end;
`
const Time = styled.p`
    color:#F2DE29;
    font-size: 12px;
    font-weight: 600;
`
const DateContainer = styled.div`
    background:white;
    display:flex;
    justify-content:center;
    align-self:flex-end;;
    justify-self:center;
    padding:5px;
    border-radius:15px;
    text-align:center;
    font-weight:1000;
`
export default function CarouselCard({
    event = "Event Name",
    time = "12:00 PM - 3:00 PM",
    src = "http://placekitten.com/500/500",
    month = "OCT",
    day = 20,
    onPress = () => { },
    onDrag = () => { }
}) {
    return (
        <ImageContainer src={src} onClick={onPress} onDrag={onDrag}>
            <DateContainer>
                {month}
                <br></br>
                {day}
            </DateContainer>
            <TextContainer>
                <p>{event}</p>
                <Time>{time}</Time>
            </TextContainer>
        </ImageContainer>
    )
}