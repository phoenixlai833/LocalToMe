// import TimePicker from "react-time-picker";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #555555;
  border-radius: 0.6em;
  padding: 0.4em 0.6em;
`;

const Label = styled.p`
  margin: 0;
`;

const Input = styled.input`
border: none;
    width: 100%;
`;

export default function TimeInput({
  time,
  label = "Time Label",
  required = false,
  onChangeTime,
}) {
  function handleChangeTime(time) {
    onChangeTime(time);
  }

  return (
    <Container>
      <Label>
        {label}
        {required && "*"}
      </Label>
      <Input type="time" value={time} />
    </Container>
  );
}
