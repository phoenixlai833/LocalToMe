import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const StyledCalendar = styled(Calendar)`
  border-radius: 1em;
  box-shadow: 1px 1px 10px rgba(10, 57, 26, 0.45);
`;

export default function DateCalendar({
  date,
  minDate,
  onChangeDate,
}) {
  function handleChangeDate(selectedDate) {
    onChangeDate(selectedDate);
  }

  return (
    <StyledCalendar
      value={date}
      minDate={minDate}
      onClickDay={handleChangeDate}
    />
  );
}
