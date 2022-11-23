import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #555555;
  border-radius: 0.6em;
  padding: 0.4em 0.6em;
  width: 100%;
`;

const Label = styled.p`
  margin: 0;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
`;

export default function TimeInput({
  time,
  label = "Time Label",
  required = false,
  onChangeTime,
}) {
  function handleChangeTime(e) {
    onChangeTime(e.target.value);
  }

  return (
    <Container>
      <Label>
        {label}
        {required && "*"}
      </Label>
      <Input type="time" value={time} onChange={handleChangeTime} required/>
    </Container>
  );
}
