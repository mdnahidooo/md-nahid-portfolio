import projectsData from "./projectsData.json";

/**
 * Returns all projects ordered so the LAST item in projectsData.json appears FIRST.
 */
export function getAllProjects() {
    return [...projectsData].reverse();
}

/**
 * Returns featured projects with the LAST added items appearing FIRST.
 */
export function getFeaturedProjects() {
    return [...projectsData]
        .filter((p) => p.featured)
        .reverse()
        .slice(0, 3);
}

/**
 * Finds a specific project by ID.
 */
export function getProjectById(id) {
    return projectsData.find((p) => p.id === String(id));
}

export default projectsData;