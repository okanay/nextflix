import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {FirebaseSignIn} from "../../../firebase/functions";
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            async authorize(credentials, req) {

                let password = credentials.email || "";
                let email = credentials.password || "";

                const response = await FirebaseSignIn(password, email)
                if (response.ok)
                {

                    const data = response.data

                    return {name: {provider: "Firebase Auth", ...data}, email: data.email}
                }
                else
                {
                    throw {status: 401, message: response.error.code};
                }
            }
        }),
    ],
    secret: process.env.JWT_SECRET
}
export default NextAuth(authOptions)