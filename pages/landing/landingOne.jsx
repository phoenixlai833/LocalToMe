import styled from "styled-components";
import Router from "next/router";
import GeneralGreenBtn from "../../components/Atoms/GeneralGreenBtn";
import { motion } from 'framer-motion'

const Container = styled.div`
  @media (min-width: 768px) {
    // background-color: #CDECC2;
    height: 100vh;
    width: 100vw;
  }
`;



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
  div:nth-child(1) {
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


export default function LandingPageOne() {

  return (
    <>
      <Container>
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

            <MascotImg src="../../Mascot/mascotPin.png" />

            <h1>Find Food Resources Near You</h1>
            <p>
              From the comfort of your phone, you can find thousands of available
              food assistance near you.
            </p>
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
              style={{ width: "100%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}
            >
              <BtnCont>

                <Dot>
                  <div></div>

                  <div onClick={() => Router.push("/landing/landingTwo")} style={{ cursor: "pointer" }}></div>

                  <div onClick={() => Router.push("/landing/landingThree")} style={{ cursor: "pointer" }}></div>
                </Dot>

                <GeneralGreenBtn
                  text={"Continue"}
                  h={"4.5em"}
                  onClick={() => Router.push("/landing/landingTwo")}
                />
              </BtnCont>
            </motion.div>
          </LandOne>
        </motion.div>
      </Container>
    </>
  );
}
