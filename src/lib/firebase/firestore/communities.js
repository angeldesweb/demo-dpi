import { addDocument, deleteDocument, getDocument, listDocuments, updateDocument } from '.';


export const createCommunity = async (args) => {
    const response = await addDocument('communities',args);
    return response;
}

export const listCommunities = async () => {
    const response = await listDocuments('communities');
    return response;
}

export const getCommunity = async (id) => {
    const response = await getDocument(id,'communities');
    return response;
} 

export const updateCommunity = async (id,update) => {
    const response = await updateDocument(id,'communities',update);
    return response;
}

export const deleteCommunity = async (id) => {
    const response = await deleteDocument(id,'communities');
    return response;
}