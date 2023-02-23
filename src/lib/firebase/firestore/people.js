import { createDocument, deleteDocument, getDocument, listDocuments, updateDocument } from '.';


export const createPerson = async (args) => {
    const response = await createDocument(args.cui,'people',args);
    return response;
}

export const listPeople = async () => {
    const response = await listDocuments('people');
    return response;
}

export const getPerson = async (id) => {
    const response = await getDocument(id,'people');
    return response;
} 

export const updatePerson = async (id,update) => {
    const response = await updateDocument(id,'people',update);
    return response;
}

export const deletePerson = async (id) => {
    const response = await deleteDocument(id,'people');
    return response;
}