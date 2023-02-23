import { SignIn } from "$lib/firebase/auth";
import { fail } from "@sveltejs/kit";

export const actions = {
    default: async ({ request , cookies }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        const { error , user } = await SignIn({email,password});

        if(error) return fail(400,{ message: 'Error de petición' , error: error.messages });

        cookies.set('uid',user.uid);
        cookies.set('token',user.accessToken);
        
        return { success: true }
    }
}