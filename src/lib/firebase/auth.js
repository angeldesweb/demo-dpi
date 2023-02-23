import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "."

export const SignIn = async ({ email , password }) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth,email,password);
        return { user , error: null }
    } catch (error) {
        console.log(error);
        return { error , user: null }
    }
}
