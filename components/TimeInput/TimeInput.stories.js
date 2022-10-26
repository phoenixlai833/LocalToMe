import TimeInput from ".";

export default {
    title: 'TimeInput',
    component: TimeInput,
}

export const NotRequired = () => <TimeInput label="Label" onChangeTime={() => {}} />
export const Required = () => <TimeInput label="Label" onChangeTime={() => {}} required={true}/>