import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #555555;
  border-radius: 0.6em;
  padding: 0.4em 0.6em;

  ${({ selected }) =>
    selected &&
    `
  border: 2.5px solid green;
`}
`;

const Label = styled.p`
  margin: 0;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
`;

export default function DateInput({
  date,
  label = "Date Label",
  required = false,
  onSelectDate,
  selected,
}) {
  function handleSelectDate() {
    onSelectDate();
  }

  return (
    <Container selected={selected}>
      <Label>
        {label}
        {required && "*"}
      </Label>
      <Input value={date} onClick={handleSelectDate} readOnly required />
    </Container>
  );
}
