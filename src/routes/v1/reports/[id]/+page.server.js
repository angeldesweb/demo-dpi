import { getJourney } from "$lib/firebase/firestore/journeys";

export const load = async ({ params }) => {
    const id = params.id;
    const result = await getJourney(id);
    console.log(result);
}