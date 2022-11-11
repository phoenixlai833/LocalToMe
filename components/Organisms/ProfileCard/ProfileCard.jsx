import styled from "styled-components";
import { Colours } from "../../../styles/globals";

const ProfileBlock = styled.div`
  display: grid;
  grid-template-columns: 35% 55%;
  gap: 10%;
  align-items: center;
  width: 95%;
  margin: 30px;
`


const Image = styled.img`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  object-fit: cover;
`

const InfoCont = styled.div`
height: 200px;
`

const TopInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgcolor|| '#FFB800' };
  color: ${props => props.txtcolor|| '#535353' };
  border-radius: 10px;
  width: 150px;
  height: 25px;
`

const Title = styled.a`
  :hover {
    color: rgb(49, 143, 237);
  text-decoration: underline;
}
`
const Readmore = styled.span`
  color: ${Colours.primary}
`
const BodyInfo = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 100%
`

export default function ProfileCard() {

    return <div>
    <ProfileBlock>
            <Image src="https://placekitten.com/500/500"/>
        <InfoCont>
            <TopInfo bgcolor='none'>Lorem Ipsum</TopInfo>
            <Title>
                <h3>Lorem Ipsum</h3>
            </Title>
            <BodyInfo>
            <p>Minions ipsum ti aamoo! Ti aamoo! Poopayee me want bananaaa! Uuuhhh tank yuuu!
                 Ti aamoo! Me want bananaaa! potatoooo pepete wiiiii poopayee uuuhhh 
                 baboiii butt. Tulaliloo jeje baboiii aaaaaah bananaaaa underweaaar uuuhhh 
                 hahaha bananaaaa para tú. 
                 <Readmore>...Read More</Readmore>
                 </p>
                 </BodyInfo>
        </InfoCont>
    </ProfileBlock>
    </div>
}