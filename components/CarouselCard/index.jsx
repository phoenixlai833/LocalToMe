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
    width: 300px;
    // min-width: 250px;
    height: 250px;
    padding: 15px 15px 20px;
`;

const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    line-height: 1.5;
    color:white;
    font-size: 18px;
    font-weight: 700;
    justify-self: flex-end;
    align-items: flex-start;
    z-index: 1;
    position: relative;
    padding: 0px 0px 0px;
    white-space: pre-wrap;  

`
const Time = styled.p`
    color:#F2DE29;
    font-size: 12px;
    font-weight: 600;
    line-height: 0;
    margin: 10px 0px 0px;
`
const DateContainer = styled.div`
    background:white;
    display:flex;
    justify-content:center;
    align-self:flex-end;;
    justify-self:center;
    padding: 6px 7px 8px;
    border-radius:15px;
    text-align:center;
    font-weight:1000;
    font-size: 14px;
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
                <p style={{marginBottom:0}}>{event}</p>
                <Time>{time}</Time>
            </TextContainer>
        </ImageContainer> 
    )
}