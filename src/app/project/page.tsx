import MainComponent from "../../components/archiving/MainComponent";

async function getProjects() {
  try {
    const response = await fetch(`${process.env.API_URL_KEY}/projects`);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function ProjectPage() {
  const projectData = await getProjects();

  return <MainComponent projectData={projectData} />;
}
