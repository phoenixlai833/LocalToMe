import { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import loading from '../../../public/loading.json'
import { useRouter } from 'next/router'
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
0% {opacity: 1;}
100% {opacity: 0;}
`

const AnimationDiv = styled.div`
position: absolute;
top: 0;
left: 0;
z-index: 1000;
display: flex;
width: 100vw;
height: 100vh;
background-color: white;
justify-content: center;
align-items: center;
animation: ${fadeOut} 1s linear 1.5s;
`

export default function Loading({ sec }) {

  const r = useRouter();

  const [load, setLoad] = useState(true);

  useEffect(() => { setTimeout(() => { setLoad(false) }, sec); }, []);

  if (load) {
    return <AnimationDiv>
      <Lottie style={{ width: 300, height: 300 }} animationData={loading} loop={false} />
    </AnimationDiv>
  }

  //  <p>Loading Complete</p>
  //   </>
}