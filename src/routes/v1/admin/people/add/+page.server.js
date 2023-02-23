import { listCommunities } from "$lib/firebase/firestore/communities";
import { createPerson } from "$lib/firebase/firestore/people";
import { fail } from "@sveltejs/kit";

export const load = async () => {
    const list = await listCommunities()
    const communities = list.docs;
    return { communities }
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name');
        const cui = data.get('cui');
        let birth = data.get('birth');
        const community = data.get('community');

        birth = new Date(birth);

        if(!name) return fail(400,{ name , missing: true });
        if(!cui) return fail(400,{ cui , missing : true });
        if(!birth) return fail(400,{ birth , missing: true });
        if(!community) return fail(400,{ community , missing: true });
        
        await createPerson({name,cui,community,birth})

        return { success: true }
    }
}