import styled from "styled-components";

export const EventHeader = styled.h2`
margin: 20px;
`
const EventBlock = styled.div`
display: grid;
grid-template-columns: 35% 55%;
gap: 10%;
align-items: center;
width: 90%;
margin: 20px;
`
const EventDateAndImage = styled.div`
display: flex;
flex-direction: row;
height: 200px;
`
const EventImage = styled.img`
position: relative;
width: 100%;
height: 200px;
border-radius: 20px;
object-fit: cover;
`
const EventDate = styled.div`
position: absolute;
background-color: white;
width: 42px;
height: 42px;
font-size: 17px;
font-weight: 600;
border-radius: 10px;
text-align: center;
left: 4%;
margin: 3%;
`
const EventInfo = styled.div``

const EventTime = styled.p`
background-color: #FFB800;
border-radius: 20px;
width: 150px;
text-align: center;
`
const EventDesciption = styled.p`
`
const EventTitle = styled.h3`
&:hover {
color: rgb(49, 143, 237);
text-decoration: underline;
}
`

const ReadMore = styled.span`
color: rgb(49, 143, 237);
`

export default function EventPost() {
    return <div>
        <EventBlock>
            <EventDateAndImage>
                <EventImage src='https://placekitten.com/500' />
                <EventDate>Date</EventDate>
            </EventDateAndImage>
            <EventInfo>
                <EventTime>Time</EventTime>
                <EventTitle>Title</EventTitle>
                <EventDesciption>Description
                    <ReadMore>...Read More</ReadMore>
                </EventDesciption>
            </EventInfo>
        </EventBlock>
    </div >
}