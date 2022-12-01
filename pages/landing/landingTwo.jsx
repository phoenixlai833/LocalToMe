import styled from "styled-components";
import GeneralGreenBtn from "../../components/Atoms/GeneralGreenBtn";
import Router from "next/router";
import { motion } from 'framer-motion';

const LandOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding: 5% 5% 3% 5%;
    text-align: center;
    @media (max-width: 768px) {
      h1 {
        margin: 0 10%;
      }
    }
  `;
const Skip = styled.div`
    position: absolute;
    top: 6vh;
    right: 8vw;
    font-size: 16px;
    font-weight: 600;
    cursor:pointer;
  `;

const MascotImg = styled.img`
    height: 300px;
    width: 300px;
  `;
const Dot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 40vw;
    margin-top: 2%;

    div {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: #d9d9d9;
      margin: 0 10px;
    }
    div:nth-child(2) {
      background-color: #108928;
    }
  `;

const BtnCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (min-width: 768px) {
      width: 30em;
    }
  `;

export default function LandingPageTwo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      transition={{
        duration: .8,
        ease: "easeInOut",
      }}>
      <LandOne>
        <Skip onClick={() => Router.push("/auth/signin")}>Skip</Skip>

        <MascotImg src="../../Mascot/mascotEvent.png" />

        <h1>Host & Join Events</h1>
        <p>
          Spread the joy by hosting events or joining an event hosted by those who
          want to help the community.
        </p>

        <BtnCont>
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: .8,
              ease: "easeInOut",
              delay: .01,
            }}
            style={{ width: "100%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>

            <Dot>
              <div onClick={() => Router.push("/landing/landingOne")} style={{ cursor: "pointer" }}></div>
              <div></div>
              <div onClick={() => Router.push("/landing/landingThree")} style={{ cursor: "pointer" }}></div>
            </Dot>

            <GeneralGreenBtn
              text={"Continue"}
              h={"4.5em"}
              onClick={() => Router.push("/landing/landingThree")}
            />
          </motion.div>
        </BtnCont>
      </LandOne>
    </motion.div>
  );
}
