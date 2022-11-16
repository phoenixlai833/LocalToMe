import styled from "styled-components";

const Img = styled.img`
min-width: 100%;
min-height: 100%;

// object-fit: contain;
// flex-shrink: 0;
`


export default function FavoriteImage({ img }) {


  return (
    <Img src={img} alt='image' />
  )
}
