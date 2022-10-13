import React from "react";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

// FirebaseUI config.
ui.start('#firebaseui-auth-container', {
    signInOptions: [
        // List of OAuth providers supported.
        //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    // Other config options...
});

function SignInScreen() {
    return (
        <div
            style={{
                maxWidth: "320px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h1>Pineapple Login</h1>
            <p>Please sign-in:</p>
            <div id="firebaseui-auth-container"></div>
        </div>
    );
}

export default SignInScreen;
