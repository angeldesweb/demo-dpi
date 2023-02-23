import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "..";

export const colRef = (col) => collection(db,col);
export const docRef = (id,col) => doc(colRef(col),id);

const formatSnap = (snap) => ({id: snap.id, ...snap.data()});
const formatSnaps = (arr) => {
    let docs = []
    arr.forEach(doc => {
        docs = [...docs,formatSnap(doc)];
    });
    return docs;
}

const errorHandler = (error) => ({ 
    success: false, 
    code: error.code , 
    message: error.message || 'Desconocido' 
})

export const addDocument = async (col,data) => {
    try {
        await addDoc(colRef(col),data);
        return { success : true , message: 'Registro exitoso'}
    } catch (error) {
        return errorHandler(error);
    }
}

export const createDocument = async (id,col,data) => {
    try {
        await setDoc(docRef(id,col),data);
        return { success : true , message: 'Registro exitoso'}
    } catch (error) {
        return errorHandler(error);
    }
}

export const listDocuments = async (col) => {
    try {
        let snaps = await getDocs(colRef(col));
        const docs = formatSnaps(snaps);
        return { success: true, docs }
    } catch (error) {
        return errorHandler(error);
    }
}

export const getDocument = async (id,col) => {
    try {
        const snap = await getDoc(docRef(id,col));
        return { success: true , doc: formatSnap(snap) }
    } catch (error) {
        return errorHandler(error);
    }
}

export const updateDocument = async (id,col,update) => {
    try {
        await updateDoc(docRef(id,col),update);
        return { success:true , message: 'Registro actualizado' }
    } catch (error) {
        return errorHandler(error);
    }
}

export const deleteDocument = async (id,col) => {
    try {
        await deleteDoc(docRef(id,col));
        return { success: true , message: 'Registro eliminado' }
    } catch (error) {
        return errorHandler(error);
    }
}