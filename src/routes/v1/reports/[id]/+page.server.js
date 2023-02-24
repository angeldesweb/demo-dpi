import { getJourney } from "$lib/firebase/firestore/journeys";
import { getCommunity } from '$lib/firebase/firestore/communities';
import { getPerson } from '$lib/firebase/firestore/people';

export const load = async ({ params }) => {
    const id = params.id;
    const result = await getJourney(id);
    let people = [];
    
    if(!result.success) console.log(result);

    const rescommunity = await getCommunity(result.doc.community);

    if(!rescommunity.success) console.log(rescommunity);
    
    const community = rescommunity.doc;

    if(result.doc.people) {
        let results = result.doc.people.map(async id => await getPerson(id));
        results = await Promise.all(results);
        people = results.map(item => ({...item.doc}));
    }
    return { ...result , community , people }
}