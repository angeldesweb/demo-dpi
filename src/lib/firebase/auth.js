import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "."

export const SignIn = async ({ email , password }) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth,email,password);
        return { user , error: null }
    } catch (error) {
        return { error , user: null }
    }
}

export const LogOut = async () => {
    await signOut(auth);
}
