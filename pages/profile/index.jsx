import ProfileSection from "../../components/ProfileBanner"
import NavBar from '../../components/NavBar';
import styled from "styled-components";
import { useState } from "react";

export default function Profile() {

    return <div>

        <ProfileSection></ProfileSection>
        <NavBar value={4} />

    </div>
}