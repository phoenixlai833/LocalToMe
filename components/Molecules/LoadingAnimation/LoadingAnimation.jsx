import { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import loading from '../../../public/loading.json'
import { useRouter } from 'next/router'
import styled from 'styled-components';

const AnimationDiv = styled.div`
display: flex;
width: 100vw;
height: 100vh;
background-color: white;
justify-content: center;
align-items: center;
`

export default function Loading(){

    const r = useRouter();


    const [load, setLoad] = useState(true);

    useEffect(()=>{setTimeout(()=>{setLoad(false)}, 4000);}, []);

    if(load){
      return <AnimationDiv>
        <Lottie style={{width: 300, height:300}} animationData={loading} loop={false}/>
        </AnimationDiv>
    }

    return<>
   <p>Loading Complete</p>
    </>
}