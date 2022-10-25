import styled from "styled-components";

const UserInfo = styled.div`
   display: flex;
   align-items: center;
`
const UserImg = styled.img`
   width: 70px;
   height: 70px;
   margin-left: 10px;
   border-radius: 50%;
   margin: 20px
`

export default function UserOfPost({
   userImg,
   name
}){

   return (
      <UserInfo>
         {userImg ? 
         <UserImg src={userImg} alt="user image"/> :
         <UserImg src="https://com-greenpeakfestival.s3.eu-central-1.amazonaws.com/_338xAUTO_fit_center-center_80_none/22458/Jan-Jaap-Verhoeve.jpg" alt="user image"/>}
         {name ? <div>Hosted by {name}</div> : 
         <div>Hosted by Shane</div>}
      </UserInfo>
   )
}


