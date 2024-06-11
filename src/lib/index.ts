// place files you want to import through the `$lib` alias in this folder.
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (!credential) throw Error("No credential");
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            return { token, user };
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // ...
            console.error({ errorCode, errorMessage })
        });

}

const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log("Log out successful")
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
        console.error(error)
    });
}

export { loginWithGoogle, logOut }