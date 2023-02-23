import { addDocument, deleteDocument, getDocument, listDocuments, updateDocument } from '.';


export const createJourney = async (args) => {
    const response = await addDocument('journeys',args);
    return response;
}

export const listJourneys = async () => {
    const response = await listDocuments('journeys');
    console.log(response)
    return response;
}

export const getJourney = async (id) => {
    const response = await getDocument(id,'journeys');
    return response;
} 

export const updateJourney = async (id,update) => {
    const response = await updateDocument(id,'journeys',update);
    return response;
}

export const deleteJourney = async (id) => {
    const response = await deleteDocument(id,'journeys');
    return response;
}