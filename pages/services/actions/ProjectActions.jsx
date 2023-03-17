import getProjectsAccess from "./../access/ProjectAccess";

export default async function getProjectsAction(){
    const response = await getProjectsAccess();
    const projects = (response.docs.map((doc) =>
    ({ ...doc.data()})))
    return projects;
}