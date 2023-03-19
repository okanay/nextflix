import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
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
    }})

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
        }})

    return response
}