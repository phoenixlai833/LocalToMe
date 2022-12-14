import styled from "styled-components";

const Container = styled.div`
    border: 1px solid #555555;
    border-radius: 0.6em;
    padding: 0.4em 0.6em;
    width: 100%;
`

const Label = styled.p`
    margin: 0;
`

const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
`

export default function ShortTextInput({ label, required = false, placeholder, value, onChange, type, pattern, maxlength }) {

    function handleChange(e) {
        onChange(e.target.value);
    }

    return (
        <Container>
            <Label>{label}{required && "*"}</Label>
            <Input placeholder={placeholder} value={value} onChange={handleChange} type={type} pattern={pattern} maxlength={maxlength} required />
        </Container>
    )
}