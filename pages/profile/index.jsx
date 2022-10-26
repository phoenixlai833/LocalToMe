import ProfileSection from "../../components/ProfileBanner"
import styled from "styled-components";
import NavBar from '../../components/NavBar';
import { useState } from "react";

export default function Profile() {
    const [navValue, setNavValue] = useState(2);
    return <div>
        <ProfileSection>

        </ProfileSection>

        <NavBar value={navValue} onChange={(event, newValue) => {
            setNavValue(newValue);
        }} />
    </div>
}