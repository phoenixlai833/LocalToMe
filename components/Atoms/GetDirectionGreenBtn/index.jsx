import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Colours } from '../../../styles/globals';

const GreenBigBtn = styled.button`
    display:flex;
    background-color: ${Colours.primary};
    border: none;
    color: white;
    border-radius: 10px;
    width: 87%;
    height: 50px;
    font-size: large;
    // font-family: Rubik;
    margin: 3em auto;
    // box-shadow: 0px 6px 10px #979494;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    &:hover {
        background-color: #085617;
      }
`;

const GreenSmallBtn = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colours.primary};
    border: none;
    color: white;
    border-radius: 10px;
    width: 100%;
    height: 40px;
    font-size: small;
    // box-shadow: 0px 6px 10px #979494;
    cursor: pointer;
    margin: 5% auto;
    &:hover {
        background-color: #085617;
      }
`;


export default function GetDirectionGreenBtn({ address, onMap }) {

    return (
        <div>
            {onMap ?
                <Link href={`https://www.google.com/maps/dir/?api=1&destination=${address}`}>
                    <GreenSmallBtn>
                        Get Directions
                    </GreenSmallBtn >
                </Link>

                :

                <Link href={`https://www.google.com/maps/dir/?api=1&destination=${address}`}>
                    <GreenBigBtn>
                        Get Directions
                    </GreenBigBtn>
                </Link>

            }
        </div>
    )
}