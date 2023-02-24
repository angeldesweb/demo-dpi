import { createJourney , listJourneys } from '$lib/firebase/firestore/journeys';
import { updateJourney } from '../../lib/firebase/firestore/journeys';

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
    },
    closejourney: async ({ url }) => {
        const id = url.searchParams.get('id');
        const result = await updateJourney(id,{open:false});
        
        if(!result.success) console.log(result);
        return { ...result }
    },
    reopenjourney: async ({ url }) => {
        const id = url.searchParams.get('id');
        const result = await updateJourney(id,{open:true});
        
        if(!result.success) console.log(result);
        return { ...result }
    }
}