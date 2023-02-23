import { createJourney , listJourneys } from '$lib/firebase/firestore/journeys';

export const load = async () => {
    const results = await listJourneys();
    const docs = results.docs;
    return { docs }
}

export const actions = {
    addjourney: async ({ request }) => {
        const data = await request.formData();
        const values = Object.fromEntries(data);
        
        const { success } = await createJourney(values);
        return { success }
    }
}