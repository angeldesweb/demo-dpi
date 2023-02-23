import { listCommunities } from '$lib/firebase/firestore/communities';
import { createJourney } from '$lib/firebase/firestore/journeys';

export const load = async () => {
    const results = await listCommunities();
    const docs = results.docs;
    return { docs }
}

export const actions = {
    addjourney: async ({ request }) => {
        const data = await request.formData();
        let values = Object.fromEntries(data);

        const { success } = await createJourney({...values,open:true});
        return { success }
    }
}