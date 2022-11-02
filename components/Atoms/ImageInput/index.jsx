import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;
padding: 0 1em;
`;

const Img = styled.img`
  height: 1.5em;
  width: 1.5em !important;
`;

const Input = styled.input``;

const ImgTitle = styled.p`
  overflow: hidden;
  // max-width: 10ch;
`;

export default function ImageInput({ onChangeImage, image }) {
  function handleChooseImage(e) {
    e.target.nextSibling.click();
  }

  function handleChangeImage(e) {
    onChangeImage(e.target.files[0]);
  }

  return (
    <Container>
      <Img src={image ? "../addImageIconGreen.svg" : "../addImageIcon.svg"} onClick={handleChooseImage} />
      <Input type="file" onChange={handleChangeImage} hidden></Input>
      <ImgTitle>{image && image}</ImgTitle>
    </Container>
  );
}
