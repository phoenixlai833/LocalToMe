import styled from "styled-components";

const Container = styled.div`
`;

const Img = styled.img`
  height: 1.5em;
  width: 1.5em !important;
`;

const Input = styled.input``;

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
    </Container>
  );
}
