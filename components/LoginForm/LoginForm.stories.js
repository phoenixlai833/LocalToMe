import LoginForm from "./index"

export default {
  title: "LoginForm",
  component: LoginForm,
  argTypes: {
    onLogin: { action: 'logging in thing' },
  }
}

export const Default = (args) => <LoginForm {...args} />
export const Error = (args) => <LoginForm {...args} />