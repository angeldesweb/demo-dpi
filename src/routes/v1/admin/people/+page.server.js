import { listCommunities } from "$lib/firebase/firestore/communities"
import { listPeople } from "$lib/firebase/firestore/people";

export const load = async () => {
    const results = await listCommunities();
    const docs = results.docs || [];
    return { docs }
}

export const actions = {
    getUsersByLocation: async ({ request }) => {
        let data = await request.formData();
        let community = data.get('community');
        const results = await listPeople();
        const response = results.docs.filter(doc => doc.community === community);
        return {
            docs: response
        }
    }
}