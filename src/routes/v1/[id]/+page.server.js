import { getJourney } from "$lib/firebase/firestore/journeys";
import { updateJourney } from "../../../lib/firebase/firestore/journeys";

export const load = async ({ params }) => {
    let id = params.id;
    let result = await getJourney(id);
    
    return { doc: result.doc }
}

export let actions = {
    setuser: async ({ url }) => {
        const id = url.searchParams.get('id');
        const person = url.searchParams.get('person');
        let people = url.searchParams.get('people');
        
        people = JSON.parse(people); 
        let clean = new Set([...people,person]);
        people = [...clean]
        const result = await updateJourney(id,{people});
        console.log(result);
    }
}