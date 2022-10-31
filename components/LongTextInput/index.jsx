import ImageInput from "../ImageInput";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #555555;
  border-radius: 0.6em;
  // padding: 0.4em 0.6em;
  padding: 1em 0;
`;

const Label = styled.p`
  margin: 0;
`;

const Input = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  width: 100%;
  height: 10em;
  padding: 0 1em;
`;

const Line = styled.hr`
width: 100%;
`;

export default function LongTextInput({
  label,
  required = false,
  placeholder,
  value,
  onChange,
  image,
  onChangeImage,
}) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  function handleChangeImage(image) {
    onChangeImage(image);
  }
  return (
    <Container>
      {/* <Label>
        {label}
        {required && "*"}
      </Label> */}
      <Input
        placeholder={placeholder}
        value={value && value}
        onChange={handleChange}
        required
      />
      <Line></Line>
      <ImageInput image={image} onChangeImage={handleChangeImage}></ImageInput>
    </Container>
  );
}
