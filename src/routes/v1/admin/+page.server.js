import { signOut } from "firebase/auth"
import { auth } from "$lib/firebase"
import { fail } from "@sveltejs/kit";
import { createCommunity , updateCommunity , deleteCommunity } from "$lib/firebase/firestore/communities";

export const actions = {
    logout: async ({ cookies }) => {
        
        await signOut(auth);
        cookies.delete('uid');

        // return { success: true }
    },
    addcommunity: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name');

        if(!name) return fail(400,{ name , missing: true });

        const response = await createCommunity({name});

        if(!response.success) return fail(400,{...response});

        return response
    },
    updateCommunity: async ({ url }) => {
        const name = url.searchParams.get('name');
        const id = url.searchParams.get('id');

        const response = await updateCommunity(id,{name});

        if(!response.success) return fail(400,{...response});

        return response
    },
    deleteCommunity: async ({ url }) => {
        const id = url.searchParams.get('id');

        const response = await deleteCommunity(id);

        if(!response.success) return fail(400,{...response});

        return response
    }
}