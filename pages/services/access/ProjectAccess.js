import {db} from "./../../api/Firebase";
import {collection, getDocs, getDoc, DocumentData, Firestore, CollectionReference, query} from "firebase/firestore";

const projectsCollectionRef = collection(db, 'Projetos')

export default async function getProjectsAccess(){
    const response = await getDocs(projectsCollectionRef)
    return response;
}