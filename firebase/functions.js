import {createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "./database";

export const handleCreateNewAccount = async (email, password) => {

    const response = await createUserWithEmailAndPassword(auth, email, password).then(res => {
        return {
            ok: true, data: res.user, error: {
                state: false,
                code: ""
            }
        }
    }).catch(error => {
        return {
            ok: false, data: undefined, error: {
                state: true,
                code: error.code
            }
        }
    })

    return response
}

export const handleSignIn = async (email, password) => {

    const response = await signInWithEmailAndPassword(auth, email, password).then(res => {
        return {
            ok: true, data: res.user, error: {
                state: false,
                code: ""
            }
        }
    }).catch(error => {
        return {
            ok: false, data: undefined, error: {
                state: true,
                code: error.code
            }
        }
    })

    return response
}

export const handleMailExist = async (email) => {

    const response = await fetchSignInMethodsForEmail(auth, email).then(res => {

        if (res.length > 0) {
            return {
                ok: true, error:
                    {
                        state: false,
                        code: ""
                    }
            }
        } else {
            return {
                ok: false, error: {
                    state: true,
                    code: "auth/user-not-found"
                }
            }
        }

    }).catch(error => {
        return {
            ok: false, error: {
                state: true,
                code: error.code
            }
        }
    })

    return response

}