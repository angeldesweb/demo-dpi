import { LogOut } from "$lib/firebase/auth"

export const load = async ({ cookies }) => {
    await LogOut();
    cookies.delete('uid')
    
    return {
        close: true
    }
}