import styled from "styled-components";
import Router from "next/router";
import GeneralGreenBtn from "../../components/Atoms/GeneralGreenBtn";
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
    div:nth-child(3) {
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

export default function LandingPageThree() {
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
        <MascotImg src="../../Mascot/mascotNews.png" />

        <h1>Keep Track of Food Banks’ News</h1>
        <p>
          Be updated on News & Resources from different Food Banks and stay
          informed.
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
              delay: .05,
            }}>
            <Dot>
              <div onClick={() => Router.push("/landing/landingOne")} style={{ cursor: "pointer" }}></div>

              <div onClick={() => Router.push("/landing/landingTwo")} style={{ cursor: "pointer" }}></div>

              <div></div>
            </Dot>

            <GeneralGreenBtn
              text={"Get Started"}
              h={"4.5em"}
              onClick={() => Router.push("/auth/signin")}
            />
          </motion.div>
        </BtnCont>
      </LandOne>
    </motion.div>
  );
}
