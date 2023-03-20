import {createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "./database";
import {doc, setDoc, updateDoc, getDoc} from "firebase/firestore";
import {collection, query, where, getDocs} from "firebase/firestore";


export const FirebaseCreateNewAccount = async (email, password) => {

    let user = undefined
    return await createUserWithEmailAndPassword(auth, email, password).then((res) => {

        user = res.user
        return user

    }).then(() => {

        const {uid, email, emailVerified,accessToken,refreshToken} = user
        const {creationTime, lastSignInTime, createdAt, lastLoginAt} = user.metadata

        const data = {
            email,
            emailVerified,
            creationTime,
            lastSignInTime,
            createdAt,
            lastLoginAt,
            accessToken,
            refreshToken,
            uid,
            planID : "-1",
            planName : "Free Tier"
        }
        return setDoc(doc(db, "users", uid), data)


    }).then(() => {
        return {ok: true, data: user, error: {state: false, code: ""}}
    }).catch(error => {
        return {ok: false, data: undefined, error: {state: true, code: error.code}}
    })
}
export const FirebaseSignIn = async (email, password) => {

    let user = undefined
    return await signInWithEmailAndPassword(auth, email, password).

    then((res) =>
    {
        user = res.user
        const {uid, refreshToken, accessToken } = user
        const {lastSignInTime, lastLoginAt} = user.metadata
        const updatedData = {
            lastSignInTime,
            lastLoginAt,
            accessToken,
            refreshToken,
        }

        updateDoc(doc(db, "users", uid), updatedData)
    }).
    then(() =>
    {
        return {ok: true, data: user, error: {state: false, code: ""}}
    }).
    catch(error => { return { ok: false, data: user, error: {state: true, code: error.code}} })
}
export const FirebaseUserExistCheck = async (email) => {

    return await fetchSignInMethodsForEmail(auth, email).then(res => {

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

}
export const FirebaseGetUserData = async (accessToken) => {

    const q = await query(collection(db, "users"), where("accessToken", "==", accessToken));
    return await getDocs(q).then((querySnapshot) =>
    {
        if (querySnapshot.docs.length === 0)
        {
            return {ok: false, error: {state: true, code: "firestore/data-not-found"}}
        }
        else
        {
            return querySnapshot.docs[0].data();
        }
    }).
    catch(error =>
    {
        return {ok: false, error: {state: true,code: error.code}}
    });

}