import LoginForm from "./index"

// The default export metadata controls how Storybook lists your stories and provides information used by addons. 
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "LoginForm",
    component: LoginForm,
    argTypes: {
        onLogin: { action: 'search' },
    }
}

// Any other named exports will be treated as stories, which should be functions that return your component
export const Default = () => <LoginForm />