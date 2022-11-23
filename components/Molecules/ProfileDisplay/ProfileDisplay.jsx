import styled from "styled-components";


const AccountTxt = styled.p`
font-size: 20px;
font-weight: 700;
margin-bottom: 0px;
`

const EmailTxt = styled.p`
font-size: 16px;
margin: 0;
`

export default function ProfileDisplay({ name = 'Name', email = 'emailfornnow@email.com' }) {

    return <div>
        <AccountTxt>{name}</AccountTxt>
        <EmailTxt>{email}</EmailTxt>
    </div>
}