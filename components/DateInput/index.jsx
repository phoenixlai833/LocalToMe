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

export default function DateInput({
  date,
  label = "Date Label",
  required = false,
  onChangeDate,
}) {
  function handleChangeDate(date) {
    onChangeDate(date);
  }

  return (
    <Container>
      <Label>
        {label}
        {required && "*"}
      </Label>
      <Input value={date} onClick={handleChangeDate} readOnly />
    </Container>
  );
}
