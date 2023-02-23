import { listCommunities } from "$lib/firebase/firestore/communities";
import { createPerson } from "$lib/firebase/firestore/people";

export const load = async () => {
    const list = await listCommunities();
    const communities = list.docs;
    return { communities }
}

export const actions = {
    addmany: async ({ url }) => {
        let users = url.searchParams.get('users');

        users = JSON.parse(users);  
        
        const records = users.map( async doc => createPerson(doc));
        
        let docs = await Promise.all(records);
        if(docs.length === users.length) {
            return {
                success: true
         }
        } else {
            return {
                wrong: true
            }
        }
    },
}