import { getPerson } from "$lib/firebase/firestore/people";

export const load = async ({ params }) => {
    const record = await getPerson(params.code);
    return { id: params.code , doc: record.doc }
}