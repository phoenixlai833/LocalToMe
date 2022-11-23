import DateInput from ".";

export default {
    title: 'Atoms/DateInput',
    component: DateInput,
}

export const NotRequired = () => <DateInput date={(new Date).toString()} label="Label" onChangeDate={() => { }} />
export const Required = () => <DateInput date={(new Date).toString()} label="Label" onChangeDate={() => { }} required={true} />